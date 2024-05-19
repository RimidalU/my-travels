import { YouTubeEmbed } from '@next/third-parties/google'

export default function VideosPage() {
  return (
    <div className="container py-10 flex-1">
      VideosPage
      <YouTubeEmbed videoid="gACJ5_fJeHM" height={600} />
    </div>
  )
}
