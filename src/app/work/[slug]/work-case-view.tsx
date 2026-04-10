"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCtaButton } from "@/components/contact-cta-button";
import type { WorkProject } from "@/data/work-projects";

function useReveal() {
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
}

function CaseImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const remote = src.startsWith("http");
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={remote ? "(max-width: 768px) 100vw, 72vw" : undefined}
      unoptimized={!remote}
    />
  );
}

function NavThumb({ src }: { src: string }) {
  const remote = src.startsWith("http");
  return (
    <Image
      src={src}
      alt=""
      fill
      className="work-case-nav-img"
      sizes="min(42vw, 280px)"
      unoptimized={!remote}
    />
  );
}

export function WorkCaseView({
  project,
  prev,
  next,
}: {
  project: WorkProject;
  prev: WorkProject | null;
  next: WorkProject | null;
}) {
  useReveal();

  const cover = project.coverImage ?? project.listImage;

  return (
    <main className="work-case-page">
      <div className="work-case-spacer" aria-hidden />

      <section className="work-case-hero reveal">
        <div className="work-case-hero-inner">
          <h1 className="work-case-title">{project.title}</h1>

          <div className="work-case-meta-grid">
            <aside className="work-case-aside">
              <h2 className="work-case-field-label">
                {project.clients.length > 1 ? "Clients" : "Client"}
              </h2>
              <ul className="work-case-client-list">
                {project.clients.map((c) => (
                  <li key={c}>
                    <span className="work-case-client-name">{c}</span>
                  </li>
                ))}
              </ul>
              {project.agency ? (
                <>
                  <h2 className="work-case-field-label">Agency</h2>
                  <ul className="work-case-client-list">
                    <li>
                      <span className="work-case-client-name">{project.agency}</span>
                    </li>
                  </ul>
                </>
              ) : null}
              <h2 className="work-case-field-label">Services</h2>
              <ul className="work-case-service-list">
                {project.services.map((s) => (
                  <li key={s}>
                    <span className="work-case-service-name">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="work-case-year-block">
                <h2 className="work-case-field-label">Production</h2>
                <p className="work-case-year">{project.year}</p>
              </div>
            </aside>

            <div className="work-case-cover-wrap">
              <div className="work-case-cover">
                <CaseImage
                  src={cover}
                  alt={`${project.title} cover image`}
                  width={2700}
                  height={2160}
                  className="work-case-cover-img"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.blocks.map((block, i) => {
        if (block.type === "text") {
          return (
            <section key={`t-${i}`} className="work-case-block work-case-text-block reveal">
              <div className="work-case-hero-inner">
                <div
                  className="work-case-prose"
                  dangerouslySetInnerHTML={{ __html: block.html }}
                />
              </div>
            </section>
          );
        }
        const narrow = block.layout === "portrait";
        return (
          <section
            key={`i-${i}`}
            className={`work-case-block work-case-image-block reveal${narrow ? " is-narrow" : " is-wide"}`}
          >
            <div className={narrow ? "work-case-gallery-narrow" : "work-case-hero-inner"}>
              <CaseImage
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="work-case-gallery-img"
              />
            </div>
          </section>
        );
      })}

      <section className="work-case-nav reveal" aria-label="Adjacent projects">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="work-case-nav-card work-case-nav-prev">
            <div className="work-case-nav-text">
              <span className="work-case-nav-label">← PREV</span>
              <span className="work-case-nav-title">{prev.title}</span>
            </div>
            <div className="work-case-nav-thumb">
              <NavThumb src={prev.listImage} />
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="work-case-nav-card work-case-nav-next">
            <div className="work-case-nav-text">
              <span className="work-case-nav-label">NEXT →</span>
              <span className="work-case-nav-title">{next.title}</span>
            </div>
            <div className="work-case-nav-thumb">
              <NavThumb src={next.listImage} />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </section>

      <section className="explore-section">
        <Link href="/work/all" className="explore-link explore-link-large">
          <span className="explore-eyebrow">Selected Work</span>
          <span className="explore-title">Explore All Work</span>
          <span className="explore-arrow">↗</span>
        </Link>
      </section>

      <section className="contact-section reveal">
        <div className="contact-inner">
          <h2 className="contact-title">Let&apos;s work together.</h2>
          <div className="contact-cta-wrap">
            <ContactCtaButton />
          </div>
          <p className="contact-email">
            or reach out via email at{" "}
            <a href="mailto:contact@stab.agency">contact@stab.agency</a>
          </p>
        </div>
      </section>
    </main>
  );
}
