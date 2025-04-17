import Wrapper from '@/components/global/wrapper'
import { Timeline } from '@/components/marketing/TimeLine'
import config from '@payload-config'
import { Metadata } from 'next'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'Changelog',
  description: `Stay updated with the latest features, improvements, and bug fixes in dFlow. Track every update and enhancement to ensure you're always working with the best version of our PaaS platform.`,
  openGraph: {
    title: 'Changelog | dFlow',
    description: `Stay updated with the latest features, improvements, and bug fixes in dFlow. Track every update and enhancement to ensure you're always working with the best version of our PaaS platform.`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/changelog`,
    images: [
      {
        url: '/images/og-images/changelog.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'Changelog | dFlow',
    description: `Stay updated with the latest features, improvements, and bug fixes in dFlow. Track every update and enhancement to ensure you're always working with the best version of our PaaS platform.`,
    images: ['/images/og-images/changelog.png'],
  },
}

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
