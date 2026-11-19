import type { Metadata } from "next";
import Image from "next/image";
import { HomeMotion } from "@/components/HomeMotion";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects | Terrain Outdoor Co.",
  description:
    "Explore Terrain Outdoor Co. demonstration projects across landscape, hardscape, pool, and outdoor living.",
};

const detailImages = [
  {
    src: "https://images.unsplash.com/photo-1761637822930-fb1c1a3df94d?auto=format&fit=crop&w=1400&q=84",
    alt: "Modern garden pathway with stone wall, paving, and clipped hedges",
    label: "Stone + planting",
  },
  {
    src: "https://images.unsplash.com/photo-1793087404058-9be26ac4aab0?auto=format&fit=crop&w=1400&q=84",
    alt: "Stone path leading through a designed garden to modern architecture",
    label: "Material transitions",
  },
  {
    src: "https://images.unsplash.com/photo-1762811054950-b74e0a055c80?auto=format&fit=crop&w=1400&q=84",
    alt: "Modern residential pool with landscaped surroundings",
    label: "Water + planting",
  },
  {
    src: "https://images.unsplash.com/photo-1769503236428-7773271074cf?auto=format&fit=crop&w=1400&q=84",
    alt: "Wooden pergola covering an outdoor dining area",
    label: "Outdoor rooms",
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page} id="top">
      <HomeMotion />
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <SiteHeader interior activePage="/projects" />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="projects-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Terrain projects</p>
            <h1 id="projects-hero-title">
              Outdoor spaces shaped around <em>the property.</em>
            </h1>
            <p>
              A demonstration collection showing how planting, stone, water, and
              outdoor living can be composed with one calm visual standard.
            </p>
            <a className={styles.heroLink} href="#portfolio">
              Explore the collection <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="https://images.unsplash.com/photo-1755816764831-2803235f0099?auto=format&fit=crop&w=2000&q=86"
              alt="Modern outdoor kitchen beneath a pergola with a fireplace and patio"
              fill
              preload
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span>Landscape · Hardscape · Pool · Outdoor Living</span>
          </div>
        </section>

        <section className={styles.portfolio} id="portfolio" aria-labelledby="portfolio-title" data-reveal>
          <div className={styles.portfolioIntro}>
            <div>
              <p className={styles.kicker}>Selected work</p>
              <h2 id="portfolio-title">A portfolio built around atmosphere, function, and detail.</h2>
            </div>
            <p>
              These are demonstration project concepts for portfolio presentation.
              They show Terrain&apos;s intended visual direction rather than completed
              client commissions.
            </p>
          </div>
          <ProjectsGallery />
        </section>

        <section className={styles.feature} aria-labelledby="feature-project-title" data-reveal>
          <div className={styles.featureMain}>
            <Image
              src="https://images.unsplash.com/photo-1758465212323-6e1201a553ac?auto=format&fit=crop&w=2000&q=86"
              alt="Modern pergola framed by mature trees and garden planting"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <span>Featured concept · Demo project</span>
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.kicker}>Cedar Ridge Courtyard</p>
            <h2 id="feature-project-title">A quieter composition built around flow and shade.</h2>
            <p>
              The concept connects planting, lawn, stone circulation, and a shaded
              gathering area so the property reads as one landscape rather than a
              collection of separate improvements.
            </p>
            <dl>
              <div><dt>Setting</dt><dd>Austin, Texas</dd></div>
              <div><dt>Scope</dt><dd>Landscape + hardscape</dd></div>
              <div><dt>Focus</dt><dd>Flow + shade + material continuity</dd></div>
            </dl>
          </div>
          <div className={styles.featureDetails}>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1766603636774-5f328e0da870?auto=format&fit=crop&w=1400&q=84"
                alt="Modern residential entrance with stone wall and layered garden planting"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1787427384212-780f42e4f610?auto=format&fit=crop&w=1400&q=84"
                alt="Stone pergola and shaded garden path with integrated seating"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className={styles.details} aria-labelledby="details-title" data-reveal>
          <div className={styles.detailsIntro}>
            <p className={styles.kicker}>The details matter</p>
            <h2 id="details-title">Premium outdoor work is often felt in the transitions.</h2>
          </div>
          <div className={styles.detailStrip}>
            {detailImages.map((image) => (
              <figure key={image.src}>
                <div>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.composition} aria-labelledby="composition-title" data-reveal>
          <div>
            <p className={styles.kicker}>Designed as one composition</p>
            <h2 id="composition-title">Planting. Stone. Water. Structure.</h2>
          </div>
          <div className={styles.compositionGrid}>
            {[
              ["01", "Planting", "Softens architecture, frames views, builds privacy, and gives the property seasonal depth."],
              ["02", "Stone", "Creates circulation, edges, terraces, and a durable material language across the landscape."],
              ["03", "Water", "Adds reflection, movement, and a focal point that can anchor the wider outdoor environment."],
              ["04", "Structure", "Shade, cooking, fire, and gathering elements extend how and when the landscape can be used."],
            ].map(([number,title,copy]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.services} aria-labelledby="project-services-title" data-reveal>
          <div>
            <p className={styles.kicker}>Explore the services</p>
            <h2 id="project-services-title">The work behind the projects.</h2>
          </div>
          <nav aria-label="Project-related services">
            <a href="/services#landscape-design"><span>01</span>Landscape Design<b aria-hidden="true">↗</b></a>
            <a href="/services#hardscaping"><span>02</span>Hardscaping<b aria-hidden="true">↗</b></a>
            <a href="/services#pool-care"><span>03</span>Pool Care<b aria-hidden="true">↗</b></a>
            <a href="/services#outdoor-living"><span>04</span>Outdoor Living<b aria-hidden="true">↗</b></a>
          </nav>
        </section>

        <section className={styles.estimate} id="estimate" aria-labelledby="projects-estimate-title" data-reveal>
          <Image
            src="https://images.unsplash.com/photo-1721222204126-e7042f2893b1?auto=format&fit=crop&w=2200&q=86"
            alt="Modern home with a pool, pergola, and landscaped outdoor living area"
            fill
            sizes="100vw"
          />
          <div className={styles.estimateShade} aria-hidden="true" />
          <div className={styles.estimateCopy}>
            <p className={styles.kicker}>Have a property in mind?</p>
            <h2 id="projects-estimate-title">Let&apos;s define what it could become.</h2>
            <p>
              Share the property, priorities, and the kind of outdoor experience
              you want to create. We&apos;ll help define the right next step.
            </p>
            <div>
              <a className={styles.lightButton} href="/contact">
                Request a free estimate <span aria-hidden="true">↗</span>
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            </div>
            <small>Demo CTA only — no form or CRM is connected in this frontend phase.</small>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
