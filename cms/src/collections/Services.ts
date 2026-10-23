import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'code', 'order'] },
  access: { read: () => true, create: ({ req }) => Boolean(req.user), update: ({ req }) => Boolean(req.user), delete: ({ req }) => Boolean(req.user) },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'code', type: 'text', required: true, admin: { description: 'Utility label such as 01 / APP.' } },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'deliverables', type: 'array', fields: [{ name: 'item', type: 'text', required: true }] },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
