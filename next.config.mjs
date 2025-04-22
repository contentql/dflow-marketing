import { withPayload } from '@payloadcms/next/withPayload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX({
  mdxOptions: {
    lastModifiedTime: 'git',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  editor: lexicalEditor(),
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

export default withPayload(withMDX(nextConfig), { devBundleServerPackages: false })
