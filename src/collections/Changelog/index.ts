import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { revalidateChangelog, revalidateChangelogAfterDelete } from './hooks/revalidateChangelog'

export const Changelog: CollectionConfig = {
  slug: 'changelog',
  admin: {
    useAsTitle: 'version',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'version',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: false,
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateChangelog],
    afterDelete: [revalidateChangelogAfterDelete],
  },
}
