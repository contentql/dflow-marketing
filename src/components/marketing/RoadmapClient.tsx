'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

export default function RoadmapClient({ issues }: { issues: any[] }) {
  const [activeTab, setActiveTab] = useState('All')

  const allLabels = useMemo(() => {
    const labels = new Set<string>()
    issues.forEach((issue) => {
      issue.labels.forEach((label: any) => labels.add(label.name))
    })
    return ['All', ...Array.from(labels)]
  }, [issues])

  const filteredIssues = useMemo(() => {
    if (activeTab === 'All') return issues
    return issues.filter((issue) => issue.labels.some((label: any) => label.name === activeTab))
  }, [activeTab, issues])

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-muted-foreground border-b border-border">
        {allLabels.map((label) => (
          <li key={label} className="me-2">
            <button
              onClick={() => setActiveTab(label)}
              className={`inline-block p-4 rounded-lg transition-colors ${
                activeTab === label
                  ? 'text-primary bg-card font-semibold'
                  : 'hover:text-muted-foreground hover:bg-muted'
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <div className="pt-6 space-y-4">
        {filteredIssues.length === 0 && (
          <p className="text-center text-muted-foreground">
            No issues found for &ldquo;{activeTab}&rdquo;
          </p>
        )}
        {filteredIssues.map((issue) => (
          <div
            key={issue.id}
            className="bg-card p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">{issue.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {issue.labels.map((label: any, index: number) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: `#${label?.color}` }}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>

                {issue.body && (
                  <p className=" text-muted-foreground whitespace-pre-line">{issue.body}</p>
                )}

                <p className="text-sm text-muted-foreground">
                  #{issue.number} opened by <span className="font-medium">{issue.user.login}</span>
                </p>
              </div>

              {issue.assignee && (
                <Image
                  alt={issue.assignee.login}
                  className="size-8 rounded-full border"
                  height={1000}
                  width={1000}
                  src={issue.assignee.avatar_url}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
