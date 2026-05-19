import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'client',      type: 'text' },
    { name: 'url',         type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    {
      name: 'gallery',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    { name: 'body',        type: 'richText' },
    { name: 'completedAt', type: 'date' },
    { name: 'tags',        type: 'array',    fields: [{ name: 'tag', type: 'text' }] },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
  ],
}
