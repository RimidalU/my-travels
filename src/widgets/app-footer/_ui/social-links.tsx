import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

const iconCss = 'h-5 w-5 transition-all'

const socialLinks = [
  {
    id: 1,
    link: 'https://github.com/RimidalU',
    icon: <GitHubLogoIcon className={iconCss} />,
    sr: 'Git Hub link',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/uladzimir-stankevich/',
    icon: <LinkedInLogoIcon className={iconCss} />,
    sr: 'LinkedIn link',
  },
  {
    id: 3,
    link: 'mailto:stankevichuuladimiru@gmail.com',
    icon: <EnvelopeClosedIcon className={iconCss} />,
    sr: 'Email link',
  },
]

export function SocialLinks() {
  return socialLinks.map((item) => (
    <Link
      key={item.id}
      href={item.link}
      target="_blank"
      className="transition-colors hover:text-foreground/80 text-foreground/60"
    >
      {item.icon}
      <span className="sr-only">{item.sr}</span>
    </Link>
  ))
}
