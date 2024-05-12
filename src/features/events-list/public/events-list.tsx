import { eventsRepository } from '@/features/events-list/events.repository'
import { EventListItem } from '@/features/events-list/ui/event-list-item'
import { cn } from '@/shared/ui/utils'
import { revalidatePath } from 'next/cache'

export async function EventList({
  revalidatePagePath,
  className,
}: {
  revalidatePagePath: string
  className?: string
}) {
  const eventList = await eventsRepository.getEventsList()

  const handleRemoveAction = async (eventId: string) => {
    'use server'

    await eventsRepository.removeEventsListItem({ id: eventId })
    revalidatePath(revalidatePagePath)
  }

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eventList.map((event) => (
        <EventListItem
          event={event}
          onDelete={handleRemoveAction.bind(null, event.id)}
          key={event.id}
        />
      ))}
    </div>
  )
}
