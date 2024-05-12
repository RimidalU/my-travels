import Link from 'next/link'

export function MainNav() {
  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/"
      >
        Home
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/tours"
      >
        Author Tours
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/videos"
      >
        Youtube
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/reports"
      >
        Reports
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/blog"
      >
        Blog
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}
