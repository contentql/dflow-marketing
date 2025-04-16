import Wrapper from '@/components/global/wrapper'
import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media, Tag, User } from '@/payload-types'

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
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 rounded-lg overflow-hidden aspect-video">
          <Image
            src={(blogData?.image as Media)?.url || ''}
            alt={(blogData?.image as Media)?.alt || 'BlogImage'}
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
            blurDataURL={(blogData?.image as Media)?.blurDataUrl || undefined}
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogData?.title}</h1>
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center">
            <Image
              height={1000}
              width={1000}
              className="size-10 rounded-full"
              src={((blogData?.author as User)?.imageUrl as Media)?.url || ''}
              alt="Avatar"
              blurDataURL={(blogData?.image as Media)?.blurDataUrl || undefined}
            />
            <div>
              <div className="mx-2 font-semibold text-muted-foreground">
                {(blogData?.author as User)?.displayName}
              </div>
              <span className="mx-2 text-muted-foreground">{formattedDate}</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {blogData?.tag?.map((tag, index) => (
              <span
                key={index}
                className={`bg-[${(tag as Tag)?.background}] text-sm font-medium px-3 py-1 rounded-full`}
              >
                {(tag as Tag)?.tagTitle}
              </span>
            ))}
          </div>
        </div>

        <RichText
          className="max-w-4xl mx-auto"
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
