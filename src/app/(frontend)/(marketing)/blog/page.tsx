import BlogCard from '@/components/blog/BlogCard'
import Wrapper from '@/components/global/wrapper'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const BlogPage = async () => {
  const payload = await getPayload({ config })
  const { docs: blogsData } = await payload.find({ collection: 'blogs' })

  return (
    <Wrapper className="py-20 relative">
      <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight pb-20 max-w-4xl mx-auto">
        Blogs
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {blogsData?.map((blogData, index) => <BlogCard key={index} blogData={blogData} />)}
      </div>
    </Wrapper>
  )
}

export default BlogPage
