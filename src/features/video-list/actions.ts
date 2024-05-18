'use server'

import { revalidatePath } from 'next/cache'
import { videoRepository } from './video.repository'
import { CreateVideoListElementCommand } from './model/types'

export const createVideoAction = async (
  command: CreateVideoListElementCommand,
  revalidatePagePath: string,
) => {
  await videoRepository.createVideoListItem(command)
  revalidatePath(revalidatePagePath)
}
