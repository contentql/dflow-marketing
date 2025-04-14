import { map } from '../../../../.map'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { icons } from 'lucide-react'
import { createElement } from 'react'

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
  icon(icon) {
    if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})
