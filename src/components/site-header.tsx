"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.classList.add("lock-scroll");
    else document.body.classList.remove("lock-scroll");
    return () => document.body.classList.remove("lock-scroll");
  }, [open]);

  return (
    <>
      <header className="site-header mobile-header">
        <div className="mobile-header-inner">
          <div className="mobile-header-shelf">
          <Link href="/" className="mobile-header-logo" aria-label="Home">
            <Image
              src="/anubi-assets/_next/static/media/anubi.00dff3f2.svg"
              alt=""
              width={32}
              height={32}
              className="site-header-mark"
            />
            <span className="header-brand">
              <span className="header-brand-name">Anubi</span>
              <span className="header-brand-tagline">Creative Studio</span>
            </span>
          </Link>
          <nav className="header-desktop-nav">
            <Link href="/code" className={`header-nav-link ${pathname.startsWith("/code") ? "active" : ""}`}>Code</Link>
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
        </div>
      </header>

      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-links">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/code" onClick={() => setOpen(false)}>Code</Link>
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
