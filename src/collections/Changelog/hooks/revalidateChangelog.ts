import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'
import { Changelog } from '@/payload-types'

export const revalidateChangelog: CollectionAfterChangeHook<Changelog> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/changelog`

      payload.logger.info(`Revalidating changelog at path: ${path}`)

      revalidatePath(path)
      revalidateTag(`changelog`)
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/changelog`

      payload.logger.info(`Revalidating old changelog at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag(`changelog`)
    }
  }
  return doc
}

export const revalidateChangelogAfterDelete: CollectionAfterDeleteHook<Changelog> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/changelog`

    revalidatePath(path)
    revalidateTag(`changelog`)
  }

  return doc
}
