import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const serverURL = process.env.SERVER_URL ?? 'http://localhost:3000'
const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:4321').split(',').map((origin) => origin.trim()).filter(Boolean)

export default buildConfig({
  serverURL,
  cors: allowedOrigins,
  csrf: [serverURL, ...allowedOrigins],
  admin: { user: Users.slug, importMap: { baseDir: path.resolve(dirname) }, meta: { titleSuffix: '— Sudo Create' } },
  collections: [Users, Media, Projects, Services, Testimonials],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL ?? '' } }),
  plugins: [vercelBlobStorage({
    collections: { media: { prefix: 'sudo-create' } },
    token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
    clientUploads: true,
  })],
  sharp,
})
