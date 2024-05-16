import { Layout } from './_ui/layout'
import { SocialLinks } from './_ui/social-links'
import { Copyright } from './_ui/copyright'

export function AppFooter() {
  return <Layout socialLinks={<SocialLinks />} copyright={<Copyright />} />
}
