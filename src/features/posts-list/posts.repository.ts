import { cache } from 'react'
import { allPosts, Post } from 'contentlayer/generated'

class PostsRepository {
  getPostList = cache((): Post[] => allPosts)
}

export const postsRepository = new PostsRepository()
