# Nextra 4 Starter Template

Template dokumentasi siap pakai yang dibangun dengan **Nextra 4** dan **Next.js App Router**. Mendukung **dua bahasa** (🇮🇩 Indonesia & 🇬🇧 English) dengan dropdown pemilih bahasa di navbar.

> Dibuat oleh **Irfan Arfianto**

## Mulai Cepat

```bash
# 1. Install dependensi
pnpm install

# 2. Jalankan server pengembangan
pnpm dev

# 3. Buka http://localhost:3000
```

## Struktur Proyek

```
nextra4-starter/
├── app/
│   ├── [[...mdxPath]]/
│   │   └── page.tsx          ← Route MDX catch-all (sudah dikonfigurasi)
│   └── layout.tsx            ← Layout utama: navbar, footer, sidebar, i18n
├── content/
│   ├── id/                   ← Konten bahasa Indonesia (default)
│   │   ├── _meta.js
│   │   ├── index.mdx
│   │   ├── getting-started.mdx
│   │   ├── reference.mdx
│   │   ├── components-showcase.mdx
│   │   └── guides/
│   │       ├── _meta.js
│   │       ├── index.mdx
│   │       ├── installation.mdx
│   │       └── configuration.mdx
│   └── en/                   ← Konten bahasa Inggris
│       ├── _meta.js
│       ├── index.mdx
│       ├── getting-started.mdx
│       ├── reference.mdx
│       ├── components-showcase.mdx
│       └── guides/
│           ├── _meta.js
│           ├── index.mdx
│           ├── installation.mdx
│           └── configuration.mdx
├── middleware.ts             ← Auto-detect bahasa browser & redirect
├── mdx-components.tsx        ← Registrasi komponen MDX (wajib)
├── next.config.js            ← Konfigurasi Next.js + Nextra + i18n
├── tsconfig.json
└── package.json
```

## Cara Kerja i18n

| URL | Bahasa |
| :--- | :--- |
| `http://localhost:3000/` | 🇮🇩 Indonesia (default) |
| `http://localhost:3000/en` | 🇬🇧 English |
| `http://localhost:3000/getting-started` | Indonesia |
| `http://localhost:3000/en/getting-started` | English |

Pengguna dapat berpindah bahasa lewat **dropdown di navbar**. Middleware juga akan otomatis mendeteksi bahasa browser dan melakukan redirect ke locale yang sesuai.

## Menambahkan Konten Baru

Buat file `.mdx` di **kedua** folder bahasa agar halaman tersedia di dua bahasa:

```bash
# Versi Indonesia
content/id/halaman-baru.mdx

# Versi Inggris
content/en/new-page.mdx
```

Daftarkan di `_meta.js` masing-masing folder:
```js
// content/id/_meta.js
"halaman-baru": "Halaman Baru"

// content/en/_meta.js
"new-page": "New Page"
```

## Checklist Penyesuaian

### 1. Identitas Situs — `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: { default: 'Nama Situs Anda', template: '%s – Nama Situs Anda' },
  description: 'Deskripsi Anda',
}

// Logo navbar
<span style={{ fontWeight: 700 }}>🚀 Logo Anda</span>

// Footer
© {new Date().getFullYear()} Nama Anda

// Dropdown bahasa (sudah dikonfigurasi)
i18n={[
  { locale: 'id', name: '🇮🇩 Indonesia' },
  { locale: 'en', name: '🇬🇧 English' },
]}
```

### 2. Konfigurasi Locale — `next.config.js`

```js
i18n: {
  locales: ['id', 'en'],
  defaultLocale: 'id',
}
```

## Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `pnpm dev` | Jalankan server dev di `http://localhost:3000` |
| `pnpm build` | Build untuk produksi (tanpa indeks pencarian) |
| `pnpm build:search` | Build + buat indeks pencarian Pagefind ✅ |
| `pnpm start` | Jalankan server produksi (setelah build) |

## Masalah yang Diketahui & Perbaikan (Sudah Diterapkan)

| Masalah | Perbaikan yang diterapkan |
| :--- | :--- |
| `MODULE_NOT_FOUND` untuk `_pagefind/pagefind.js` | Guard `isExcludedPath()` di `app/[[...mdxPath]]/page.tsx` |
| 52× `Invalid prop ref supplied to React.Fragment` | `reactStrictMode: false` di `next.config.js` |
| Folder dengan satu anak tampil sebagai accordion | Gunakan file `.mdx` datar alih-alih `folder/index.mdx` |
| Pencarian tidak berfungsi di dev | Jalankan `pnpm build:search` sekali untuk membuat indeks |

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router + i18n Routing
- [Nextra 4](https://nextra.site) — Framework dokumentasi
- [Pagefind](https://pagefind.app) — Pencarian teks penuh statis
- TypeScript

---

© 2025 **Irfan Arfianto**
