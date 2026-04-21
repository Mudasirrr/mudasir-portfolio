import { personal, metrics } from '../data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.content}`}>

        {/* ── Top row: text LEFT, photo RIGHT ── */}
        <div className={styles.topRow}>

          {/* LEFT: all text content */}
          <div className={styles.textCol}>
            <div className={styles.badge}>
              {personal.available && <span className={styles.dot} />}
              Available for opportunities · Melbourne, AU
            </div>

            <h1 className={styles.name}>{personal.name}</h1>

            <div className={styles.titleRow}>
              <span className={styles.line} aria-hidden="true" />
              <p className={styles.title}>{personal.title}</p>
            </div>

            <p className={styles.tagline}>{personal.tagline}</p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.btnPrimary}>Get In Touch</a>
              <a href="#experience" className={styles.btnSecondary}>View Experience</a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>GitHub ↗</a>
            </div>
          </div>

          {/* RIGHT: profile photo */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              {/* Decorative ring */}
              <div className={styles.photoRing} aria-hidden="true" />
              {/* Gold corner accent */}
              <div className={styles.photoAccent} aria-hidden="true" />
              <img
                src="/mudasir-portfolio/profile.png"
                alt="Mudasir Hussain — Operations & Technology Leader"
                className={styles.photo}
              />
            </div>
          </div>

        </div>

        {/* ── Metric strip below both columns ── */}
        <div className={styles.metrics}>
          {metrics.map(m => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricVal}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
