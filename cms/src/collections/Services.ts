import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',        type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'tagline',     type: 'text' },
    { name: 'description', type: 'richText' },
    { name: 'icon',        type: 'text',     admin: { description: 'Icon name or SVG string' } },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    {
      name: 'deliverables',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
}
