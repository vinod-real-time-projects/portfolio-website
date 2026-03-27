import { skills, aboutInfo } from '../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.tag}>WHO I AM</div>
      <h2 className={styles.title}>About <em>Me</em></h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.avatarRing}>
            <div className={styles.avatarInner}>VK</div>
          </div>
          <div className={styles.name}>Vinod Kumar Reddy</div>
          <div className={styles.role}>Founder &amp; Solutions Architect · Solvin</div>
          <p className={styles.bio}>
            Passionate technology professional and founder of Solvin — derived from Vinod Solutions.
            I specialise in building smart, modern digital solutions that help businesses grow. With a
            strong foundation in software development and a deep understanding of business needs, I
            bridge the gap between technology and results.
          </p>
          <div className={styles.skills}>
            {skills.map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.infoList}>
          {aboutInfo.map((item) => (
            <div key={item.label} className={styles.infoRow}>
              <div className={styles.infoLabel}>{item.label}</div>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  {item.value}
                </a>
              ) : (
                <div className={`${styles.infoVal} ${item.highlight ? styles.highlighted : ''}`}>
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
