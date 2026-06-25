import { useState } from 'react'
import logo from '../assets/img/nema-logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="nema Startseite">
        <img src={logo} alt="nema Logo" />
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="main-navigation" className={open ? 'nav is-open' : 'nav'}>
        <a href="#about">Über mich</a>
        <a href="#photography">Fotografien</a>
        <a href="#artists">Künstler</a>
        <a href="#favorites">Favoriten</a>
        <a href="#admin">Admin</a>
        <a className="nav-login" href="#login">Login</a>
      </nav>
    </header>
  )
}
