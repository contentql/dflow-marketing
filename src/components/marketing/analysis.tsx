import { DownloadIcon, FilterIcon, TrendingUpIcon } from 'lucide-react'
import Container from '../global/container'
import { Button } from '../ui/button'
import { MagicCard } from '../ui/magic-card'

const Analysis = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
            Analyze. Optimize. Scale.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Track deployments, monitor service health, and gain insights into how your
            infrastructure performs — all from one unified dashboard.
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
                <h3 className="text-xl font-semibold">Deployment Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Track how your deployments are performing with real-time success rates and
                  durations.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-3xl font-semibold">92.3% Success Rate</div>
                      <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                        <TrendingUpIcon className="w-4 h-4" />
                        +8% from last week
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <FilterIcon className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                      <div>Project</div>
                      <div>Status</div>
                      <div>Duration</div>
                      <div>Success</div>
                    </div>
                    {[
                      {
                        name: 'Website V2',
                        status: 'Completed',
                        duration: '3m 15s',
                        success: '100%',
                      },
                      { name: 'API Server', status: 'Deploying', duration: '1m 03s', success: '—' },
                      { name: 'Auth Service', status: 'Failed', duration: '47s', success: '0%' },
                    ].map((project) => (
                      <div
                        key={project.name}
                        className="grid grid-cols-4 text-sm py-2 border-t border-border/50"
                      >
                        <div>{project.name}</div>
                        <div>{project.status}</div>
                        <div>{project.duration}</div>
                        <div className="font-semibold">{project.success}</div>
                      </div>
                    ))}
                  </div>
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
                <h3 className="text-xl font-semibold">Service Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Gain visibility into how your services are performing across traffic, uptime, and
                  conversions.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-3xl font-semibold">153K Requests</div>
                      <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                        <TrendingUpIcon className="w-4 h-4" />
                        +14% this month
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <FilterIcon className="w-5 h-5" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Analytics Table */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                      <div>Service</div>
                      <div>Uptime</div>
                      <div>Traffic</div>
                      <div>Error Rate</div>
                    </div>
                    {[
                      { channel: 'Auth API', users: '99.9%', sessions: '56K', rate: '0.3%' },
                      { channel: 'Webhook', users: '100%', sessions: '22K', rate: '0.0%' },
                      { channel: 'File Storage', users: '98.4%', sessions: '31K', rate: '1.2%' },
                    ].map((metric) => (
                      <div
                        key={metric.channel}
                        className="grid grid-cols-4 text-sm py-2 border-t border-border/50"
                      >
                        <div>{metric.channel}</div>
                        <div>{metric.users}</div>
                        <div>{metric.sessions}</div>
                        <div className="font-semibold">{metric.rate}</div>
                      </div>
                    ))}
                  </div>
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
