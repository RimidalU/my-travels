type EVENT_TYPE =
  | 'PLACES'
  | 'HIKING'
  | 'BICYCLES'
  | 'KAYAKS'
  | 'WINTER'
  | 'CUISINE'
  | 'OTHER'

type EventListElement = {
  id: string
  name: string
  description: string | null
  type: EVENT_TYPE
}

type CreateEventsListElementCommand = {
  name: string
  description: string | null
  type: EVENT_TYPE
}

type RemoveEventsListElementCommand = {
  id: string
}
