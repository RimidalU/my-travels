import { AppFooter } from '@/widgets/app-footer/app-footer'
import { AppHeader } from '@/widgets/app-header/app-header'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppHeader pageType="private" />
      {children}
      <AppFooter />
    </>
  )
}
