import type { CollectionConfig } from 'payload'

export const Photos: CollectionConfig = {
  slug: 'photos',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title',       type: 'text' },
    { name: 'image',       type: 'upload', relationTo: 'media', required: true },
    { name: 'caption',     type: 'textarea' },
    { name: 'location',    type: 'text' },
    { name: 'takenAt',     type: 'date' },
    { name: 'tags',        type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    {
      name: 'category',
      type: 'select',
      options: ['event', 'brand', 'portrait', 'product', 'street', 'nature', 'other'],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
}
