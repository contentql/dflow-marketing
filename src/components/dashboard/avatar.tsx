'use client'

import { useUser } from '@/context/UserContext'
import { Media } from '@/payload-types'
import { signOut } from '@/utils/signOut'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProfileAvatar = () => {
  const router = useRouter()
  const { user: userData } = useUser()
  const initial = userData?.username?.charAt(0).toUpperCase()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="focus:outline-none">
          {userData?.imageUrl ? (
            <Image
              src={(userData?.imageUrl as Media)?.url || ''}
              alt="User avatar"
              width={1000}
              height={1000}
              className="rounded-full border border-border size-10 shadow-sm object-cover"
            />
          ) : (
            <div className="size-10 rounded-full border border-border bg-muted flex items-center justify-center text-sm font-medium shadow-sm">
              {initial || '?'}
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className="min-w-[180px] bg-card shadow-xl border border-border rounded-lg p-2 z-50"
        >
          <DropdownMenu.Item
            onClick={signOut}
            className="flex items-center gap-2 p-2 rounded-md text-danger hover:bg-danger-foreground cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ProfileAvatar
