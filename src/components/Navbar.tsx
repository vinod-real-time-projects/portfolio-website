import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoBars}>
          <div className={styles.lb} />
          <div className={`${styles.lb} ${styles.lb2}`} />
          <div className={styles.lb} />
        </div>
        <div className={styles.logoDivider} />
        <div className={styles.logoName}>SOL<span>VIN</span></div>
      </div>
      <div className={styles.navLinks}>
        {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </div>
      <a href="#contact" className={styles.navCta}>Hire Me</a>
    </nav>
  );
}
