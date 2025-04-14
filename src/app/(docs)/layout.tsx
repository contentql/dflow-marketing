import { RootProvider } from 'fumadocs-ui/provider'
import 'fumadocs-ui/style.css'
import type { ReactNode } from 'react'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootProvider theme={{ enabled: true, defaultTheme: 'dark', enableSystem: true }}>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
