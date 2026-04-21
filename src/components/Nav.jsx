import { useState } from 'react'
import styles from './Nav.module.css'

const links = ['About','Skills','Experience','Projects','Education','Contact']

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>MH</span>
          <span className={styles.logoText}>Mudasir Hussain</span>
        </a>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li>
            <a href="mailto:hmudasir714@gmail.com" className={styles.cta}>Hire Me</a>
          </li>
        </ul>
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={open ? styles.x1 : ''}></span>
          <span className={open ? styles.x2 : ''}></span>
          <span className={open ? styles.x3 : ''}></span>
        </button>
      </div>
    </nav>
  )
}
