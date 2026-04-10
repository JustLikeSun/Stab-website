"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientsStrip } from "@/components/clients-strip";
import { ContactCtaButton } from "@/components/contact-cta-button";

const capabilities = [
  ["Creative websites", "Brand sites, landing pages and editorial experiences designed for clarity and emotional impact, motion and technical SEO."],
  ["3D / WebGL", "Interactive product experiences and immersive scenes where the 3D supports the narrative instead of overwhelming it."],
  ["CMS", "CMS, multilingual content models and modular front-end systems that stay flexible over time."],
  ["Management tools", "Internal dashboards, configurators, quote management tools and operational tools for businesses."],
  ["Performance", "Careful rendering, media strategy and interaction design to keep premium experiences fast and stable."],
  ["Analytics", "Measurement plans, event tracking and reporting foundations that show how people discover, navigate and respond to the experience."],
];

export default function CodePage() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="code-section">
        <div className="code-link" style={{ cursor: "default" }}>
          <div className="code-panel">
            <div className="code-header-row">
              <span className="code-eyebrow">DIGITAL EXPERIENCES / ENGINEERING</span>
              <span className="code-route">/code</span>
            </div>
            <div className="code-center">
              <span className="code-word">code</span>
              <p className="code-subtitle">
                High-end digital experiences, from premium websites and immersive
                WebGL to custom management tools.
              </p>
            </div>
            <div className="code-footer-row">
              <div className="code-tags">
                <span>Websites</span><span>WebGL</span><span>3D</span><span>Management tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design and build */}
      <section className="inner-section light reveal">
        <div className="page-container">
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Code</p>
          </div>
          <div className="two-col">
            <div className="two-col-left">
              <h2 className="inner-title">Design and build, together.</h2>
            </div>
            <div className="two-col-right">
              <p className="inner-body">
                Stab develops premium websites and interactive platforms with the same
                attention we bring to our visual production: pacing, structure, rhythm,
                typography, motion and control. The result is not generic development work,
                but high-end digital experiences built to support brand perception and real
                operational use.
              </p>
              <p className="inner-body">
                We work on public-facing websites, immersive 3D experiences and internal
                tools that help teams manage content, approvals, publishing and production
                workflows. SEO foundations, performance budgets, modular content and
                maintainability are handled from the start so the build stays strong after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="services-section reveal">
        <div className="services-container">
          <div className="sec-header">
            <span className="sec-rule light" />
            <p className="sec-label light">Capabilities</p>
          </div>
          <div className="services-hero-grid">
            <div className="services-hero-left">
              <h2 className="services-kicker">Websites. CMS. Tools.</h2>
            </div>
            <div className="services-hero-right">
              <p className="services-subcopy">
                The stack changes with the brief, but the standard stays consistent: sharp
                UX, clean code, reliable content systems and interaction that feels
                deliberate rather than ornamental.
              </p>
            </div>
          </div>
          <div className="service-list">
            {capabilities.map(([name, desc]) => (
              <div key={name} className="service-item">
                <h3 className="service-name">{name}</h3>
                <p className="service-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="inner-section light reveal">
        <div className="page-container">
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Selected Work</p>
          </div>
          <Link href="/work/red-studio-creative-website" className="work-card" style={{ display: "block", maxWidth: 800 }}>
            <Image
              src="/assets/media-cdn/5337f568925cf43e80caeaa1611dab578d90f0d1-3072x1728-w2200.webp"
              alt="Code project"
              width={1920}
              height={1080}
              unoptimized
              className="work-img"
            />
            <div className="work-overlay" />
            <div className="work-meta">
              <span className="work-tag">Creative Experiments</span>
              <h3 className="work-title">Red Studio — Creative Website</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Built to hold up */}
      <section className="inner-section light reveal">
        <div className="page-container">
          <div className="two-col">
            <div className="two-col-left">
              <h2 className="inner-title">Built to hold up.</h2>
            </div>
            <div className="two-col-right">
              <p className="inner-body">
                A polished front-end means very little if the content model is brittle,
                the publishing flow is painful or the site becomes difficult to evolve.
              </p>
              <p className="inner-body">
                Our builds are designed so design, motion, CMS structure, localization,
                analytics and internal tooling support the same outcome. That is what makes
                a website or digital platform feel high-end in practice, not only in screenshots.
              </p>
              <h4 className="inner-sub-label">LONG-TERM VALUE</h4>
              <p className="inner-body muted">
                A tailored product is a stronger long-term investment than generic systems
                that become limiting early. When the platform needs to reflect a specific
                brand, workflow or publishing model, custom infrastructure protects quality
                and reduces replacement costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientsStrip />

      {/* Contact CTA */}
      <section className="contact-section reveal">
        <div className="page-container contact-inner">
          <h2 className="contact-title">Let&apos;s work together.</h2>
          <div className="contact-cta-wrap">
            <ContactCtaButton />
          </div>
          <p className="contact-email">or reach out via email at <a href="mailto:contact@stab.agency">contact@stab.agency</a></p>
        </div>
      </section>
    </main>
  );
}
