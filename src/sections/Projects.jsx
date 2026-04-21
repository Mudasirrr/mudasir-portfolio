import { projects, personal } from '../data'
import useReveal from '../hooks/useReveal'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  return (
    <article className={`card reveal ${styles.card} ${project.highlight ? styles.highlight : ''}`} ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      {project.highlight && <span className={styles.featuredBadge}>Featured</span>}
      <div className={styles.top}>
        <div className={styles.icon}>⬡</div>
        <div className={styles.links}>
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="GitHub">GitHub ↗</a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Live demo">Live ↗</a>}
        </div>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.stack}>
        {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={ref}>
          <span className="section-label">Portfolio</span>
          <div className="accent-line" />
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-sub">A selection of technical builds across blockchain, full-stack, and tooling.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
        <div className={styles.cta}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
