import Wrapper from '@/components/global/wrapper'
import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'

export default async function blogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const syncedParams = await params
  const slug = syncedParams?.slug
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'blogs',
    draft: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const blogData = docs?.at(0)

  const localDate = new Date(blogData?.createdAt ?? '')

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const formattedDate = `${localDate.getDate()} ${months[localDate.getMonth()]}, ${localDate.getFullYear()}`

  return (
    <Wrapper className="py-20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 rounded-lg overflow-hidden aspect-video">
          <Image
            src={(blogData?.image as Media)?.url || ''}
            alt={(blogData?.image as Media)?.alt || 'BlogImage'}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogData?.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{formattedDate}</p>

        <RichText
          className="max-w-[48rem] mx-auto"
          data={
            blogData?.content ?? {
              root: {
                type: 'root',
                children: [],
                direction: null,
                format: '',
                indent: 0,
                version: 1,
              },
            }
          }
          enableGutter={false}
        />
      </div>
    </Wrapper>
  )
}
