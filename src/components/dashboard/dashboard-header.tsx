import Wrapper from '@/components/global/wrapper'
import Image from 'next/image'
import Link from 'next/link'
import ProfileAvatar from './avatar'

const DashboardHeader = () => {
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

          <div className="flex items-center">
            <ProfileAvatar />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default DashboardHeader
