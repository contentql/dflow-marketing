import config from '@payload-config'
import { env } from 'env'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

const BASE_URL = env.NEXT_PUBLIC_WEBSITE_URL

export async function GET() {
  const payload = await getPayload({ config })

  // Fetch blog posts
  const { docs: blogs } = await payload.find({ collection: 'blogs' })
  const blogPosts = blogs?.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.createdAt).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Static pages
  const staticPages = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/changelog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  const entries = [...staticPages, ...blogPosts]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
