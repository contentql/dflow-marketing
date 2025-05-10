'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import { BadgeCheck, ChevronDown, Cloud, Database, Server } from 'lucide-react'
import { useState } from 'react'

const items = [
  {
    title: 'Dflow License',
    value: 'Enterprise',
    icon: <BadgeCheck className="text-green-500 w-5 h-5" />,
    details: 'Unlimited deployments, priority support, multi-user access.',
  },
  {
    title: 'Cloud Provider',
    value: 'AWS (Mumbai)',
    icon: <Cloud className="text-blue-500 w-5 h-5" />,
    details: 'Region: ap-south-1, 99.99% uptime SLA.',
  },
  {
    title: 'User Instances',
    value: '3 Active',
    icon: <Server className="text-purple-500 w-5 h-5" />,
    details: '1 build server, 2 app servers (t3.medium).',
  },
  {
    title: 'Object Storage',
    value: '125 GB / 500 GB',
    icon: <Database className="text-yellow-500 w-5 h-5" />,
    details: 'Used for deployments, backups, and logs.',
  },
]

export default function DashboardOverView() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {/* Full-Width Top Summary Section */}
      <div className="w-full rounded-2xl border shadow-md bg-card p-6">
        <h2 className="text-2xl font-semibold mb-4">System Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-full">{item.icon}</div>
              <div>
                <div className="text-sm text-muted-foreground">{item.title}</div>
                <div className="font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collapsible Cards Section */}
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, i) => (
          <Collapsible.Root
            key={i}
            open={openIndex === i}
            onOpenChange={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <Collapsible.Trigger asChild>
              <div className="rounded-2xl border p-6 shadow-md bg-background space-y-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-muted rounded-full">{item.icon}</div>
                    <div>
                      <div className="text-lg text-muted-foreground">{item.title}</div>
                      <div className="text-xl font-semibold">{item.value}</div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </div>
                <Collapsible.Content className="text-sm text-muted-foreground pt-3">
                  {item.details}
                </Collapsible.Content>
              </div>
            </Collapsible.Trigger>
          </Collapsible.Root>
        ))}
      </div>
    </div>
  )
}
