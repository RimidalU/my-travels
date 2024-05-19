import { PostsList } from '@/features/posts-list/public/posts-list'

export default function BlogPage() {
  return (
    <main className="container py-10 flex-1">
      <div className={'flex flex-col gap-3'}>
        <PostsList className="" />
      </div>
    </main>
  )
}
