import { ExternalLink } from 'lucide-react'
import Container from '../global/container'
import { MagicCard } from '../ui/magic-card'
import Image from 'next/image'
import Link from 'next/link'

const Analysis = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Powerful Cloud Deployments,
            <br />
            Your Way
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Deploy and manage your projects with trusted cloud providers. From spinning up servers
            to scaling services, dFlow gives you the power to choose and control your
            infrastructure—all in one place.
          </p>
        </div>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">
        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#7f55e2"
              gradientTo="#c4b7e3"
              gradientColor="rgba(59,130,246,0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-primary w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  Seamless AWS EC2 Integration
                  <Link
                    href="/docs/aws" // update this path to your actual docs route
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Launch and manage EC2 instances directly from your dFlow dashboard. Simplify
                  server provisioning, monitor usage, and deploy with the power of AWS—without
                  leaving your workflow.
                </p>
                <div className="w-full h-auto">
                  <Image
                    alt=""
                    src={'/images/aws_integration.webp'}
                    className="rounded-2xl"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </MagicCard>
          </div>
        </Container>

        <Container delay={0.2}>
          <div className="rounded-2xl bg-background/40 relative border border-border/50">
            <MagicCard
              gradientFrom="#7f55e2"
              gradientTo="#c4b7e3"
              gradientColor="rgba(59,130,246,0.1)"
              className="p-4 lg:p-8 w-full overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  More Cloud Platforms Coming Soon
                  <Link
                    href="/docs/providers" // update this path to your actual docs route
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Support for Google Cloud, Microsoft Azure, and DigitalOcean is on the way. Soon,
                  you’ll be able to choose your preferred cloud provider and deploy directly from
                  dFlow—effortlessly.{' '}
                </p>

                <div className="w-full h-auto">
                  <Image
                    className="rounded-2xl"
                    alt=""
                    src={'/images/cloud-providers.webp'}
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </MagicCard>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Analysis
