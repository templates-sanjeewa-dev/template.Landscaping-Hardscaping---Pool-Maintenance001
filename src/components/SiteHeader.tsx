"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import styles from "@/app/page.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#top" aria-label={`${site.brand.name} home`}>
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
          </span>
          <span className={styles.brandText}>
            <strong>{site.brand.name}</strong>
            <small>{site.brand.descriptor}</small>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className={styles.headerCta} href="#estimate">
          Free estimate <span aria-hidden="true">↗</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className={styles.menuIcon} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
      >
        <div className={styles.mobileMenuInner}>
          <p>Outdoor spaces designed, built, and cared for with one consistent standard.</p>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </nav>
          <a className={styles.mobileEstimate} href="#estimate" onClick={() => setOpen(false)}>
            Request a free estimate <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.mobileContact}>
            <span>{site.phone}</span>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
