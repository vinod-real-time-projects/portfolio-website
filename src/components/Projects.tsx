import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.tag}>MY WORK</div>
      <h2 className={styles.title}>Featured <em>Projects</em></h2>
      <p className={styles.sub}>A selection of solutions I've built for clients and personal ventures.</p>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <div key={proj.title} className={styles.card}>
            <div className={styles.projTag}>{proj.tag}</div>
            <div className={styles.projTitle}>{proj.title}</div>
            <div className={styles.projDesc}>{proj.desc}</div>
            <div className={styles.techs}>
              {proj.techs.map((t) => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
