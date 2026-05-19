import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'client',      type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    { name: 'tags',        type: 'array',    fields: [{ name: 'tag', type: 'text' }] },
    { name: 'body',        type: 'richText' },
    { name: 'publishedAt', type: 'date' },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
  ],
}
