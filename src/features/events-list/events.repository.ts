import { dbClient } from '@/shared/lib/db'
import { cache } from 'react'

class EventsRepository {
  getEventsList = cache(
    (): Promise<EventListElement[]> => dbClient.event.findMany(),
  )

  createEventsList = (
    command: CreateEventsListElementCommand,
  ): Promise<EventListElement> => {
    return dbClient.event.create({
      data: command,
    })
  }

  removeEventsList = (
    command: RemoveEventsListElementCommand,
  ): Promise<EventListElement> => {
    return dbClient.event.delete({
      where: {
        id: command.id,
      },
    })
  }
}

export const eventsRepository = new EventsRepository()
