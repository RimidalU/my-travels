'use client'

import { useTransition } from 'react'

import { Button } from '@/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'

import { EventListElement } from '../model/types'

export function EventListItem({
  event,
  onDelete,
}: {
  event: EventListElement
  onDelete: () => Promise<void>
}) {
  const [isLoadingRemove, startRemoveTransition] = useTransition()

  const handleRemove = () => {
    startRemoveTransition(async () => {
      await onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardDescription>{event.type}</CardDescription>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button type="submit" disabled={isLoadingRemove} onClick={handleRemove}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}
