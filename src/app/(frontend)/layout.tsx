import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/cn'
import { env } from 'env'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'dFlow',
    template: '%s | dFlow',
  },
  description:
    'dFlow is a modern PaaS platform that lets you deploy services, manage infrastructure, view logs, connect domains, and scale effortlessly — all from a unified DevOps dashboard.',
  openGraph: {
    title: 'dFlow',
    description:
      'dFlow is a modern PaaS platform that lets you deploy services, manage infrastructure, view logs, connect domains, and scale effortlessly — all from a unified DevOps dashboard.',
    url: env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'dFlow',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dFlow',
    description:
      'dFlow is a modern PaaS platform that lets you deploy services, manage infrastructure, view logs, connect domains, and scale effortlessly — all from a unified DevOps dashboard.',
    images: ['/images/og-image.png'],
  },
  metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          `min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide ${geistSans.className} ${geistMono.variable}`,
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
      </body>
    </html>
  )
}
