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
