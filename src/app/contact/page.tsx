import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { HomeMotion } from "@/components/HomeMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, site } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Terrain Outdoor Co.",
  description:
    "Tell Terrain Outdoor Co. about your landscape, hardscape, pool, or outdoor living project.",
};

const nextSteps = [
  ["01", "We review the property", "We start with the information you share and identify the most useful questions to answer next."],
  ["02", "We follow up", "A conversation helps clarify priorities, timing, location, and whether the project is a good fit."],
  ["03", "We walk the site", "When appropriate, the next step is a property walkthrough to understand conditions and opportunities."],
  ["04", "We define the direction", "Scope, priorities, and the next practical step are brought into a clear recommendation."],
];

export default function ContactPage() {
  return (
    <div className={styles.page} id="top">
      <HomeMotion />
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <SiteHeader interior />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="contact-hero-title">
          <div className={styles.heroTitle}>
            <p className={styles.kicker}>Start a conversation</p>
            <h1 id="contact-hero-title">
              Tell us about <em>the property.</em>
            </h1>
          </div>
          <div className={styles.heroBody}>
            <p>
              You do not need to know the exact service, design, or scope before
              reaching out. Start with what is not working and what you want the
              outdoor space to do better.
            </p>
            <div>
              <span>Austin + surrounding communities</span>
              <span>Landscape · Hardscape · Pool · Outdoor Living</span>
            </div>
          </div>
        </section>

        <section className={styles.enquiry} id="enquiry" aria-label="Project enquiry" data-reveal>
          <ContactForm />

          <aside className={styles.contactPanel}>
            <div>
              <p className={styles.kicker}>Prefer to talk directly?</p>
              <h2>Use whichever way feels easiest.</h2>
            </div>
            <dl>
              <div>
                <dt>Phone</dt>
                <dd><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt>Service area</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Sample hours</dt>
                <dd>Mon–Fri · 8:00–5:00</dd>
              </div>
            </dl>
            <p className={styles.panelNote}>
              Contact details, hours, and service geography are sample content for
              this portfolio demonstration.
            </p>
          </aside>
        </section>

        <section className={styles.next} aria-labelledby="next-title" data-reveal>
          <div className={styles.nextIntro}>
            <p className={styles.kicker}>What happens next</p>
            <h2 id="next-title">A straightforward path from enquiry to a useful next step.</h2>
          </div>
          <ol>
            {nextSteps.map(([number, title, copy]) => (
              <li key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.services} aria-labelledby="contact-services-title" data-reveal>
          <div>
            <p className={styles.kicker}>Still exploring?</p>
            <h2 id="contact-services-title">See what Terrain brings together.</h2>
          </div>
          <nav aria-label="Terrain services">
            <a href="/services#landscape-design"><span>01</span>Landscape Design<b aria-hidden="true">↗</b></a>
            <a href="/services#hardscaping"><span>02</span>Hardscaping<b aria-hidden="true">↗</b></a>
            <a href="/services#pool-care"><span>03</span>Pool Care<b aria-hidden="true">↗</b></a>
            <a href="/services#outdoor-living"><span>04</span>Outdoor Living<b aria-hidden="true">↗</b></a>
          </nav>
        </section>

        <section className={styles.local} aria-labelledby="local-title" data-reveal>
          <div>
            <p className={styles.kicker}>Sample service coverage</p>
            <h2 id="local-title">Centered on Austin and the communities around it.</h2>
          </div>
          <div className={styles.areaList}>
            {areas.map((area, index) => (
              <span key={area}><small>{String(index + 1).padStart(2, "0")}</small>{area}</span>
            ))}
          </div>
        </section>

        <section className={styles.reassurance} aria-labelledby="reassurance-title" data-reveal>
          <div>
            <p className={styles.kicker}>Not sure what the project needs?</p>
            <h2 id="reassurance-title">That&apos;s okay. Start with the problem you want to solve.</h2>
          </div>
          <div>
            <p>
              A useful first conversation can be as simple as: the yard does not
              drain well, the patio feels disconnected, the pool area is difficult
              to maintain, or the property needs a more cohesive plan.
            </p>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
              Call {site.phone} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
