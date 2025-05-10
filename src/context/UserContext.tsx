'use client'

import { User } from '@/payload-types'
import React, { createContext, use, useState } from 'react'

type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{
  children: React.ReactNode
  initialUser: User | null
}> = ({ children, initialUser }) => {
  const [user, setUser] = useState<User | null>(initialUser)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = use(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}
