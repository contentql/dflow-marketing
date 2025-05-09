import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import Button from '@/components/common/Button'
import { RedirectIfAuthenticated } from '@/context/RedirectIfAuthenticated'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <RedirectIfAuthenticated>
      <main className="min-h-screen grow overflow-hidden bg-background">
        <Link href="/" className="group">
          <Button className="ml-2 mt-4" variant="secondary">
            <ArrowLeft className="mr-2 size-4 transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5" />
            Back to Home
          </Button>
        </Link>

        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pb-12 pt-32 md:pb-20 md:pt-40">{children}</div>
          </div>
        </section>
      </main>
    </RedirectIfAuthenticated>
  )
}

export default AuthLayout
