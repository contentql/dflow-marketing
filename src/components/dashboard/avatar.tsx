'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { LogOut, Settings, UserCircle } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProfileAvatar = () => {
  const router = useRouter()

  const handleLogout = () => {
    // your logout logic here
    console.log('Logging out...')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="focus:outline-none">
          <Image
            src="/favicon.ico" // fallback avatar or use dynamic user image
            alt="User avatar"
            width={1000}
            height={1000}
            className="rounded-full border border-border size-10 shadow-sm"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className="min-w-[180px] bg-card shadow-xl border border-border rounded-lg p-2 z-50"
        >
          <DropdownMenu.Item
            onClick={() => router.push('/dashboard/profile')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-background focus:outline-none focus:ring-0 focus:border-none"
          >
            <UserCircle className="w-4 h-4" />
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => router.push('/dashboard/settings')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-background focus:outline-none focus:ring-0 focus:border-none"
          >
            <Settings className="w-4 h-4" />
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-muted" />

          <DropdownMenu.Item
            onClick={handleLogout}
            className="flex items-center gap-2 p-2 rounded-md text-danger hover:bg-danger-foreground cursor-pointer focus:outline-none focus:ring-0 focus:border-none"
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
