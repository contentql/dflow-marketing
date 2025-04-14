import { getPage, getPages } from '../source'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const page = getPage(resolvedParams.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  const lastUpdate = page.data.exports.lastModified

  return (
    <DocsPage
      toc={page.data.exports.toc}
      full={page.data.full}
      breadcrumb={{
        enabled: true,
        full: true,
        includeSeparator: true,
        //   includeRoot: true,
      }}
      lastUpdate={lastUpdate}
      editOnGithub={{
        owner: 'contentql',
        repo: 'dFlow-website',
        path: `/content/docs/${page.file.path}?plain=1`,
      }}
      tableOfContent={{
        style: 'clerk',
      }}
    >
      <DocsBody>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="-mt-4 text-base">{page.data.description}</DocsDescription>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params
  const page = getPage(resolvedParams.slug)

  if (page == null) notFound()

  return {
    title: `${page.data.title} | dFlow`,
    description: page.data.description,
  } satisfies Metadata
}
