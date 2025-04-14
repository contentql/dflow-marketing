import { withPayload } from '@payloadcms/next/withPayload'
import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
}

export default withPayload(withMDX(nextConfig), { devBundleServerPackages: false })
