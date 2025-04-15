// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { blurDataUrlsPlugin } from '@oversightstudio/blur-data-urls'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Changelog } from './collections/Changelog'
import { Tags } from './collections/Tags'
import { Blogs } from './collections/Blogs'

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
  ],
})
