import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// ─── Metadata Global Situs ──────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Dokumentasi Saya',
    template: '%s – Dokumentasi Saya',
  },
  description: 'Situs dokumentasi yang dibangun dengan Nextra 4',
  metadataBase: new URL('https://example.com'),
}

// Root layout hanya menyediakan shell <html> and <body>.
// Layout Nextra (navbar, sidebar, footer) ada di app/[lang]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
