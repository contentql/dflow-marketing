'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from './UserContext'

export const RedirectIfAuthenticated: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // Redirect to dashboard pages if user exists
      router.push('/dashboard')
    }
  }, [user, router])

  return <>{children}</>
}
