"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { KineticText } from "@/components/kinetic-text";

const clients = [
  { name: "Diadora", logo: "/assets/anubi-cdn/67bfc75ca60d0bcf8b9387f3a3bd2ae55a9556c1-300x300-w240.png" },
  { name: "AW LAB", logo: "/assets/anubi-cdn/719f7bb29f703c93a55f0db43734ab519371379b-300x300-w240.png" },
  { name: "Kering Eyewear", logo: "/assets/anubi-cdn/721e7a8edc02f273e194a3c93295363d70599ea3-300x300-w240.png" },
  { name: "Emporio Armani", logo: "/assets/anubi-cdn/7ce24ba657b887ce3bbdb57d7c240e47f84aa32b-300x300-w240.png" },
  { name: "Converse", logo: "/assets/anubi-cdn/9fa416606a72318a7edc522b55089846cc4997fd-300x300-w240.png" },
  { name: "UPSA", logo: "/assets/anubi-cdn/d956f475d7ad350394a2e84852b8a333e3b49589-300x300-w240.png" },
  { name: "Luxottica", logo: "/assets/anubi-cdn/ee1470912265d170550873df7651cd8f7ddbb5cc-300x300-w240.png" },
];

const services: [string, string][] = [
  ["Animation", "Motion systems, launch films and branded moving image."],
  ["3D", "3D design, product visualization and spatial storytelling."],
  ["VFX", "Compositing, cleanup and post-production enhancement."],
  ["CGI", "CGI stills and films with controlled lighting, materials and finish."],
  ["Advertising", "Campaign assets for paid, social, OOH and brand moments."],
  ["Illustration", "Illustration and hybrid image-making for distinct visual worlds."],
  ["AI", "AI-assisted concepting, look development and production workflows."],
  ["Web", "Creative websites, landing pages and interactive brand experiences."],
];

