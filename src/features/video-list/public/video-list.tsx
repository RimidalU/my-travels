import { cn } from '@/shared/ui/utils'
import Link from 'next/link'

import { videoRepository } from '../video.repository'
import { VideoListItem } from '../ui/video-list-item'

export async function VideoList({ className }: { className?: string }) {
  const videoList = await videoRepository.getVideoList()

  return (
    <div className={cn('grid lg:grid-cols-2 grid-cols-1 gap-6', className)}>
      {videoList.map((video) => (
        <Link
          key={video.id}
          href={`videos/${video.id}`}
          className="transition-colors hover:text-blue-800 text-blue-600"
        >
          <VideoListItem video={video} />
          <span className="sr-only">{`to ${video.title} post`}</span>
        </Link>
      ))}
    </div>
  )
}
