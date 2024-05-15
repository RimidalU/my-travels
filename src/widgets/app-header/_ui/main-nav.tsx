import Link from 'next/link'

const navLinks = [
  {
    id: 1,
    link: '/',
    description: 'Home',
  },
  {
    id: 2,
    link: '/tours',
    description: 'Author Tours',
  },
  {
    id: 3,
    link: '/videos',
    description: 'Youtube',
  },
  {
    id: 4,
    link: '/reports',
    description: 'Reports',
  },
  {
    id: 5,
    link: '/blog',
    description: 'Blog',
  },
  {
    id: 5,
    link: '/about',
    description: 'About',
  },
]

export function MainNav() {
  return (
    <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
          href={item.link}
        >
          {item.description}
          <span className="sr-only">{item.description}</span>
        </Link>
      ))}
    </nav>
  )
}