const work = [
  { title: "Diadora Utility", tag: "CGI", image: "/assets/anubi-cdn/e1f43059cf31ae783ea72963fb14ae39ee0677cf-1920x1080-w1920.png", large: true },
  { title: "Essilor Luxottica", tag: "3D Animation", image: "/assets/anubi-cdn/214c2c0f506856bd35ef95a80d0731889e54c518-1920x1080-w1920.webp", large: false },
  { title: "Efferalgan - TV Commercial", tag: "Advertising", image: "/assets/anubi-cdn/735130d2e9f05a3af36bd1c2106cc3cd8bd07e84-3840x2160-w3200.png", large: false },
  { title: "UPSA x NOURISHED - Gummies", tag: "Commercial / Advertising", image: "/assets/anubi-cdn/ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160-w2200.png", large: true },
  { title: "Converse Cherry - AW LAB", tag: "Art Direction", image: "/assets/anubi-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png", large: false },
  { title: "Mullet Tea - Can Launch", tag: "Art Direction", image: "/assets/anubi-cdn/ac1f57d527cde045557bf70ed044e9c7dc79bf38-1920x1080-w1920.png", large: false },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let tX = 0.5, tY = 0.5, cX = 0.5, cY = 0.5;
    let raf: number;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tX = (e.clientX - r.left) / r.width;
      tY = (e.clientY - r.top) / r.height;
    };
    const onLeave = () => { tX = 0.5; tY = 0.5; };
    const tick = () => {
      cX += (tX - cX) * 0.045;
      cY += (tY - cY) * 0.045;
      el.style.setProperty("--pointer-x", `${cX * 100}%`);
      el.style.setProperty("--pointer-y", `${cY * 100}%`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ────────── BENTO HERO ────────── */}
      <section className="bento-container">
        <div className="bento-grid">
          {/* Header row */}
          <div
            className="grid-card bento-header-card"
            style={{ "--col-desktop": "1/13", "--row-desktop": "1/2", "--col-tablet": "1/7", "--col-mobile": "1/5" } as React.CSSProperties}
          >
            <div className="bento-header-content">
              <Link href="/" className="bento-logo-link">
                <Image src="/anubi-assets/_next/static/media/anubi.00dff3f2.svg" alt="" width={32} height={32} className="bento-logo-icon" />
                <div className="bento-brand">
                  <span className="bento-brand-name">Anubi</span>
                  <span className="bento-brand-tagline">Creative Studio</span>
                </div>
              </Link>
              <nav className="bento-nav">
                <Link href="/code" className="bento-nav-link">Code</Link>
                <Link href="/lab" className="bento-nav-link">Lab</Link>
                <Link href="/work/all" className="bento-nav-link">Work</Link>
                <Link href="/contact" className="bento-nav-link bento-nav-accent">Contact</Link>
              </nav>
            </div>
          </div>

          {/* Kinetic / ANUBI wordmark (particle animation) */}
          <div
            className="grid-card premium kinetic-card"
            style={{ "--col-desktop": "1/7", "--row-desktop": "2/4", "--col-tablet": "1/7", "--col-mobile": "1/5" } as React.CSSProperties}
          >
            <KineticText
              text="ANUBI"
              className="kinetic-canvas"
              particleColor="#0a0a0a"
              particleSize={1.8}
              density={3}
              mouseRadius={90}
              mouseForce={0.18}
            />
          </div>

          {/* Hero text */}
          <div
            ref={heroRef}
            className="grid-card hero-card"
            style={{ "--col-desktop": "1/7", "--row-desktop": "4/11", "--col-tablet": "1/7", "--col-mobile": "1/5" } as React.CSSProperties}
          >
            <div className="hero-text">
              <h1 className="hero-title">
                We are a creative production studio for CGI, 3D and motion.
              </h1>
              <p className="hero-subtitle">
                Anubi combines art direction, CGI, motion design and AI-integrated
                workflows with ongoing R&amp;D, experimentation and production-ready
                execution for brands and agencies.
              </p>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-text">Scroll to explore</span>
              <svg
                className="scroll-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Video / media */}
          <div
            className="grid-card video-card"
            style={{ "--col-desktop": "7/13", "--row-desktop": "2/8", "--col-tablet": "1/7", "--col-mobile": "1/5" } as React.CSSProperties}
          >
            <Image
              src="/assets/anubi-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png"
              alt="Anubi creative work showcase"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              priority
            />
          </div>

          {/* Action: Selected Work */}
          <div
            className="grid-card interactive premium action-card"
            style={{ "--col-desktop": "7/10", "--row-desktop": "8/11", "--col-tablet": "1/4", "--col-mobile": "1/3" } as React.CSSProperties}
          >
            <Link href="/work/all" className="action-link">
              <div className="action-indicator"><span className="action-arrow">↗</span></div>
              <div className="action-content">
                <h3 className="action-title">Selected Work</h3>
                <p className="action-desc">View our portfolio</p>
              </div>
            </Link>
          </div>

          {/* Action: Contact */}
          <div
            className="grid-card interactive accent action-card"
            style={{ "--col-desktop": "10/13", "--row-desktop": "8/11", "--col-tablet": "4/7", "--col-mobile": "3/5" } as React.CSSProperties}
          >
            <Link href="/contact" className="action-link">
              <div className="action-indicator"><span className="action-arrow light">↗</span></div>
              <div className="action-content">
                <h3 className="action-title light">Contact</h3>
                <p className="action-desc light">Start your project</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────── CLIENTS ────────── */}
      <section className="clients-section reveal">
        <div className="page-container">
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Clients</p>
          </div>
          <div className="clients-row">
            {clients.map((c) => (
              <div key={c.name} className="client-item">
                <Image src={c.logo} alt={c.name} width={48} height={48} unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── SERVICES ────────── */}
      <section className="services-section reveal">
        <div className="services-container">
          <div className="sec-header">
            <span className="sec-rule light" />
            <p className="sec-label light">Services</p>
          </div>
          <div className="services-hero-grid">
            <div className="services-hero-left">
              <p className="services-bg-text">Services</p>
              <h2 className="services-kicker">Multidisciplinary creative production.</h2>
            </div>
            <div className="services-hero-right">
              <p className="services-subcopy">
                Anubi is a multidisciplinary creative studio focused on 3D, CGI and
                animation, with web and AI integrated where they strengthen the work.
                We build films, stills and digital experiences through an artisan process
                shaped by direction, design, modeling, lighting, motion and finishing.
              </p>
            </div>
          </div>
          <div className="service-list">
            {services.map(([name, desc]) => (
              <div key={name} className="service-item">
                <h3 className="service-name">{name}</h3>
                <p className="service-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── SELECTED WORK ────────── */}
      <section className="work-section reveal" aria-labelledby="home-featured-heading">
        <h2 id="home-featured-heading" className="sr-only">
          Selected Work
        </h2>
        <div className="work-featured">
          <div className="sec-header work-sec-header">
            <span className="sec-rule" aria-hidden="true" />
            <p className="sec-label">Selected Work</p>
          </div>
          <div className="work-grid">
            {work.map((item, i) => (
              <Link key={item.title} href="/work/all" className={`work-card${item.large ? " work-card-large" : ""}`} aria-label={`View project: ${item.title}`}>
                <div className="work-media">
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div className="card-gradient" aria-hidden="true" />
                <div className="card-top">
                  <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="card-meta">{item.tag}</span>
                </div>
                <div className="card-bottom">
                  <h3 className="work-title">{item.title}</h3>
                  <span className="work-action">View Project</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── EXPLORE ALL WORK ────────── */}
      <section className="explore-section">
        <Link href="/work/all" className="explore-link explore-link-large">
          <span className="explore-eyebrow">Selected Work</span>
          <span className="explore-title">Explore All Work</span>
          <span className="explore-arrow">↗</span>
        </Link>
      </section>

      {/* ────────── AI PRODUCTION ────────── */}
      <section className="ai-section reveal" aria-labelledby="home-ai-heading">
        <div className="ai-section-header">
          <div className="ai-section-heading">
            <span className="sec-rule light" aria-hidden="true" />
            <p className="sec-label light ai-section-label">AI Production / R&amp;D</p>
          </div>
        </div>
        <div className="ai-module">
          <div className="ai-col-header">
            <h2 id="home-ai-heading" className="ai-title">AI-integrated CGI, 3D and motion production.</h2>
          </div>
          <div className="ai-col-copy">
            <p className="ai-lead">Anubi is a creative studio for 3D CGI, motion design, art direction and AI production. We design custom workflows for mixed-media campaigns, concept development and premium moving-image work.</p>
            <p className="ai-body">
              AI is integrated into the craft, not treated as a shortcut. Through ongoing R&amp;D, Anubi creates and refines production workflows that combine direction, look development, CGI, compositing and generative tools into controlled, production-ready results.
            </p>
          </div>
          <div className="ai-col-meta">
            <span className="ai-meta-label">Scope</span>
            <p className="ai-capabilities">Art direction, CGI, motion and custom AI production workflows.</p>
            <p className="ai-meta-body">From early look exploration to final delivery, each workflow is art-directed, technically controlled and built around the brief.</p>
          </div>
          <Link href="/contact" className="ai-cta">
            <div className="ai-cta-inner">
              <span className="ai-cta-label">Discuss A Brief</span>
              <span className="ai-cta-text">Plan an AI-integrated production</span>
            </div>
            <span className="ai-cta-arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ────────── CONTACT ────────── */}
      <section className="contact-section reveal">
        <div className="contact-inner">
          <h2 className="contact-title">Let&apos;s work together.</h2>
          <div className="contact-cta-wrap">
            <Link href="/contact" className="contact-btn">Contact us</Link>
          </div>
          <div className="contact-alt">
            <p className="contact-alt-title">or reach out via email at</p>
            <a href="mailto:hello@anubi.io" className="contact-alt-email"><span>hello@anubi.io</span></a>
          </div>
        </div>
      </section>

      {/* ────────── CODE ────────── */}
      <section className="code-section">
        <Link href="/code" className="code-link">
          <div className="code-panel">
            <div className="code-header-row">
              <span className="code-eyebrow">DIGITAL EXPERIENCES / ENGINEERING</span>
              <span className="code-route">/code</span>
            </div>
            <div className="code-center">
              <span className="code-word">code</span>
              <p className="code-subtitle">
                High-end digital experiences for brands and agencies.
                Websites, WebGL, 3D experiences and custom tools.
              </p>
            </div>
            <div className="code-footer-row">
              <div className="code-tags">
                <span>Websites</span><span>WebGL</span><span>3D</span><span>Management tools</span>
              </div>
              <span className="code-cta-pill">Explore Code ↗</span>
            </div>
          </div>
        </Link>
      </section>

    </>
  );
}
