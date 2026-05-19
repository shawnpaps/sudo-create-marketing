import type { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name',      type: 'text',    required: true },
    { name: 'tagline',   type: 'text' },
    { name: 'price',     type: 'number' },
    {
      name: 'priceLabel',
      type: 'text',
      admin: { description: 'e.g. "starting at", "/ month", "flat rate"' },
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'feature',  type: 'text' },
        { name: 'included', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'highlighted',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Mark as featured/recommended tier', position: 'sidebar' },
    },
    { name: 'order', type: 'number', admin: { position: 'sidebar' } },
  ],
}
