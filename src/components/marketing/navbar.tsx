import Link from 'next/link'
import { NAV_LINKS } from 'constants/links'
import Wrapper from '@/components/global/wrapper'
import { Button } from '@/components/ui/button'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/dflow-no-bg.png"
                alt="dFlow-logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-semibold hidden lg:block">dFlow</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-sm font-medium -1 link">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://discord.gg/5w7JUQYaAD" target="_blank" className="hidden lg:block">
              <Button variant={'outline'}>Discord</Button>
            </Link>
            <Link href="https://demo.dFlow.sh" target="_blank" className="hidden lg:block">
              <Button>View Demo</Button>
            </Link>

            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar
