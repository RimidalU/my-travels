import Markdown from 'markdown-to-jsx'

import { CustomImage } from './custom-image'

interface MarkdownWithImagesProps {
  children: string
}

const MarkdownOverride: React.FC<MarkdownWithImagesProps> = ({ children }) => {
  const options = {
    overrides: {
      img: {
        component: CustomImage,
      },
    },
  }
  return <Markdown options={options}>{children}</Markdown>
}

export default MarkdownOverride
