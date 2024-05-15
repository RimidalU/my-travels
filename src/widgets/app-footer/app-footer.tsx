import { Layout } from './_ui/layout'
import { SocialLinks } from './_ui/social-links'
import { Copyright } from './_ui/copyright'

export function AppFooter() {
  return (
    <Layout socialLinks={<SocialLinks />} copyright={<Copyright />} />

    // <footer className="h-14 w-full mx-auto flex items-center justify-center ">
    //   <Link
    //     href="https://github.com/RimidalU"
    //     target="_blank"
    //     className="transition-colors hover:text-foreground/80 text-foreground/60"
    //   >
    //     <span>&copy; Copyright 2024 </span>
    //     RimidalU
    //   </Link>

    // </footer>
  )
}
