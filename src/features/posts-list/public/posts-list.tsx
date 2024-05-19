import { cn } from '@/shared/ui/utils'
import Link from 'next/link'

import { postsRepository } from '../posts.repository'
import { PostsListItem } from '../ui/posts-list-item'

export async function PostsList({ className }: { className?: string }) {
  const postsList = postsRepository.getPostList()

  return (
    <div className={cn('grid lg:grid-cols-2 grid-cols-1 gap-6', className)}>
      {postsList.map((post) => (
        <Link
          key={post.id}
          href={post.url}
          className="transition-colors hover:text-blue-800 text-blue-600"
        >
          <PostsListItem post={post} />
          <span className="sr-only">{`to ${post.slug} post`}</span>
        </Link>
      ))}
    </div>
  )
}
