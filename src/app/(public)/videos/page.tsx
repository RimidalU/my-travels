import { VideoList } from '@/features/video-list/public/video-list'

export default function VideosPage() {
  return (
    <main className="container py-6 flex-1">
      <div className={'flex flex-col gap-3'}>
        <VideoList className="" />
      </div>
    </main>
  )
}
