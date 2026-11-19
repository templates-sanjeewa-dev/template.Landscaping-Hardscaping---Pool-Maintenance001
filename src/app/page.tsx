import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areas, projects, services, site, testimonials } from "@/data/site";
import styles from "./page.module.css";

const heroImage = "https://images.unsplash.com/photo-1783125127199-860da9744dcc?auto=format&fit=crop&w=2400&q=88";

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="hero-title">
        <Image
          className={styles.heroImage}
          src={heroImage}
          alt="Modern home with a landscaped lawn, patio, and swimming pool"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Landscape · Hardscape · Pool Care</p>
          <h1 id="hero-title">Outdoor spaces,<br /><em>thoughtfully built.</em></h1>
          <p className={styles.heroLead}>
            From the first sketch to ongoing care, we create refined outdoor
            environments that feel natural to the home and easy to live in.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#estimate">
              Request a free estimate <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textButton} href="#projects">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className={styles.heroFoot}>
          <span>Design + build + care</span>
          <span>Austin, Texas</span>
          <span>Residential outdoor environments</span>
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Core capabilities">
        {[
          ["01", "Landscape", "Designed around the property"],
          ["02", "Hardscape", "Built for everyday use"],
          ["03", "Pool Care", "Consistent, detail-led service"],
          ["04", "Outdoor Living", "Made for gathering"],
        ].map(([number, title, copy]) => (
          <div key={title}>
            <span>{number}</span>
            <strong>{title}</strong>
            <small>{copy}</small>
          </div>
        ))}
      </section>

      <section className={styles.services} id="services" aria-labelledby="services-title">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>What we do</p>
          <div>
            <h2 id="services-title">One team for the whole outdoor space.</h2>
            <p>
              A coordinated approach means the planting, stonework, water, lighting,
              and maintenance all work together instead of feeling like separate projects.
            </p>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.serviceMedia}>
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className={styles.serviceBody}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#estimate">Explore service <b aria-hidden="true">↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="feature-title">
        <div className={styles.featureMedia}>
          <Image
            src="https://images.unsplash.com/photo-1721222204525-1118ce3860e1?auto=format&fit=crop&w=1800&q=86"
            alt="Landscaped backyard with a stone path and covered patio"
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <span className={styles.featureLabel}>Featured transformation · Demo project</span>
        </div>
        <div className={styles.featureContent}>
          <p className={styles.kicker}>Built as one composition</p>
          <h2 id="feature-title">From disconnected yard to a place that flows.</h2>
          <p>
            This concept project brings grade changes, stonework, planting, lighting,
            and a shaded entertaining area into one quiet, cohesive landscape.
          </p>
          <dl className={styles.projectFacts}>
            <div><dt>Project</dt><dd>Cedar Ridge Courtyard</dd></div>
            <div><dt>Scope</dt><dd>Landscape + hardscape</dd></div>
            <div><dt>Setting</dt><dd>Austin, Texas</dd></div>
          </dl>
          <a className={styles.darkLink} href="#projects">View project details <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-title">
        <div className={styles.whyHeading}>
          <p className={styles.kicker}>Why Verdant & Stone</p>
          <h2 id="why-title">Good outdoor work should feel considered long after installation day.</h2>
        </div>
        <div className={styles.whyGrid}>
          {[
            ["01", "Design with restraint", "We respond to the architecture, existing landscape, and how the space is actually used."],
            ["02", "Craft that holds up", "Materials, drainage, edges, transitions, and details are treated as part of the design—not afterthoughts."],
            ["03", "Clear project rhythm", "A defined process keeps decisions, schedules, and expectations understandable from start to finish."],
            ["04", "Care beyond install", "Maintenance can continue with the same visual standard instead of handing the finished work to a disconnected crew."],
          ].map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.projects} id="projects" aria-labelledby="projects-title">
        <div className={styles.projectsHeader}>
          <div>
            <p className={styles.kicker}>Selected work</p>
            <h2 id="projects-title">Spaces made to feel established, not staged.</h2>
          </div>
          <p>
            A small collection of demonstration projects showing the visual direction
            for landscape, hardscape, pool, and outdoor-living work.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article className={index === 0 ? styles.projectLarge : styles.projectCard} key={project.title}>
              <div className={styles.projectImage}>
                <Image src={project.image} alt={project.alt} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 40vw"} />
                <span className={styles.projectArrow} aria-hidden="true">↗</span>
              </div>
              <div className={styles.projectMeta}>
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} id="process" aria-labelledby="process-title">
        <div className={styles.processIntro}>
          <p className={styles.kicker}>Our process</p>
          <h2 id="process-title">Clear from first walk-through to final handoff.</h2>
          <p>
            The process stays simple enough to understand, with the right amount of
            planning before crews and materials arrive.
          </p>
        </div>
        <ol className={styles.processSteps}>
          {[
            ["01", "Tell us about the space", "Share the property, priorities, timeline, and what is not working today."],
            ["02", "Walk the property", "We review conditions, access, drainage, existing materials, and opportunities on site."],
            ["03", "Shape the plan", "Scope, design direction, materials, and estimate are brought into one clear proposal."],
            ["04", "Build & care for it", "Installation is coordinated carefully, followed by a clean handoff or ongoing maintenance plan."],
          ].map(([number, title, copy]) => (
            <li key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.aboutCopy}>
          <p className={styles.kicker}>A local outdoor company</p>
          <h2 id="about-title">The landscape should support the life happening around it.</h2>
          <p>
            Verdant & Stone is a fictional demonstration brand built to show how a
            premium outdoor-services company can present itself: calm, capable,
            visually led, and focused on useful spaces rather than decoration alone.
          </p>
          <div className={styles.aboutPoints}>
            <span>Residential design + installation</span>
            <span>Hardscape + outdoor living</span>
            <span>Recurring pool + landscape care</span>
          </div>
          <a className={styles.darkLink} href="#estimate">Talk about your space <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="https://images.unsplash.com/photo-1643063231577-959abf98b59c?auto=format&fit=crop&w=1600&q=84"
            alt="Modern landscaped backyard with lawn and stone walls"
            fill
            sizes="(max-width: 900px) 100vw, 47vw"
          />
        </div>
      </section>

      <section className={styles.testimonials} aria-labelledby="testimonials-title">
        <div className={styles.testimonialHeader}>
          <p className={styles.kicker}>Client perspective</p>
          <h2 id="testimonials-title">The best result is a space that feels easy to own.</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <div className={styles.stars} aria-label="Five star sample testimonial">★★★★★</div>
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className={styles.sampleNotice}>Sample testimonials for design demonstration only.</p>
      </section>

      <section className={styles.areas} id="areas" aria-labelledby="areas-title">
        <div>
          <p className={styles.kicker}>Service area</p>
          <h2 id="areas-title">Rooted in Austin.<br />Working across the surrounding communities.</h2>
        </div>
        <div className={styles.areaList}>
          {areas.map((area, index) => (
            <span key={area}><small>{String(index + 1).padStart(2, "0")}</small>{area}</span>
          ))}
        </div>
      </section>

      <section className={styles.estimate} id="estimate" aria-labelledby="estimate-title">
        <Image
          src="https://images.unsplash.com/photo-1743167548878-6069e48779c1?auto=format&fit=crop&w=2200&q=86"
          alt="Luxury landscaped backyard with pool"
          fill
          sizes="100vw"
        />
        <div className={styles.estimateShade} aria-hidden="true" />
        <div className={styles.estimateContent}>
          <p className={styles.eyebrow}>Start with the space you have</p>
          <h2 id="estimate-title">Ready to make more of your outdoors?</h2>
          <p>
            Tell us what you are planning and we will help define the right next step
            for the property, scope, and budget.
          </p>
          <div className={styles.estimateActions}>
            <a className={styles.lightButton} href={`mailto:${site.email}?subject=Free estimate request`}>
              Request a free estimate <span aria-hidden="true">↗</span>
            </a>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
          </div>
          <small>Demo CTA only — no form or CRM is connected in this first frontend phase.</small>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
