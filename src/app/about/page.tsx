import type { Metadata } from "next";
import Image from "next/image";
import { HomeMotion } from "@/components/HomeMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Terrain Outdoor Co.",
  description:
    "Learn about Terrain Outdoor Co.'s approach to landscape, hardscape, pool care, and outdoor living.",
};

const values = [
  {
    number: "01",
    title: "Design with restraint",
    copy: "Good outdoor work responds to the architecture, existing landscape, movement through the property, and the way the space is actually used.",
  },
  {
    number: "02",
    title: "Build for longevity",
    copy: "Materials, drainage, transitions, edges, access, and maintenance are treated as part of the design rather than details to solve later.",
  },
  {
    number: "03",
    title: "Communicate clearly",
    copy: "A calm project comes from clear priorities, understandable scope, and a consistent rhythm from the first walkthrough through final handoff.",
  },
  {
    number: "04",
    title: "Care beyond installation",
    copy: "A finished landscape should stay practical to own. Ongoing care can continue with the same visual standard that shaped the original work.",
  },
];

const fieldWork = [
  {
    image:
      "https://images.unsplash.com/photo-1779760478460-89c2f9e9c1e3?auto=format&fit=crop&w=1500&q=84",
    alt: "Gardener tending plants in a raised garden bed",
    label: "Planting + care",
  },
  {
    image:
      "https://images.unsplash.com/photo-1734079692079-aae7e24a7035?auto=format&fit=crop&w=1500&q=84",
    alt: "Landscaper pressing fresh green sod into prepared soil",
    label: "Installation + finish",
  },
  {
    image:
      "https://images.unsplash.com/photo-1754321902809-5c21cbc67228?auto=format&fit=crop&w=1500&q=84",
    alt: "Austin arborist pruning and caring for a mature tree",
    label: "Long-term property care",
  },
];

const qualityDetails = [
  ["01", "Drainage", "Water should move intentionally, not become a problem after the landscape is finished."],
  ["02", "Transitions", "Where stone meets planting, lawn, pool edge, or architecture is part of the composition."],
  ["03", "Planting scale", "Plant material should feel appropriate now while still having room to mature gracefully."],
  ["04", "Maintenance access", "Beautiful spaces are easier to own when routine care can happen without fighting the design."],
  ["05", "Material continuity", "Repeating a restrained material language helps separate outdoor areas feel like one property."],
  ["06", "How it ages", "The goal is not just a good installation day. It is a property that continues to feel considered over time."],
];

const relationship = [
  ["01", "Listen first", "Understand what is not working, what matters most, and how the property needs to support daily life."],
  ["02", "Read the property", "Look at access, grade, existing materials, architecture, planting, water, and the opportunities already present."],
  ["03", "Define the work", "Bring priorities into a clear scope and decide what should happen now, later, or not at all."],
  ["04", "Stay consistent", "Carry one standard through decisions, installation, handoff, and ongoing care where needed."],
];

