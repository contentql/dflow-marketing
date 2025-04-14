import Wrapper from '@/components/global/wrapper'
import { Timeline } from '@/components/marketing/TimeLine'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const ChangelogPage = async () => {
  const payload = await getPayload({ config })
  const { docs: changelogData } = await payload.find({
    collection: 'changelog',
  })
  return (
    <Wrapper className="py-20 relative">
      <Timeline changelogData={changelogData} />
    </Wrapper>
  )
}

export default ChangelogPage
