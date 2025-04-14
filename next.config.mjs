import { withPayload } from '@payloadcms/next/withPayload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  editor: lexicalEditor(),
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
