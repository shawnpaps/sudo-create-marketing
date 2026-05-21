import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Works } from './collections/Works'
import { Products } from './collections/Products'
import { Testimonials } from './collections/Testimonials'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const serverURL = process.env.SERVER_URL ?? 'http://localhost:3000'

const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:4321')
  .split(',')
  .map((o) => o.trim())

export default buildConfig({
  serverURL,
  cors: allowedOrigins,
  csrf: [serverURL, ...allowedOrigins],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  plugins: [
    s3Storage({
      collections: {
        media: true,
        // 'media-with-prefix': {
        //   prefix,
        // },
        // 'media-with-presigned-downloads': {
        //   // Filter only mp4 files
        //   signedDownloads: {
        //     shouldUseSignedURL: ({ collection, filename, req }) => {
        //       return filename.endsWith('.mp4')
        //     },
        //   },
        // },
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        // ... Other S3 configuration
      },
    }),
  ],
  collections: [Users, Media, Works, Products, Testimonials],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
})
