import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>SOL<span>VIN</span></div>
      <div className={styles.copy}>© 2026 Solvin · Derived from Vinod Solutions · Singapore</div>
    </footer>
  );
}
