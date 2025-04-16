import type { CollectionConfig } from 'payload'
import { revalidateTags, revalidateTagsAfterDelete } from './hooks/revalidateTags'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'tagTitle',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'text',
      name: 'background',
      admin: {
        components: {
          Field: 'src/fields/ColorField',
        },
      },
      required: true,
      defaultValue: '#7f55e2',
    },
    {
      name: 'tagTitle',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateTags],
    afterDelete: [revalidateTagsAfterDelete],
  },
}
