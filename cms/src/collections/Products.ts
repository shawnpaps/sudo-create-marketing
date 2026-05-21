import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'status', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'in-lab',
      options: [
        { label: 'Live', value: 'live' },
        { label: 'In the Lab', value: 'in-lab' },
        { label: 'Open Call', value: 'open-call' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      admin: { condition: (data) => data?.status === 'live' },
      fields: [
        { name: 'tag', type: 'text', required: true },
      ],
    },
    {
      name: 'playbackId',
      type: 'text',
      admin: {
        condition: (data) => data?.status === 'live',
        description: 'Mux playback ID for the product demo video.',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      admin: { condition: (data) => data?.status === 'live' },
    },
    {
      name: 'caseStudyHref',
      type: 'text',
      admin: { condition: (data) => data?.status === 'live' },
    },
    {
      name: 'siteHref',
      type: 'text',
      admin: { condition: (data) => data?.status === 'live' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Sort order — lower numbers appear first.' },
    },
  ],
}
