"use client";

import { useState, type FormEvent } from "react";
import styles from "@/app/contact/contact.module.css";

const interests = [
  "Landscape Design",
  "Hardscaping",
  "Pool Care",
  "Outdoor Living",
  "Not sure yet",
];

export function ContactForm() {
  const [demoNotice, setDemoNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDemoNotice(true);
  };

  return (
    <form className={styles.form} aria-describedby="contact-demo-note" onSubmit={handleSubmit}>
      <div className={styles.formIntro}>
        <p className={styles.kicker}>Project enquiry</p>
        <h2>Start with what you know.</h2>
        <p>
          You do not need a finished scope. Tell us about the property, what is
          not working today, and what you would like the outdoor space to do better.
        </p>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          <span>Name <b aria-hidden="true">*</b></span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          <span>Email <b aria-hidden="true">*</b></span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>Phone</span>
          <input autoComplete="tel" inputMode="tel" name="phone" type="tel" />
        </label>
        <label>
          <span>Property location</span>
          <input autoComplete="street-address" name="location" placeholder="Neighborhood or city" type="text" />
        </label>
      </div>

      <fieldset className={styles.interests}>
        <legend>What are you interested in?</legend>
        <div>
          {interests.map((interest) => (
            <label key={interest}>
              <input name="interests" type="checkbox" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.fieldGrid}>
        <label>
          <span>Approximate timing</span>
          <select defaultValue="" name="timing">
            <option disabled value="">Choose a timeframe</option>
            <option>As soon as practical</option>
            <option>Within 1–3 months</option>
            <option>Within 3–6 months</option>
            <option>6+ months</option>
            <option>Just exploring</option>
          </select>
        </label>
        <label>
          <span>Best way to reach you</span>
          <select defaultValue="Email" name="contactPreference">
            <option>Email</option>
            <option>Phone</option>
            <option>Either is fine</option>
          </select>
        </label>
      </div>

      <label className={styles.messageField}>
        <span>Tell us about the property <b aria-hidden="true">*</b></span>
        <textarea
          name="message"
          placeholder="What would you like to change, solve, build, or make easier to care for?"
          required
          rows={7}
        />
      </label>

      <div className={styles.formFooter}>
        <button aria-describedby="contact-demo-note" type="submit">
          Preview enquiry <span aria-hidden="true">↗</span>
        </button>
        <p id="contact-demo-note">
          Demo form only — information entered here is not transmitted or stored.
        </p>
      </div>

      {demoNotice ? (
        <p className={styles.demoStatus} role="status">
          Demo preview only. Your enquiry was not sent. A production version would
          connect this form to the client&apos;s email, CRM, or form service.
        </p>
      ) : null}
    </form>
  );
}
