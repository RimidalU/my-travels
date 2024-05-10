import { dbClient } from '@/shared/lib/db'
import { cache } from 'react'
import {
  CreateEventsListElementCommand,
  EventListElement,
  RemoveEventsListElementCommand,
} from './model/types'

class EventsRepository {
  getEventsList = cache(
    (): Promise<EventListElement[]> => dbClient.event.findMany(),
  )

  createEventsListItem = (
    command: CreateEventsListElementCommand,
  ): Promise<EventListElement> => {
    return dbClient.event.create({
      data: command,
    })
  }

  removeEventsListItem = (
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
