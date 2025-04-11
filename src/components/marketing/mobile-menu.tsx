'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NAV_LINKS } from 'constants/links'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-base font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t gap-4 flex flex-col border-border">
            <Link href="https://discord.gg/5w7JUQYaAD" target="_blank" className="w-full">
              <Button variant={'outline'} className="w-full">
                Discord
              </Button>
            </Link>
            <Link href="https://demo.dFlow.sh" target="_blank" className="w-full">
              <Button className="w-full">View Demo</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
