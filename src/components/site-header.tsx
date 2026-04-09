"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let prev = window.scrollY;
    const onScroll = () => {
      const next = window.scrollY;
      setHidden(next > prev && next > 96);
      prev = next;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.classList.add("lock-scroll");
    else document.body.classList.remove("lock-scroll");
    return () => document.body.classList.remove("lock-scroll");
  }, [open]);

  return (
    <>
      <header className={`mobile-header ${hidden ? "is-hidden" : ""}`}>
        <div className="mobile-header-inner">
          <Link href="/" className="mobile-header-logo" aria-label="Home">
            <Image
              src="/anubi-assets/_next/static/media/anubi.00dff3f2.svg"
              alt=""
              width={24}
              height={24}
            />
            <span className="header-brand">
              <span className="header-brand-name">Anubi</span>
              <span className="header-brand-tagline">Creative Studio</span>
            </span>
          </Link>
          <nav className="header-desktop-nav">
            <Link href="/code" className={`header-nav-link ${pathname.startsWith("/code") ? "active" : ""}`}>Code</Link>
            <Link href="/lab" className={`header-nav-link ${pathname.startsWith("/lab") ? "active" : ""}`}>Lab</Link>
            <Link href="/work/all" className={`header-nav-link ${pathname.startsWith("/work") ? "active" : ""}`}>Work</Link>
            <Link href="/contact" className={`header-nav-link header-nav-accent ${pathname.startsWith("/contact") ? "active" : ""}`}>Contact</Link>
          </nav>
          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`burger-line burger-top ${open ? "open" : ""}`} />
            <span className={`burger-line burger-mid ${open ? "open" : ""}`} />
            <span className={`burger-line burger-bot ${open ? "open" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-links">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/code" onClick={() => setOpen(false)}>Code</Link>
              <Link href="/lab" onClick={() => setOpen(false)}>Lab</Link>
              <Link href="/work/all" onClick={() => setOpen(false)}>Work</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
            <div className="mobile-menu-footer">
              <span>it</span>
              <span>en</span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
