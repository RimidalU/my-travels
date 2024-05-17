import { cn } from '@/shared/ui/utils'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="container py-10 flex-1">
      <div className={cn('flex flex-col gap-3')}>
        {allPosts.map((post: Post) => (
          <Link
            key={post._id}
            href={post.url}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {post.title}
            <span className="sr-only">{`to ${post.slug} post`}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
