import { Logo } from './_ui/logo'
import { Layout } from './_ui/layout'
import { MainNav } from './_ui/main-nav'
import { Profile } from './_ui/profile'

export function AppHeader() {
  return <Layout logo={<Logo />} nav={<MainNav />} profile={<Profile />} />
}
