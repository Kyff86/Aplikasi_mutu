# Menghubungkan kembali database lama

## 1. Cari ID spreadsheet lama
Buka Google Sheet database lama. ID ada di URL: docs.google.com/spreadsheets/d/**ID_INI**/edit

## 2. Di project Apps Script
Pastikan ada file: code.gs, api.gs, mutu.gs, komite.gs (+ Index.html).
Buka code.gs, tambahkan fungsi ini lalu Run SEKALI (ganti ID):

    function hubungkanDatabaseLama() {
      Logger.log(setSpreadsheetId('ID_SPREADSHEET_LAMA'));
    }

Setujui izin akses bila diminta.

## 3. Deploy ulang
Deploy > Manage deployments > Edit (ikon pensil) > Version: New version > Deploy.
Atur: Execute as = Me, Who has access = Anyone. Salin URL yang berakhiran /exec.

## 4. Isi config.js di GitHub
window.KMKP_API_URL = "URL_WEB_APP_/exec";

## 5. Menu Pustaka SOP (baru)
Salin ulang komite.gs dan api.gs dari folder apps-script/ ke project Apps Script, lalu:
1. Run `isiSOPBawaan` SEKALI (memuat 11 SPO 2026 sebagai Draft; aman dijalankan ulang, tidak menggandakan).
2. Deploy > Manage deployments > New version > Deploy.
Kolom baru pada sheet SOP_Master (kategori, tgl_dibuat, tgl_berlaku, tgl_kadaluarsa, versi, pengesah, isi_json) ditambahkan otomatis.

## 6. Pembaruan: Pustaka SOP & Beranda Komite
1. Salin `api.gs`, `komite.gs`, dan `Index.html` ke project Apps Script, lalu Deploy > Manage deployments > New version > Deploy.
2. Di editor Apps Script jalankan fungsi `finalkanSemuaSOP` SEKALI agar SOP lama (Draft / review / ditolak) menjadi final.
3. Sheet baru `SOP_Audit` (arsip lembar audit) dan kolom `bukti_json` pada `SOP_Master` dibuat otomatis.

Perubahan:
- Menu dan alur persetujuan SOP dihapus. Semua SOP yang diunggah langsung final; menu Edit Detail dipertahankan.
- Lembar Audit dapat disimpan ke database (sheet SOP_Audit) dan dibuka lagi dari tombol Arsip Audit di Pustaka SOP.
- Beranda Komite menampilkan dashboard insiden, capaian indikator mutu, dan kegiatan Komite dengan filter ruangan dan periode (1/3/6 bulan, 1 tahun).
