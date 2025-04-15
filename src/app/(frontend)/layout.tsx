import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { cn } from '@/lib/cn'
import { generateMetadata } from '@/utils/metadata'
import { Toaster } from '@/components/ui/sonner'
export const metadata = generateMetadata()

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
