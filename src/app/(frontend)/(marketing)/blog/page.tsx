import BlogCard from '@/components/blog/BlogCard'
import Wrapper from '@/components/global/wrapper'
import config from '@payload-config'
import { Metadata } from 'next'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore technical guides, DevOps tutorials, deployment walkthroughs, and product updates on the dFlow blog — everything you need to master modern infrastructure with ease.',
  openGraph: {
    title: 'Blog | dFlow',
    description:
      'Explore technical guides, DevOps tutorials, deployment walkthroughs, and product updates on the dFlow blog — everything you need to master modern infrastructure with ease.',
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog`,
    images: [
      {
        url: '/images/og-images/blog-list.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'Blog | dFlow',
    description:
      'Explore technical guides, DevOps tutorials, deployment walkthroughs, and product updates on the dFlow blog — everything you need to master modern infrastructure with ease.',
    images: ['/images/og-images/blog-list.png'],
  },
}

const BlogPage = async () => {
  const payload = await getPayload({ config })
  const { docs: blogsData } = await payload.find({ collection: 'blogs' })

  return (
    <Wrapper className="py-20 relative">
      <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight pb-20 max-w-4xl mx-auto">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogsData?.map((blogData, index) => <BlogCard key={index} blogData={blogData} />)}
      </div>
    </Wrapper>
  )
}

export default BlogPage
