import { personal } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about">
      <div className={`container ${styles.grid}`}>
        <div className={`reveal ${styles.left}`} ref={ref}>
          <span className="section-label">About Me</span>
          <div className="accent-line" />
          <h2 className="section-title">Cross-Domain<br />Leader &amp; IT Specialization</h2>
          <p className="section-sub">Operations precision. Technical depth. One career.</p>
        </div>
        <div className={styles.right}>
          {personal.bio.split('\n\n').map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}
          <div className={styles.tags}>
            {['NEBOSH Certified','Blockchain Developer','WorkSafe Compliant','MERN Stack','Cybersecurity MSc'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <a href={`mailto:${personal.email}`} className={styles.cta}>
            Let's Connect →
          </a>
        </div>
      </div>
    </section>
  )
}
