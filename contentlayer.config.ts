import { eventsTypes } from './src/shared/types/types'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    photo: { type: 'string', required: false },
    eventType: {
      type: 'enum',
      options: eventsTypes,
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: { type: 'string', resolve: (post) => post._raw.flattenedPath },
    id: { type: 'string', resolve: (post) => post._id },
  },
}))

export default makeSource({
  contentDirPath: 'src/content/blog',
  documentTypes: [Post],
})
