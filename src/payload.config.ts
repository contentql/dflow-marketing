// storage-adapter-import-placeholder
import { blurDataUrlsPlugin } from '@oversightstudio/blur-data-urls'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { resendAdapter } from '@payloadcms/email-resend'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { env } from 'env'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Blogs } from './collections/Blogs'
import { Changelog } from './collections/Changelog'
import { Media } from './collections/Media'
import { Tags } from './collections/Tags'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Changelog, Tags, Blogs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    blurDataUrlsPlugin({
      enabled: true,
      collections: [Media],
      // Blur data URLs Settings (Optional)
      blurOptions: {
        blur: 18,
        width: 32,
        height: 'auto',
      },
    }),
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        media: true,
      },
      bucket: env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID!,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY!,
        },
        endpoint: env.S3_ENDPOINT,
        region: env.S3_REGION,
      },
    }),
  ],
  email: resendAdapter({
    apiKey: env.RESEND_API_KEY!,
    defaultFromAddress: env.RESEND_SENDER_EMAIL!,
    defaultFromName: env.RESEND_SENDER_NAME!,
  }),
})