export default function AboutPage() {
  return (
    <div className={styles.page} id="top">
      <HomeMotion />
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <SiteHeader interior activePage="/about" />

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="about-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>About Terrain</p>
            <h1 id="about-hero-title">
              Outdoor work should feel considered <em>from every angle.</em>
            </h1>
            <p>
              Terrain brings landscape, hardscape, water, outdoor living, and care
              into one thoughtful approach—so the property feels connected rather
              than assembled one improvement at a time.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#philosophy">
                Our approach <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.textLink} href="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image
              src="https://images.unsplash.com/photo-1774579893308-ec777199ce32?auto=format&fit=crop&w=1800&q=86"
              alt="Landscape crew trimming and shaping garden planting outdoors"
              fill
              preload
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span>Design · Build · Maintain</span>
          </div>
        </section>

        <section className={styles.philosophy} id="philosophy" aria-labelledby="philosophy-title" data-reveal>
          <div>
            <p className={styles.kicker}>One property · one standard</p>
            <h2 id="philosophy-title">The outdoor environment works best when every part is considered together.</h2>
          </div>
          <div className={styles.philosophyBody}>
            <p>
              Planting changes how a terrace feels. A pool edge affects circulation.
              Drainage changes where materials can live. Shade changes where people
              gather. Maintenance changes what remains practical over time.
            </p>
            <p>
              Terrain&apos;s approach is to see those decisions as connected. The result
              should feel natural to the home, useful in everyday life, and calm enough
              that no single element has to shout for attention.
            </p>
          </div>
        </section>

        <section className={styles.values} aria-labelledby="values-title" data-reveal>
          <div className={styles.valuesIntro}>
            <p className={styles.kicker}>What guides the work</p>
            <h2 id="values-title">A high standard is mostly a series of thoughtful decisions.</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.title}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.field} aria-labelledby="field-title" data-reveal>
          <div className={styles.fieldIntro}>
            <p className={styles.kicker}>The work behind the finish</p>
            <h2 id="field-title">Good outdoor spaces are built through ordinary details done carefully.</h2>
          </div>
          <div className={styles.fieldGrid}>
            {fieldWork.map((item) => (
              <figure key={item.label}>
                <div>
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.quality} aria-labelledby="quality-title" data-reveal>
          <div className={styles.qualityHeading}>
            <p className={styles.kicker}>What good work looks like</p>
            <h2 id="quality-title">Quality often lives in the decisions people notice only when they are wrong.</h2>
          </div>
          <div className={styles.qualityGrid}>
            {qualityDetails.map(([number, title, copy]) => (
              <article key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.integrated} aria-labelledby="integrated-title" data-reveal>
          <div className={styles.integratedMedia}>
            <Image
              src="https://images.unsplash.com/photo-1793132678091-6390620ad08d?auto=format&fit=crop&w=1800&q=86"
              alt="Modern stone patio with integrated garden planting and seating"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className={styles.integratedCopy}>
            <p className={styles.kicker}>Connected by design</p>
            <h2 id="integrated-title">The landscape should not stop where the patio starts.</h2>
            <p>
              Hardscape affects planting. Planting affects shade and privacy. Pool
              surroundings influence circulation. Lighting changes how the entire
              property works after dark. Treating those pieces separately often
              creates visual and practical friction.
            </p>
            <p>
              One coordinated point of view helps materials repeat with purpose,
              transitions feel intentional, and future care stay compatible with the
              original design direction.
            </p>
            <a className={styles.inlineLink} href="/services">
              Explore Terrain services <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className={styles.relationship} aria-labelledby="relationship-title" data-reveal>
          <div className={styles.relationshipIntro}>
            <p className={styles.kicker}>The working relationship</p>
            <h2 id="relationship-title">Clear enough to understand. Flexible enough to fit the property.</h2>
          </div>
          <ol>
            {relationship.map(([number, title, copy]) => (
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

        <section className={styles.texas} aria-labelledby="texas-title" data-reveal>
          <div className={styles.texasCopy}>
            <p className={styles.kicker}>Austin + surrounding communities</p>
            <h2 id="texas-title">Centered on Austin. Shaped around the property.</h2>
            <p>
              Terrain is centered on Austin and nearby communities, with an approach that
              begins with the property itself—its architecture, grade, existing materials,
              planting, and the way the outdoor space is used.
            </p>
          </div>
          <div className={styles.texasMedia}>
            <Image
              src="https://images.unsplash.com/photo-1786348521420-e9045e5d9263?auto=format&fit=crop&w=1600&q=84"
              alt="Residential backyard with stone path, lawn, garden seating, and greenery"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </section>

        <section className={styles.services} aria-labelledby="about-services-title" data-reveal>
          <div>
            <p className={styles.kicker}>What Terrain brings together</p>
            <h2 id="about-services-title">One approach across the outdoor space.</h2>
          </div>
          <nav aria-label="Terrain services">
            <a href="/services#landscape-design"><span>01</span>Landscape Design<b aria-hidden="true">↗</b></a>
            <a href="/services#hardscaping"><span>02</span>Hardscaping<b aria-hidden="true">↗</b></a>
            <a href="/services#pool-care"><span>03</span>Pool Care<b aria-hidden="true">↗</b></a>
            <a href="/services#outdoor-living"><span>04</span>Outdoor Living<b aria-hidden="true">↗</b></a>
          </nav>
        </section>

        <section className={styles.estimate} id="estimate" aria-labelledby="about-estimate-title" data-reveal>
          <div className={styles.estimateCopy}>
            <p className={styles.kicker}>Start with the property you have</p>
            <h2 id="about-estimate-title">Let&apos;s talk about what makes sense next.</h2>
            <p>
              Share the space, priorities, and what you want to improve. You do not
              need to know which service or scope is right before reaching out.
            </p>
            <div>
              <a className={styles.lightButton} href="/contact">
                Request a free estimate <span aria-hidden="true">↗</span>
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            </div>
            <small>Demo CTA only — no form or CRM is connected in this frontend phase.</small>
          </div>
          <div className={styles.estimateMedia}>
            <Image
              src="https://images.unsplash.com/photo-1775743239793-5480f44d6e56?auto=format&fit=crop&w=1800&q=84"
              alt="Stone pathway lined with manicured hedges and mature garden planting"
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
