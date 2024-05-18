import { EVENT_TYPE } from '@/shared/types/types'

export type PostListElement = {
  id: string
  title: string
  description?: string
  eventType: EVENT_TYPE
  photo?: string
  url: string
  slug: string
}
