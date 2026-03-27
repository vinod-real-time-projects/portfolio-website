import { services, type ServiceIconKey } from '../data/portfolio';
import styles from './Services.module.css';

function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  const icons: Record<ServiceIconKey, React.ReactNode> = {
    web: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    consulting: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" width="18" height="18">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.tag}>WHAT I DO</div>
      <h2 className={styles.title}>Services I <em>Offer</em></h2>
      <p className={styles.sub}>End-to-end technology solutions tailored to your business needs.</p>
      <div className={styles.grid}>
        {services.map((svc) => (
          <div key={svc.title} className={styles.card}>
            <div className={styles.iconBox}>
              <ServiceIcon icon={svc.icon} />
            </div>
            <div className={styles.cardTitle}>{svc.title}</div>
            <div className={styles.cardDesc}>{svc.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
