import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import Image from 'next/image'

import { VideoListElement } from '../model/types'

export function VideoListItem({
  video,
  actions,
}: {
  video: VideoListElement
  actions?: React.ReactNode
}) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="sm:p-6 p-3">
        <CardDescription>{video.type}</CardDescription>
        <CardTitle className="xl:line-clamp-3 sm:line-clamp-2 sm:text-base line-clamp-1 text-xs">
          {video.title}
        </CardTitle>
        <p className="self-end xl:line-clamp-4 lg:line-clamp-3 sm:text-base line-clamp-2 text-xs">
          {video.date}
        </p>
        <p className="xl:line-clamp-4 lg:line-clamp-3 sm:text-base line-clamp-2 text-xs">
          {video.description}
        </p>
      </CardHeader>
      <CardContent className="p-0 object-cover">
        {video.photo && (
          <Image
            src={video.photo}
            alt={video.title}
            width={300}
            height={300}
            className="rounded-b-xl w-full"
          />
        )}
      </CardContent>
      {actions && <CardFooter>{actions}</CardFooter>}
    </Card>
  )
}
