import { useState } from 'react'
import { experience } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './Experience.module.css'

function ExpCard({ exp, index }) {
  const [open, setOpen] = useState(index === 0)
  const ref = useReveal()
  return (
    <div className={`reveal ${styles.card} ${open ? styles.open : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <button className={styles.header} onClick={() => setOpen(!open)} aria-expanded={open}>
        <div className={styles.headerLeft}>
          <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 className={styles.title}>{exp.title}</h3>
            <p className={styles.company}>{exp.company} · <span>{exp.location}</span></p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={`tag ${styles.type}`}>{exp.type}</span>
          <span className={styles.period}>{exp.period}</span>
          <span className={styles.chevron}>{open ? '−' : '+'}</span>
        </div>
      </button>
      {open && (
        <ul className={styles.bullets}>
          {exp.bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>
              <span className={styles.bulletDot} />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience">
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={ref}>
          <span className="section-label">Career</span>
          <div className="accent-line" />
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">Achievement-focused career spanning operations, safety leadership, and software engineering.</p>
        </div>
        <div className={styles.list}>
          {experience.map((exp, i) => <ExpCard key={exp.title} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  )
}
