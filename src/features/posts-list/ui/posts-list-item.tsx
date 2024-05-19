import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import Image from 'next/image'

import { PostListElement } from '../model/types'

export function PostsListItem({ post }: { post: PostListElement }) {
  return (
    <Card className="flex justify-between">
      <CardHeader className="sm:p-6 p-3">
        <CardDescription>{post.eventType}</CardDescription>
        <CardTitle className="xl:line-clamp-3 sm:line-clamp-2 sm:text-base line-clamp-1 text-xs">
          {post.title}
        </CardTitle>
        <p className="xl:line-clamp-4 lg:line-clamp-3 sm:text-base line-clamp-2 text-xs">
          {post.description}
        </p>
      </CardHeader>
      <CardContent className="p-0 object-cover">
        {post.photo && (
          <Image
            src={post.photo}
            alt={post.slug}
            width={300}
            height={300}
            className="rounded-r-xl"
          />
        )}
      </CardContent>
    </Card>
  )
}
