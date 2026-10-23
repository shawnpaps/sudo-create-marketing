import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'projectType', '_status', 'featured', 'order'] },
  access: { read: () => true, create: ({ req }) => Boolean(req.user), update: ({ req }) => Boolean(req.user), delete: ({ req }) => Boolean(req.user) },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true, admin: { description: 'Lowercase URL-friendly name, e.g. tourpass.' } },
    { name: 'eyebrow', type: 'text', admin: { description: 'Short label shown above the project title.' } },
    { name: 'projectType', type: 'select', required: true, options: [
      { label: 'Custom app', value: 'app' }, { label: 'Website', value: 'website' }, { label: 'E-commerce', value: 'commerce' }, { label: 'Studio product', value: 'product' },
    ] },
    { name: 'year', type: 'text' },
    { name: 'summary', type: 'textarea', required: true },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'services', type: 'array', fields: [{ name: 'service', type: 'text', required: true }] },
    { name: 'body', type: 'richText' },
    { name: 'liveURL', type: 'text' },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
}
