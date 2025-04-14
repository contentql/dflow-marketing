import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'

import { pageTree } from './source'

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{ title: 'Dflow' }}
      sidebar={{
        collapsible: true,
        prefetch: false,
        // banner: (
        //   <RootToggle
        //     options={[
        //       {
        //         title: 'Documentation',
        //         description: 'Developer Documentation',
        //         icon: <Book className='opacity-60' />,
        //         url: '/docs',
        //       },
        //       {
        //         title: 'Examples',
        //         description: 'Example projects and guides',
        //         icon: <Code className='opacity-60' />,
        //         url: '/docs/developer-docs/project-structure',
        //       },
        //     ]}></RootToggle>
        // ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
