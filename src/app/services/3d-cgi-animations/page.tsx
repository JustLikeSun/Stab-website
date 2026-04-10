"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactCtaButton } from "@/components/contact-cta-button";

const capabilities = [
  ["Product visualization", "Photorealistic product renders with controlled lighting, materials and finish for commercial use."],
  ["Architectural CGI", "Interior and exterior visualizations with accurate lighting and material response."],
  ["Character & creature", "Digital characters and creatures for film, advertising and brand storytelling."],
  ["Look development", "Material, lighting and compositing R&D to establish the visual direction before production."],
  ["Animation", "Keyframe and procedural animation for product demos, explainers and branded film."],
  ["Compositing", "Multi-pass rendering and compositing to integrate CGI elements into live footage."],
];

const work = [
  { title: "Diadora Utility", tag: "CGI", image: "/assets/anubi-cdn/e1f43059cf31ae783ea72963fb14ae39ee0677cf-1920x1080-w1920.png" },
  { title: "Essilor Luxottica", tag: "3D Animation", image: "/assets/anubi-cdn/214c2c0f506856bd35ef95a80d0731889e54c518-1920x1080-w1920.webp" },
  { title: "Efferalgan - TV Commercial", tag: "Advertising", image: "/assets/anubi-cdn/735130d2e9f05a3af36bd1c2106cc3cd8bd07e84-3840x2160-w3200.png" },
];

export default function Service3DPage() {
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
          <h1 className="page-title">3D CGI Animations</h1>
          <p className="page-subtitle">
            Premium CGI stills and animation production with art direction, modeling,
            look development, lighting and compositing.
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
          <div className="contact-cta-wrap">
            <ContactCtaButton />
          </div>
          <p className="contact-email">or reach out via email at <a href="mailto:contact@stab.agency">contact@stab.agency</a></p>
        </div>
      </section>
    </main>
  );
}
