import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'

function getPostBySlug(slug: string) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  return post ?? notFound()
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = getPostBySlug(params.id)

  const MDXContent = getMDXComponent(post.body.code)
  return (
    <div className="container py-10 flex-1">
      <Link
        href="/blog"
        className="transition-colors hover:text-foreground/80 text-foreground/60 block mb-8"
      >
        ⬅ Back to Blog
      </Link>

      <MDXContent />
    </div>
  )
}
