// ─── Konfigurasi Sidebar Root ────────────────────────────────────────────────
//
// FORMAT YANG TERSEDIA:
//
//   Halaman datar (satu file, tanpa accordion):
//   "nama-halaman": "Label Sidebar"
//
//   Bagian folder (accordion, beberapa sub-halaman):
//   "nama-folder": "Label Bagian"
//
//   Pemisah:
//   "---": { type: 'separator', title: 'Judul Bagian' }
//
//   Disembunyikan dari sidebar:
//   "nama-halaman": { display: 'hidden' }
//
// ─────────────────────────────────────────────────────────────────────────

export default {
  "index": "Pengantar",
  "getting-started": "Memulai",
  "---": {
    type: 'separator',
    title: 'Panduan'
  },
  "guides": "Panduan",
  "---2": {
    type: 'separator',
    title: 'Referensi'
  },
  "reference": "Referensi",
  "components-showcase": "Showcase Komponen",
}
