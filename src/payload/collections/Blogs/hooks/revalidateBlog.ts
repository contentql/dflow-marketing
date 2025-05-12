import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'
import { Blog } from '@/payload-types'

export const revalidateBlog: CollectionAfterChangeHook<Blog> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const individualPath = `/blog/${doc.slug}`
      const path = '/blog'

      payload.logger.info(`Revalidating blog at individualPath: ${individualPath}`)
      payload.logger.info(`Revalidating blog at path: ${path}`)

      revalidatePath(path)
      revalidatePath(individualPath)
      revalidateTag(`blog-${doc.slug}`)
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldIndividualPath = `/blog/${previousDoc.slug}`
      const path = '/blog'

      payload.logger.info(`Revalidating old blog at oldIndividualPath: ${oldIndividualPath}`)
      payload.logger.info(`Revalidating old blog at path: ${path}`)

      revalidatePath(path)
      revalidatePath(oldIndividualPath)
      revalidateTag(`blog-${doc.slug}`)
    }
  }
  return doc
}

export const revalidateBlogAfterDelete: CollectionAfterDeleteHook<Blog> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const individualPath = `/blog/${doc?.slug}`
    const path = '/blog'

    revalidatePath(path)
    revalidatePath(individualPath)
    revalidateTag(`blog-${doc.slug}`)
  }

  return doc
}
