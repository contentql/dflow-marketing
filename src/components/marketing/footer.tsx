import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Logo and Description */}
        <div className="flex flex-col items-start max-w-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/images/dflow-no-bg.png"
              alt="dFlow-logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-base md:text-lg font-medium text-foreground">dFlow</span>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            dFlow simplifies cloud deployments with powerful tools for managing servers, services,
            and domains.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex gap-5 flex-row text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground transition-all duration-300">
            Docs
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-all duration-300">
            Blog
          </Link>
          <Link href="/changelog" className="hover:text-foreground transition-all duration-300">
            Changelog
          </Link>
          <Link
            href="https://discord.gg/QHeXmUd5"
            className="hover:text-foreground transition-all duration-300"
          >
            Discord
          </Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} dFlow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
