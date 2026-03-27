import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.tag}>LET'S WORK TOGETHER</div>
        <h2 className={styles.title}>Got a Project in <em>Mind?</em></h2>
        <p className={styles.sub}>Let's build something great together. Reach out and let's talk about your vision.</p>
        <div className={styles.btns}>
          <a href="mailto:reddy.vinodkumar@outlook.com" className={styles.btnEmail}>Send Me an Email</a>
          <a
            href="https://www.linkedin.com/in/vinod-kumar-reddy-420392168"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnLinkedIn}
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
