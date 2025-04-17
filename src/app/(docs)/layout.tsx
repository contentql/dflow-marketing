import { env } from 'env'
import { RootProvider } from 'fumadocs-ui/provider'
import 'fumadocs-ui/style.css'
import { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Docs',
    template: '%s | dFlow Docs',
  },
  description: `Explore the official dFlow documentation to get started, configure services, manage deployments, and make the most of your PaaS experience. Clear guides, examples, and best practices—all in one place.`,
  openGraph: {
    title: 'dFlow Docs',
    description: `Explore the official dFlow documentation to get started, configure services, manage deployments, and make the most of your PaaS experience. Clear guides, examples, and best practices—all in one place.`,
    url: `${env.NEXT_PUBLIC_WEBSITE_URL}/docs`,
    siteName: 'dFlow Docs',
    images: [
      {
        url: '/images/og-images/docs.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dFlow Docs',
    description: `Explore the official dFlow documentation to get started, configure services, manage deployments, and make the most of your PaaS experience. Clear guides, examples, and best practices—all in one place.`,
    images: ['/images/og-images/docs.png'],
  },
  metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
}

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
