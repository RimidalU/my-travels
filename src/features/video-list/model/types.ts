import { EVENT_TYPE } from '@/shared/types/types'

export type VideoListElement = {
  id: string
  title: string
  description?: string
  post?: string
  photo: string
  video: string
  date?: Date
  eventType: EVENT_TYPE
}

export type CreateVideoListElementCommand = {
  title: string
  description?: string
  post?: string
  photo: string
  video: string
  date?: Date
  type: EVENT_TYPE
}

export type RemoveVideoListElementCommand = {
  id: string
}
