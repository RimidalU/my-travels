import { videoRepository } from '@/features/video-list/video.repository'
import { YouTubeEmbed } from '@next/third-parties/google'
import Link from 'next/link'

export default async function VideosPage({
  params,
}: {
  params: { id: string }
}) {
  const videoItem = await videoRepository.getVideoById({ id: params.id })

  return (
    <main className="container py-6 flex-1">
      <Link
        href="/videos"
        className="transition-colors hover:text-blue-800 text-blue-600 block mb-8"
      >
        ⬅ Back to All Video
      </Link>
      <div className={'flex flex-col gap-3'}>
        `VideosPage ${params.id}`
        {videoItem && <YouTubeEmbed videoid={videoItem.video} height={600} />}
      </div>
    </main>
  )
}
