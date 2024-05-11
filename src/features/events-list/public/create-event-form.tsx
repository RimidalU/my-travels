'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Textarea } from '@/shared/ui/textarea'
import { useForm } from 'react-hook-form'
import { eventsTypes } from '../model/types'
import { useTransition } from 'react'
import { createEventAction } from '../actions'
import { cn } from '@/shared/ui/utils'

const createEventFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  type: z.enum(eventsTypes),
})

export function CreateEventForm({
  revalidatePagePath,
  className,
}: {
  revalidatePagePath: string
  className?: string
}) {
  const form = useForm<z.infer<typeof createEventFormSchema>>({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      name: '',
      description: '',
      type: eventsTypes[6],
    },
  })
  const [isCreateTransition, startCreateTransition] = useTransition()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createEventAction(data, revalidatePagePath)
          })
        })}
        className={cn(className, 'space-y-4')}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event name</FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormDescription>
                Come up with a catchy event name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event description</FormLabel>
              <FormControl>
                <Textarea placeholder="Event Description" {...field} />
              </FormControl>
              <FormDescription>Describe the event.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event description</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified event to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {eventsTypes.map((event) => (
                    <SelectItem key={event} value={event}>
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Describe the event.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isCreateTransition}>
          Create Event
        </Button>
      </form>
    </Form>
  )
}
