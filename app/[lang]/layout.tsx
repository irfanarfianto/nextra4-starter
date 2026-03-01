import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

// ─── Layout per Locale ─────────────────────────────────────────────────────
// Layout ini menerima [lang] dari URL, mis: /id/... atau /en/...
export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  const navbar = (
    <Navbar
      logo={
        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
          📄 Dokumentasi Saya
        </span>
      }
      // projectLink="https://github.com/irfanarfianto/your-repo"
    />
  )

  const footer = (
    <Footer>
      <span>
        © {new Date().getFullYear()}{' '}
        <strong>Irfan Arfianto</strong>. Dibuat dengan{' '}
        <a href="https://nextra.site" target="_blank" rel="noreferrer">
          Nextra
        </a>
        .
      </span>
    </Footer>
  )

  return (
    <>
      <Head />
      <Layout
        navbar={navbar}
        footer={footer}
        pageMap={pageMap}
        docsRepositoryBase="https://github.com/irfanarfianto/your-repo/tree/main/content"
        sidebar={{ defaultMenuCollapseLevel: 1 }}
        i18n={[
          { locale: 'id', name: '🇮🇩 Indonesia' },
          { locale: 'en', name: '🇬🇧 English' },
        ]}
      >
        {children}
      </Layout>
    </>
  )
}
