"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Stellest Chip", year: "2025", image: "/assets/anubi-cdn/9cfa8041a4e9d770f50d8bc6214e831b18846b19-1920x1080-w1920.png" },
  { title: "GSHOCK", year: "2025", image: "/assets/anubi-cdn/c84631a433dab0298e0edb2d90565893478d572b-1920x1080-w1920.png" },
  { title: "Flower", year: "2025", image: "/assets/anubi-cdn/a0c219e21caa8c8488219de1e61ca8b9cfd5ddad-1920x1080-w1920.png" },
  { title: "RND - Honey", year: "2025", image: "/assets/anubi-cdn/8c3ff10ff7cc3dfdb4023c3e36a926f8d608ad77-1920x1080-w1800.png" },
  { title: "Mullet Tea Aligro Launch", year: "2025", image: "/assets/anubi-cdn/ac1f57d527cde045557bf70ed044e9c7dc79bf38-1920x1080-w1920.png" },
  { title: "Iprona Liquid", year: "2025", image: "/assets/anubi-cdn/f553d4928b54411a90a8dc0bd31998b420976458-1920x1080.png" },
  { title: "Diadora Utility", year: "2024", image: "/assets/anubi-cdn/e1f43059cf31ae783ea72963fb14ae39ee0677cf-1920x1080-w1920.png" },
  { title: "Efferalgan", year: "2024", image: "/assets/anubi-cdn/735130d2e9f05a3af36bd1c2106cc3cd8bd07e84-3840x2160-w3200.png" },
  { title: "UPSA x NOURISHED", year: "2024", image: "/assets/anubi-cdn/ab8fadeb12bdd710c924bfe7ed9f1d0402a8cc4d-2700x2160-w2200.png" },
  { title: "Converse Cherry", year: "2024", image: "/assets/anubi-cdn/3103b9b8e7c4e822b4209498da605892f8ea9955-1920x1080-w1920.png" },
  { title: "Essilor Luxottica", year: "2024", image: "/assets/anubi-cdn/214c2c0f506856bd35ef95a80d0731889e54c518-1920x1080-w1920.webp" },
  { title: "RND Abstract", year: "2024", image: "/assets/anubi-cdn/5337f568925cf43e80caeaa1611dab578d90f0d1-3072x1728-w2200.webp" },
];

export default function LabPage() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="inner-section light inner-hero">
        <div className="page-container">
          <div className="sec-header">
            <span className="sec-rule" />
            <p className="sec-label">Creative Experiments</p>
          </div>
          <h1 className="page-title">Lab</h1>
          <p className="page-subtitle">
            Explore CGI, AI, motion design and visual experiments from Anubi Lab,
            where we test ideas, craft looks and push premium production techniques.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="inner-section light" style={{ paddingTop: 0 }}>
        <div className="page-container">
          <div className="lab-grid">
            {projects.map((p, i) => (
              <div key={p.title + i} className="lab-card reveal">
                <div className="lab-card-badges">
                  <span className="lab-badge">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lab-badge">{p.year}</span>
                </div>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1920}
                  height={1080}
                  unoptimized
                  className="lab-card-img"
                />
                <div className="lab-card-footer">
                  <span className="lab-card-label">CREATIVE EXPERIMENTS</span>
                  <h3 className="lab-card-title">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
