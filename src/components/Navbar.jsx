import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    links.forEach((link) => {
      const section = document.querySelector(link.href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">{profile.name}</a>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar