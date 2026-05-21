import type { CollectionConfig } from 'payload'

export const Works: CollectionConfig = {
  slug: 'works',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'isFeatured', 'hasCaseStudy'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Short label shown in the featured carousel (e.g. "Product", "Website + Media").',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      admin: {
        description: 'Used for filtering in the works grid (e.g. "Music Tech", "App Development").',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        { name: 'tag', type: 'text', required: true },
      ],
    },
    {
      name: 'playbackId',
      type: 'text',
      admin: {
        description: 'Mux playback ID — required for featured carousel display.',
      },
    },
    {
      name: 'siteHref',
      type: 'text',
      admin: { description: 'Link to the live project or site.' },
    },
    {
      name: 'hasCaseStudy',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'caseStudyHref',
      type: 'text',
      admin: {
        condition: (data) => Boolean(data?.hasCaseStudy),
        description: 'Link to the case study page.',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Featured works appear in the carousel on the landing page.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Sort order — lower numbers appear first.' },
    },
  ],
}
