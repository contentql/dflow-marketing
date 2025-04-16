import { Blog, Media, Tag, User } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ blogData }: { blogData: Blog }) {
  const localDate = new Date(blogData?.createdAt)

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
    <div className="max-w-2xl overflow-hidden bg-card rounded-lg shadow-md">
      <Image
        height={1000}
        width={1000}
        className="object-cover w-full h-64"
        src={(blogData?.image as Media)?.url || ''}
        alt="Article"
        blurDataURL={(blogData?.image as Media)?.blurDataUrl || undefined}
      />

      <div className="p-6">
        <div>
          <div className="flex gap-3 flex-wrap">
            {blogData?.tag?.map((tag, index) => (
              <span
                key={index}
                style={{ backgroundColor: (tag as Tag)?.background }}
                className={`text-sm font-medium px-3 py-1 rounded-full`}
              >
                {(tag as Tag)?.tagTitle?.toUpperCase()}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${blogData?.slug}`}
            className="block mt-2 text-xl font-semibold transition-colors duration-300 transform hover:underline"
            role="link"
          >
            <span className="line-clamp-1">{blogData?.title}</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{blogData?.description}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                height={1000}
                width={1000}
                className="size-10 rounded-full"
                src={((blogData?.author as User)?.imageUrl as Media)?.url || ''}
                alt="Avatar"
                blurDataURL={(blogData?.image as Media)?.blurDataUrl || undefined}
              />
              <div className="mx-2 font-semibold text-muted-foreground">
                {(blogData?.author as User)?.displayName}
              </div>
            </div>
            <span className="mx-1 text-xs text-muted-foreground">{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
