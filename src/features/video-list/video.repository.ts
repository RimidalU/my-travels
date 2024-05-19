import { dbClient } from '@/shared/lib/db'
import { cache } from 'react'
import {
  CreateVideoListElementCommand,
  GetVideoListElementCommand,
  RemoveVideoListElementCommand,
  VideoListElement,
} from './model/types'

class VideoRepository {
  getVideoList = cache(
    (): Promise<VideoListElement[]> => dbClient.video.findMany(),
  )

  createVideoListItem = (
    command: CreateVideoListElementCommand,
  ): Promise<VideoListElement> => {
    return dbClient.video.create({
      data: command,
    })
  }

  removeVideoListItem = (
    command: RemoveVideoListElementCommand,
  ): Promise<VideoListElement> => {
    return dbClient.video.delete({
      where: {
        id: command.id,
      },
    })
  }

  getVideoById = (
    command: GetVideoListElementCommand,
  ): Promise<VideoListElement | null> => {
    return dbClient.video.findUnique({
      where: {
        id: command.id,
      },
    })
  }
}

export const videoRepository = new VideoRepository()
