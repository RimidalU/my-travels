import { notFound } from 'next/navigation'
import Link from 'next/link'

import { allPosts } from 'contentlayer/generated'

import MarkdownOverride from '@/shared/ui/markdown-override'

function getPostBySlug(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  return post ?? notFound()
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostBySlug(params.id)

  return (
    <div className="container py-10 flex-1">
      <Link
        href="/blog"
        className="transition-colors hover:text-foreground/80 text-foreground/60 block mb-8"
      >
        ⬅ Back to Blog
      </Link>
      <article className="prose prose-zinc max-w-none prose-a:text-blue-600 dark:prose-invert">
        <MarkdownOverride>{post.body.raw}</MarkdownOverride>
      </article>
    </div>
  )
}
