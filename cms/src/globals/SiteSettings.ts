import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  access: { read: () => true, update: ({ req }) => Boolean(req.user) },
  fields: [
    { name: 'studioDescription', type: 'textarea', defaultValue: 'A software development studio building apps, websites, and e-commerce for creative businesses and creative people.' },
    { name: 'contactEmail', type: 'email', defaultValue: 'hello@sudocreate.studio' },
    { name: 'availabilityNote', type: 'text', defaultValue: 'Now booking select projects.' },
    { name: 'socialLinks', type: 'array', fields: [{ name: 'label', type: 'text', required: true }, { name: 'url', type: 'text', required: true }] },
  ],
}
