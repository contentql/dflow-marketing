import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URI: z.string().optional(),
    DATABASE_SECRET: z.string().optional(),
    PAYLOAD_SECRET: z.string().min(1),
    S3_ENDPOINT: z.string().min(1),
    S3_ACCESS_KEY_ID: z.string().min(1),
    S3_SECRET_ACCESS_KEY: z.string().min(1),
    S3_BUCKET: z.string().min(1),
    S3_REGION: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_SECRET: process.env.DATABASE_SECRET,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    S3_ENDPOINT: process.env.S3_ENDPOINT,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
  },
})
