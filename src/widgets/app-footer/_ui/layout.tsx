export function Layout({
  copyright,
  socialLinks,
}: {
  copyright?: React.ReactNode
  socialLinks?: React.ReactNode
}) {
  return (
    <footer className="h-14 w-full mx-auto flex flex-col-reverse items-center justify-around md:flex-row">
      {copyright}
      <div className="flex items-center justify-center space-x-5">
        {socialLinks}
      </div>
    </footer>
  )
}
