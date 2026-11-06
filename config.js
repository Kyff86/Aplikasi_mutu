// ============================================================
// KONFIGURASI KONEKSI DATABASE
// Pilih SATU backend. Selama keduanya kosong, aplikasi berjalan di MODE DEMO (data contoh).
// ============================================================

// (A) Google Apps Script Web App (produksi saat ini)
window.KMKP_API_URL = "https://script.google.com/macros/s/AKfycbxYjS178RtFngZf_vHp0Sfz-sotk_0R6PEFuWNdCXbxUFIA75QpU1ComgcAxBdEWHwF/exec";

// (B) Supabase Edge Function "mutu-api" (UJI COBA modul Mutu - lihat supabase/README_SUPABASE.md).
//     Bila diisi, nilai ini DIUTAMAKAN di atas (A). Format:
//     https://<ref-proyek>.supabase.co/functions/v1/mutu-api
// window.KMKP_SUPABASE_URL = "https://XXXXXXXX.supabase.co/functions/v1/mutu-api";
