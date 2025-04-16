import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'
import { Tag } from '@/payload-types'

export const revalidateTags: CollectionAfterChangeHook<Tag> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  const { docs: blogs } = await payload.find({
    collection: 'blogs',
    where: { tag: { contains: doc?.tagTitle } },
  })
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/blog`
      blogs?.map((blog) => {
        const individualPath = `/blog/${blog.slug}`
        revalidatePath(individualPath)
      })

      payload.logger.info(`Revalidating changelog at path: ${path}`)

      revalidatePath(path)
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/blog`
      blogs?.map((blog) => {
        const individualOldPath = `/blog/${blog.slug}`
        revalidatePath(individualOldPath)
      })

      payload.logger.info(`Revalidating old changelog at path: ${oldPath}`)

      revalidatePath(oldPath)
    }
  }
  return doc
}

export const revalidateTagsAfterDelete: CollectionAfterDeleteHook<Tag> = async ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    const { docs: blogs } = await payload.find({
      collection: 'blogs',
      where: { tag: { contains: doc?.tagTitle } },
    })
    const path = `/blog`
    revalidatePath(path)

    blogs?.map((blog) => {
      const individualPath = `/blog/${blog.slug}`
      revalidatePath(individualPath)
    })
  }

  return doc
}
