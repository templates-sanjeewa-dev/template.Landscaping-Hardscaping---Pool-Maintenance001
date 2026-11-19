"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data/site";
import styles from "@/app/page.module.css";

export function SiteHeader({ interior = false }: { interior?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${interior ? styles.headerInterior : ""} ${open ? styles.headerMenuOpen : ""}`}
    >
      <div className={styles.headerInner}>
        <a className={styles.brand} href="/" aria-label={`${site.brand.name} home`}>
          <span className={styles.brandMark} aria-hidden="true">
            <span />
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
            <a aria-current={pathname === item.href ? "page" : undefined} href={item.href} key={item.href}>{item.label}</a>
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
          onClick={() => (open ? closeMenu() : setOpen(true))}
          ref={triggerRef}
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
        aria-label="Site navigation"
        aria-modal="true"
        ref={menuRef}
        role="dialog"
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuTop}>
            <span>{site.brand.name}</span>
            <button className={styles.mobileClose} onClick={closeMenu} type="button">
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <p>Outdoor spaces designed, built, and cared for with one consistent standard.</p>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a aria-current={pathname === item.href ? "page" : undefined} href={item.href} key={item.href} onClick={() => setOpen(false)}>
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
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
