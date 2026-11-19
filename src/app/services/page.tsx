import type { Metadata } from "next";
import Image from "next/image";
import { HomeMotion } from "@/components/HomeMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, projects, site } from "@/data/site";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Terrain Outdoor Co.",
  description:
    "Explore Terrain Outdoor Co. services for landscape design, hardscaping, pool care, and outdoor living.",
};

const serviceDetails = [
  {
    number: "01",
    id: "landscape-design",
    title: "Landscape Design",
    eyebrow: "Planting · grading · lighting",
    copy:
      "A strong landscape begins with the property itself. We shape planting, circulation, grade, lawn, lighting, and long-term care around the architecture and the way the outdoor space is actually used.",
    items: [
      "Planting plans & installation",
      "Grading & drainage coordination",
      "Lawns & garden structure",
      "Landscape lighting",
      "Seasonal improvements",
      "Ongoing landscape care",
    ],
    image:
      "https://images.unsplash.com/photo-1793087404058-9be26ac4aab0?auto=format&fit=crop&w=1800&q=84",
    alt: "Stone path leading through a bright designed garden to a modern building",
  },
  {
    number: "02",
    id: "hardscaping",
    title: "Hardscaping",
    eyebrow: "Stone · pavers · structure",
    copy:
      "Hardscape gives an outdoor space its structure. We focus on material transitions, comfortable movement, drainage, proportion, and details that look intentional from the house and hold up under everyday use.",
    items: [
      "Patios & terraces",
      "Walkways & steps",
      "Retaining walls",
      "Stone & paver detailing",
      "Fire features",
      "Pool surrounds",
    ],
    image:
      "https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?auto=format&fit=crop&w=1800&q=84",
    alt: "Modern garden path with paving, stone walls, and clipped hedges",
  },
  {
    number: "03",
    id: "pool-care",
    title: "Pool Care",
    eyebrow: "Clear water · dependable care",
    copy:
      "Pool maintenance should feel routine, not reactive. Our demonstration service model centers on consistent visits, clear water, careful equipment observation, and simple communication when something needs attention.",
    items: [
      "Recurring cleaning",
      "Water chemistry balancing",
      "Equipment observation",
      "Skimming & debris removal",
      "Filter-care coordination",
      "Service notes & recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1762811054950-b74e0a055c80?auto=format&fit=crop&w=1800&q=84",
    alt: "Modern residential pool with outdoor seating and landscaped surroundings",
  },
  {
    number: "04",
    id: "outdoor-living",
    title: "Outdoor Living",
    eyebrow: "Shade · gathering · evening use",
    copy:
      "The best outdoor rooms feel connected to both the home and landscape. We bring together shade, seating, cooking, lighting, fire, and surrounding planting so the space works from quiet mornings through evening gatherings.",
    items: [
      "Pergolas & shade structures",
      "Outdoor dining areas",
      "Grill & kitchen zones",
      "Fire features",
      "Integrated lighting",
      "Gathering-space planning",
    ],
    image:
      "https://images.unsplash.com/photo-1769503236428-7773271074cf?auto=format&fit=crop&w=1800&q=84",
    alt: "Wooden pergola covering an outdoor dining area with a grill",
  },
];

const serviceProcess = [
  ["01", "Share the property", "Tell us what is working, what is not, and what you want the outdoor space to do better."],
  ["02", "Walk it together", "A site visit helps define access, grade, materials, existing conditions, and the right scope."],
  ["03", "Shape the recommendation", "We organize priorities into a clear service direction, scope, and estimate."],
  ["04", "Build or maintain", "The work moves into installation or a recurring care rhythm with one consistent standard."],
];

export default function ServicesPage() {
  return (
    <div className={styles.page} id="top">
      <HomeMotion />
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <SiteHeader interior activePage="/services" />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="services-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Terrain services</p>
            <h1 id="services-hero-title">
              Outdoor work designed as <em>one complete system.</em>
            </h1>
            <p>
              Landscape, hardscape, pool care, and outdoor living work better when
              they are considered together—one property, one visual standard, one
              clear direction.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/contact">Request a free estimate <span aria-hidden="true">↗</span></a>
              <a className={styles.textLink} href="#service-index">Explore services <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="https://images.unsplash.com/photo-1793891465680-030c378bb456?auto=format&fit=crop&w=2000&q=86"
              alt="Modern stone home with a swimming pool and refined outdoor landscaping"
              fill
              preload
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span>Design · Build · Maintain</span>
          </div>
        </section>

        <nav className={styles.serviceIndex} id="service-index" aria-label="Services on this page" data-reveal>
          <p>Explore our services</p>
          <div>
            {serviceDetails.map((service) => (
              <a href={`#${service.id}`} key={service.id}>
                <span>{service.number}</span>{service.title}<b aria-hidden="true">↓</b>
              </a>
            ))}
          </div>
        </nav>

        <section className={styles.serviceStories} aria-label="Terrain outdoor services">
          {serviceDetails.map((service, index) => (
            <article
              className={`${styles.serviceStory} ${index % 2 === 1 ? styles.serviceStoryReverse : ""}`}
              id={service.id}
              key={service.id}
              data-reveal
            >
              <div className={styles.serviceMedia}>
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 52vw" />
                <span>{service.number} · {service.title}</span>
              </div>
              <div className={styles.serviceCopy}>
                <p className={styles.kicker}>{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p className={styles.serviceLead}>{service.copy}</p>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className={styles.inlineCta} href="/contact">Discuss this service <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.systemSection} aria-labelledby="system-title" data-reveal>
          <div>
            <p className={styles.kicker}>One property · one approach</p>
            <h2 id="system-title">The strongest outdoor spaces do not feel assembled piece by piece.</h2>
          </div>
          <div className={styles.systemGrid}>
            {[
              ["01", "The landscape supports the structure", "Planting, shade, drainage, and circulation are considered alongside patios, walls, and pool edges."],
              ["02", "Materials repeat with purpose", "Stone, paving, wood, metals, and finishes can relate across the property instead of competing."],
              ["03", "Maintenance informs design", "Long-term care is considered early, helping beautiful spaces stay practical after installation."],
            ].map(([number,title,copy]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.proof} aria-labelledby="proof-title" data-reveal>
          <div className={styles.proofHeader}>
            <div>
              <p className={styles.kicker}>Selected work</p>
              <h2 id="proof-title">See how the pieces come together.</h2>
            </div>
            <p>Demonstration project imagery showing how landscape, hardscape, water, and outdoor living can share one visual language.</p>
          </div>
          <div className={styles.proofGrid}>
            {projects.slice(0,3).map((project) => (
              <article key={project.title}>
                <div>
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </article>
            ))}
          </div>
          <a className={styles.inlineCta} href="/#projects">View selected projects <span aria-hidden="true">↗</span></a>
        </section>

        <section className={styles.process} aria-labelledby="service-process-title" data-reveal>
          <div className={styles.processIntro}>
            <p className={styles.kicker}>How engagement works</p>
            <h2 id="service-process-title">A clear path from first conversation to finished work.</h2>
          </div>
          <ol>
            {serviceProcess.map(([number,title,copy]) => (
              <li key={title}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.areas} aria-labelledby="service-areas-title" data-reveal>
          <div>
            <p className={styles.kicker}>Where we work</p>
            <h2 id="service-areas-title">Serving Austin and the communities around it.</h2>
            <p>Sample service coverage is centered on Austin and the surrounding communities shown here.</p>
          </div>
          <div className={styles.areaList}>
            {areas.map((area,index) => <span key={area}><small>{String(index+1).padStart(2,"0")}</small>{area}</span>)}
          </div>
        </section>

        <section className={styles.estimate} id="estimate" aria-labelledby="services-estimate-title" data-reveal>
          <div className={styles.estimateCopy}>
            <p className={styles.kicker}>Not sure where to start?</p>
            <h2 id="services-estimate-title">Tell us about the property. We will help define the right next step.</h2>
            <p>You do not need to diagnose the project before reaching out. Share the space, priorities, and what you want to improve.</p>
            <div>
              <a className={styles.lightButton} href="/contact">Request a free estimate <span aria-hidden="true">↗</span></a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g,"")}`}>{site.phone}</a>
            </div>
            <small>Demo CTA only — no form or CRM is connected in this frontend phase.</small>
          </div>
          <div className={styles.estimateMedia}>
            <Image
              src="https://images.unsplash.com/photo-1778694276931-056406c4f4d9?auto=format&fit=crop&w=1800&q=84"
              alt="Contemporary home with a natural pool and lush surrounding landscape"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
