import { navigation, services, site } from "@/data/site";
import styles from "@/app/page.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <a aria-label={`${site.brand.name} home`} className={styles.footerLogo} href="#top">
            <span className={styles.footerMark} aria-hidden="true"><i /><i /></span>
            <span>
              <strong>{site.brand.name}</strong>
              <small>{site.brand.descriptor}</small>
            </span>
          </a>
          <h2>Better spaces outside.<br />Better days at home.</h2>
          <p>
            Landscape design, hardscaping, pool care, and outdoor living brought
            together with a calm process and a high standard of finish.
          </p>
          <a className={styles.footerContact} href="#estimate">
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.footerDirectory}>
          <div>
            <h3>Services</h3>
            {services.map((service) => (
              <a href="#services" key={service.title}>{service.title}</a>
            ))}
          </div>
          <div>
            <h3>Explore</h3>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.location}</p>
            <p>Sample hours · Mon–Fri · 8:00–5:00</p>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 {site.brand.name}. Demo presentation website.</span>
        <span>Portfolio demonstration · Frontend only</span>
        <span className={styles.demoNote}>Fictional business and sample content for portfolio demonstration.</span>
      </div>
    </footer>
  );
}
