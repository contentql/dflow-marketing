import './globals.css'
import { cn } from '@/lib/cn'
import { generateMetadata } from '@/utils/metadata'
// import { base, heading, subheading } from 'constants/fonts'
import { Toaster } from '@/components/ui/sonner'
export const metadata = generateMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide',
          // base.variable,
          // heading.variable,
          // subheading.variable,
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        {children}
      </body>
    </html>
  )
}
