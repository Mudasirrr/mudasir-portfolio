import { useState } from 'react'
import { personal } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className={`reveal ${styles.wrap}`} ref={ref}>
          <div className={styles.left}>
            <span className="section-label">Contact</span>
            <div className="accent-line" />
            <h2 className="section-title">Let's Work<br />Together</h2>
            <p className={styles.sub}>
              Open to senior operations, managerial, HSE leadership, and IT/cybersecurity roles in Melbourne and beyond.
            </p>
            <div className={styles.socials}>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.social}>
                <span className={styles.socialIcon}>in</span>
                <span>LinkedIn</span>
                <span className={styles.arrow}>↗</span>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.social}>
                <span className={styles.socialIcon}>gh</span>
                <span>GitHub</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.emailCard}>
              <p className={styles.emailLabel}>Email me directly</p>
              <p className={styles.emailAddr}>{personal.email}</p>
              <div className={styles.emailActions}>
                <a href={`mailto:${personal.email}`} className={styles.btnPrimary}>
                  Send Email
                </a>
                <button onClick={copyEmail} className={styles.btnCopy}>
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoVal}>Melbourne, VIC, Australia</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>⚡</span>
                <div>
                  <p className={styles.infoLabel}>Status</p>
                  <p className={styles.infoVal}>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
