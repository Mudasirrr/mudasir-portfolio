import { skills } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './Skills.module.css'

function SkillGroup({ title, items, accent }) {
  const ref = useReveal()
  return (
    <div className={`card reveal ${styles.group}`} ref={ref}>
      <div className={styles.groupHeader}>
        <span className={styles.groupIcon} style={{ background: accent + '18', color: accent }}>
          {title === 'Leadership & Operations' ? '◈' : title === 'Technical' ? '⌬' : '✦'}
        </span>
        <h3 className={styles.groupTitle}>{title}</h3>
      </div>
      <ul className={styles.list}>
        {items.map(s => (
          <li key={s} className={styles.item}>
            <span className={styles.dot} style={{ background: accent }} />
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={ref}>
          <span className="section-label">Expertise</span>
          <div className="accent-line" />
          <h2 className="section-title">Skills &amp; Competencies</h2>
        </div>
        <div className={styles.grid}>
          <SkillGroup title="Leadership & Operations" items={skills.leadership} accent="#c8973a" />
          <SkillGroup title="Technical" items={skills.technical} accent="#3b7dd8" />
          <div className={`card ${styles.group}`}>
            <div className={styles.groupHeader}>
              <span className={styles.groupIcon} style={{ background: '#1d9e7518', color: '#9b1313' }}>✦</span>
              <h3 className={styles.groupTitle}>Certifications </h3>
            </div>
            <ul className={styles.certList}>
              {skills.certifications.map(c => (
                <li key={c.name} className={styles.certItem}>
                  <span className={styles.certName}>{c.name}</span>
                  {c.year && <span className={styles.certYear}>{c.year}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
