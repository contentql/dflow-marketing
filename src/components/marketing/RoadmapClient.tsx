'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import tinycolor from 'tinycolor2'
export default function RoadmapClient({ issues }: { issues: any[] }) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  const allLabels = useMemo(() => {
    const labels = new Set<string>()
    issues.forEach((issue) => {
      issue.labels.forEach((label: any) => labels.add(label.name))
    })
    return Array.from(labels)
  }, [issues])

  const handleLabelChange = (label: string) => {
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    )
  }

  const filteredIssues = useMemo(() => {
    if (selectedLabels.length === 0) return issues
    return issues.filter((issue) =>
      issue.labels.some((label: any) => selectedLabels.includes(label.name)),
    )
  }, [selectedLabels, issues])

  return (
    <>
      <div className="flex flex-wrap gap-3 py-4 border-b border-border">
        {allLabels.map((label) => {
          const isSelected = selectedLabels.includes(label)
          return (
            <motion.div
              key={label}
              onClick={() => handleLabelChange(label)}
              className={`flex items-center gap-2 cursor-pointer select-none rounded-full border border-border px-4 py-1.5 text-sm transition-all hover:shadow-md ${
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground'
              }`}
              animate={{
                scale: isSelected ? 1.05 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <span>{label}</span>
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      mass: 0.5,
                    }}
                  >
                    <Check className="h-4 w-4" strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      <div className="pt-6 space-y-4">
        {filteredIssues.length === 0 && (
          <p className="text-center text-muted-foreground">No issues found for selected filters.</p>
        )}

        {filteredIssues.map((issue) => (
          <div
            key={issue.id}
            className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline"
                >
                  {issue.title}
                </a>

                <div className="flex flex-wrap gap-2">
                  {issue.labels.map((label: any, index: number) => {
                    const bgColor = `#${label?.color}`
                    const isLight = tinycolor(bgColor).isLight()

                    const textColorClass = isLight ? 'text-accent-foreground' : 'text-foreground'

                    return (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${textColorClass}`}
                        style={{ backgroundColor: bgColor }}
                      >
                        {label.name}
                      </span>
                    )
                  })}
                </div>

                {issue.body && (
                  <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
                  </div>
                )}

                <p className="text-sm text-muted-foreground">
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    #{issue.number}
                  </a>{' '}
                  opened by{' '}
                  <a
                    href={issue.user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {issue.user.login}
                  </a>
                </p>
              </div>

              {issue.assignee && (
                <a
                  href={issue.assignee.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={issue.assignee.login}
                >
                  <Image
                    alt={issue.assignee.login}
                    className="size-8 rounded-full border"
                    height={1000}
                    width={1000}
                    src={issue.assignee.avatar_url}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
