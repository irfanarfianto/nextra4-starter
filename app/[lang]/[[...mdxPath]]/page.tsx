import { importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'
import { notFound } from 'next/navigation'

// Paths yang BUKAN halaman MDX
const EXCLUDED_PREFIXES = ['_pagefind', '_next', 'api']

function isExcludedPath(mdxPath: string[]): boolean {
  return EXCLUDED_PREFIXES.some(prefix => mdxPath[0] === prefix)
}

export async function generateMetadata(props: any) {
  const params = await props.params
  const { lang, mdxPath = [] } = params

  if (isExcludedPath(mdxPath)) return {}

  try {
    // Gabungkan lang + mdxPath → content/id/getting-started.mdx
    const { metadata } = await importPage([lang, ...mdxPath])
    return metadata
  } catch {
    return {}
  }
}

export default async function Page(props: any) {
  const params = await props.params
  const { lang, mdxPath = [] } = params

  if (isExcludedPath(mdxPath)) notFound()

  try {
    // Gabungkan lang + mdxPath → content/{lang}/{...mdxPath}.mdx
    const { default: MDXContent, toc, metadata, sourceCode } = await importPage([lang, ...mdxPath])
    const components = useMDXComponents({})
    const Wrapper = components.wrapper

    if (!Wrapper) {
      return <MDXContent {...props} params={params} />
    }

    return (
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch {
    notFound()
  }
}
