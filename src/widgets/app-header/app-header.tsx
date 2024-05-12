import { Logo } from './_ui/logo'
import { Layout } from './_ui/layout'
import { MainNav } from './_ui/main-nav'
import { Profile } from './_ui/profile'
import { ToggleTheme } from '@/features/theme/toggle-theme'

type PAGE_TYPE = 'auth' | 'private' | 'public'

export function AppHeader({ pageType = 'private' }: { pageType: string }) {
  const isProfile = pageType !== 'auth'

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  )
}
