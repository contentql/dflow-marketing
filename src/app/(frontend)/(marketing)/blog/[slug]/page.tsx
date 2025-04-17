import Wrapper from '@/components/global/wrapper'
import RichText from '@/components/RichText'
import { Media, Tag, User } from '@/payload-types'
import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'

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
        <div className="mb-8 rounded-lg overflow-hidden w-full aspect-video relative">
          {blogData?.image && (
            <Image
              src={(blogData.image as Media)?.url || ''}
              alt={(blogData.image as Media)?.alt || 'Blog Image'}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={(blogData.image as Media)?.blurDataUrl || undefined}
            />
          )}
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
                style={{ backgroundColor: (tag as Tag)?.background }}
                className="text-xs font-medium px-2 py-1 rounded-full"
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
