import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'tagTitle',
  },
  fields: [
    {
      name: 'tagTitle',
      type: 'text',
      required: true,
    },
  ],
}
