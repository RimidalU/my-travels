export const eventsTypes = [
  'PLACES',
  'HIKING',
  'BICYCLES',
  'KAYAKS',
  'WINTER',
  'CUISINE',
  'OTHER',
] as const
export type EVENT_TYPE = (typeof eventsTypes)[number]

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
