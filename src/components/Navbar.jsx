import { useEffect, useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let current = 'home'
      for (const [id] of navLinks) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="logo">Newton<span>.dev</span></a>
      <ul className={open ? 'open' : ''}>
        {navLinks.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'act' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn g hire">Hire Me</a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
