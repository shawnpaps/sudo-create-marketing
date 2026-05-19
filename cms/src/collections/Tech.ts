import type { CollectionConfig } from 'payload'

export const Tech: CollectionConfig = {
  slug: 'tech',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',        type: 'text',     required: true },
    { name: 'slug',        type: 'text',     required: true, unique: true },
    { name: 'tagline',     type: 'text' },
    { name: 'url',         type: 'text' },
    { name: 'repoUrl',     type: 'text' },
    { name: 'summary',     type: 'textarea' },
    { name: 'coverImage',  type: 'upload',   relationTo: 'media' },
    { name: 'body',        type: 'richText' },
    {
      name: 'stack',
      type: 'array',
      fields: [{ name: 'tech', type: 'text' }],
      admin: { description: 'e.g. Next.js, Supabase, Stripe' },
    },
    {
      name: 'status',
      type: 'select',
      options: ['concept', 'in-progress', 'live', 'archived'],
      defaultValue: 'concept',
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    { name: 'launchedAt', type: 'date', admin: { position: 'sidebar' } },
  ],
}
