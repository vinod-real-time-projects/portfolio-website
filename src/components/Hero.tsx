import { stats } from '../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Available for Projects
      </div>
      <h1 className={styles.title}>
        Hi, I'm <em>Vinod Kumar</em><br />I Build Smart Solutions
      </h1>
      <p className={styles.sub}>
        Founder of Solvin — delivering intelligent, modern technology solutions.
        From web apps to enterprise systems, I solve complex problems simply.
      </p>
      <div className={styles.btns}>
        <a href="#projects" className={styles.btnPrimary}>View My Work</a>
        <button className={styles.btnSecondary}>Download CV</button>
      </div>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
