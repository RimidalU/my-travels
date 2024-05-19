import { EVENT_TYPE } from '@/shared/types/types'

export type EventListElement = {
  id: string
  name: string
  description: string | null
  type: EVENT_TYPE
}

export type CreateEventsListElementCommand = {
  name: string
  description: string | null
  type: EVENT_TYPE
}

export type RemoveEventsListElementCommand = {
  id: string
}
