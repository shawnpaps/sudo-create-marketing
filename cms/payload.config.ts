import path from 'path'
import { fileURLToPath } from 'url'

import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { CaseStudies } from './src/collections/CaseStudies'
import { Media } from './src/collections/Media'
import { Photos } from './src/collections/Photos'
import { Pricing } from './src/collections/Pricing'
import { Projects } from './src/collections/Projects'
import { Services } from './src/collections/Services'
import { Tech } from './src/collections/Tech'
import { Users } from './src/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:3001',
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    CaseStudies,
    Photos,
    Services,
    Pricing,
    Projects,
    Tech,
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  secret: process.env.PAYLOAD_SECRET || '',
})
