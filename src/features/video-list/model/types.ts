import { EVENT_TYPE } from '@/shared/types/types'

export type VideoListElement = {
  id: string
  title: string
  description?: string | null
  post?: string | null
  photo: string
  video: string
  date: string
  type: EVENT_TYPE
}

export type CreateVideoListElementCommand = {
  title: string
  description?: string | null
  post?: string | null
  photo: string
  video: string
  date: string
  type: EVENT_TYPE
}

export type RemoveVideoListElementCommand = {
  id: string
}
