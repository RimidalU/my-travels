'use server'

import { revalidatePath } from 'next/cache'
import { eventsRepository } from './events.repository'
import { CreateEventsListElementCommand } from './model/types'

export const createEventAction = async (
  command: CreateEventsListElementCommand,
  revalidatePagePath: string,
) => {
  console.log(command)

  await eventsRepository.createEventsListItem(command)
  revalidatePath(revalidatePagePath)
}
