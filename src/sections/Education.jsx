import { education } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './Education.module.css'

function EduCard({ ed, index }) {
  const ref = useReveal()
  return (
    <div className={`card reveal ${styles.card}`} ref={ref} style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className={styles.statusRow}>
        <span className={`${styles.status} ${ed.status === 'In Progress' ? styles.active : styles.done}`}>
          {ed.status}
        </span>
        <span className={styles.period}>{ed.period}</span>
      </div>
      <h3 className={styles.degree}>{ed.degree}</h3>
      <p className={styles.institution}>{ed.institution}</p>
      <p className={styles.location}>{ed.location}</p>
      <p className={styles.detail}>{ed.detail}</p>
    </div>
  )
}

export default function Education() {
  const ref = useReveal()
  return (
    <section id="education">
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={ref}>
          <span className="section-label">Academic</span>
          <div className="accent-line" />
          <h2 className="section-title">Education</h2>
        </div>
        <div className={styles.grid}>
          {education.map((ed, i) => <EduCard key={ed.degree} ed={ed} index={i} />)}
        </div>
      </div>
    </section>
  )
}
