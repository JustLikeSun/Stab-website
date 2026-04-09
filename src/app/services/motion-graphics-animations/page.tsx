"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  ["Brand films", "Motion-led films for product launches, campaigns and social that combine direction, design and editorial rhythm."],
  ["Motion systems", "Repeatable motion frameworks and animated toolkits that keep visual identity consistent across touchpoints."],
  ["Explainers", "Clear, well-paced animated narratives for complex products, processes or services."],
  ["Social & digital", "Short-form motion assets optimized for platform requirements and audience attention."],
  ["Title sequences", "Cinematic title design and animated branding for video, events and digital channels."],
  ["UI motion", "Micro-interactions, transitions and feedback animations for digital products and websites."],
];

const work = [
  { title: "UPSA x NOURISHED - Gummies", tag: "Commercial / Advertising", image: "/assets/anubi-cdn/ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160-w2200.png" },
  { title: "Converse Cherry - AW LAB", tag: "Art Direction", image: "/assets/anubi-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png" },
  { title: "Mullet Tea - Can Launch", tag: "Art Direction", image: "/assets/anubi-cdn/ac1f57d527cde045557bf70ed044e9c7dc79bf38-1920x1080-w1920.png" },
];

export default function ServiceMotionPage() {
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
      <section className="inner-section light inner-hero">
        <div className="page-container">
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Services</p>
          </div>
          <h1 className="page-title">Motion Design &amp; Animations</h1>
          <p className="page-subtitle">
            Motion systems and launch films crafted for campaigns and branded
            moving-image storytelling across digital touchpoints.
          </p>
        </div>
      </section>

      <section className="services-section reveal">
        <div className="services-container">
          <div className="sec-header">
            <span className="sec-rule light" />
            <p className="sec-label light">Capabilities</p>
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

      <section className="inner-section light reveal">
        <div className="page-container" style={{ maxWidth: 1200 }}>
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Selected Work</p>
          </div>
          <div className="work-grid">
            {work.map((item) => (
              <Link key={item.title} href="/work/all" className="work-card">
                <Image src={item.image} alt={item.title} width={1920} height={1080} unoptimized className="work-img" />
                <div className="work-overlay" />
                <div className="work-meta">
                  <span className="work-tag">{item.tag}</span>
                  <h3 className="work-title">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section reveal">
        <div className="page-container contact-inner">
          <h2 className="contact-title">Let&apos;s work together.</h2>
          <Link href="/contact" className="contact-btn">Contact us</Link>
          <p className="contact-email">or reach out via email at <a href="mailto:hello@anubi.io">hello@anubi.io</a></p>
        </div>
      </section>
    </main>
  );
}
