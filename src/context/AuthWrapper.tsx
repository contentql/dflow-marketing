'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useUser } from '@/context/UserContext'

export const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      // Redirect to marketing pages if user doesn't exist
      router.push('/')
    }
  }, [user, router])

  if (user === null) {
    return null // or a loading indicator
  }

  return <>{children}</>
}
