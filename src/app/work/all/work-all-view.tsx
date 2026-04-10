"use client";

import { useEffect } from "react";
import type { WorkListingEntry } from "@/data/work-projects";
import { ContactCtaButton } from "@/components/contact-cta-button";
import { WorkAllLandingCard } from "@/components/work-all-landing-card";

export function WorkAllView({ items }: { items: WorkListingEntry[] }) {
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
      { threshold: 0.1 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <main className="work-all-page">
      <div className="work-all-container">
        <section className="work-all-intro reveal" aria-labelledby="work-all-heading">
          <div className="work-all-section-header">
            <div className="work-all-section-heading">
              <span className="work-all-section-rule" aria-hidden />
              <p className="work-all-section-label">Selected Work</p>
            </div>
          </div>
          <div className="work-all-title-block">
            <h1 id="work-all-heading" className="work-all-page-title">
              Work
            </h1>
            <p className="work-all-lead">
              Explore all work by Anubi, an Italian creative studio focused on CGI, 3D motion, AI
              and creative websites.
            </p>
          </div>
        </section>

        <section className="work-all-grid-section reveal" aria-label="All projects">
          <div className="work-all-grid">
            {items.map((item, i) => (
              <WorkAllLandingCard
                key={item.slug}
                href={`/work/${item.slug}`}
                title={item.title}
                tag={item.tag}
                image={item.image}
                index={i + 1}
                isLarge={item.large}
              />
            ))}
          </div>
        </section>
      </div>

      <section className="contact-section reveal">
        <div className="page-container contact-inner">
          <h2 className="contact-title">Let&apos;s work together.</h2>
          <div className="contact-cta-wrap">
            <ContactCtaButton />
          </div>
          <div className="contact-alt">
            <p className="contact-alt-title">or reach out via email at</p>
            <a href="mailto:hello@anubi.io" className="contact-alt-email">
              <span>hello@anubi.io</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
