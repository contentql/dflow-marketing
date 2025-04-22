import Wrapper from '@/components/global/wrapper'
import RoadmapClient from '@/components/marketing/RoadmapClient'
import { Suspense } from 'react'

const getIssues = async () => {
  const res = await fetch('https://api.github.com/repos/akhil-naidu/dflow/issues', {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('Failed to fetch issues')
  return res.json()
}

const RoadmapPage = async () => {
  const issues = await getIssues()

  return (
    <Wrapper className="py-20 relative">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight pb-20 max-w-4xl mx-auto">
          Roadmap
        </h1>
        <Suspense fallback={<p>Loading roadmap...</p>}>
          <RoadmapClient issues={issues} />
        </Suspense>
      </div>
    </Wrapper>
  )
}

export default RoadmapPage
