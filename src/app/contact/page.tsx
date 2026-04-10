"use client";

import { useEffect, useState } from "react";

const budgetOptions = ["Not specified", "2K-5K", "5K-10K", "10K-20K", "20K-50K", "50K+"];

export default function ContactPage() {
  const [budget, setBudget] = useState("Not specified");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".contact-page .reveal"));
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
  }, [submitted]);

  return (
    <main className="contact-page">
      <div className="contact-page-shell">
        <div className="contact-page-bg" aria-hidden>
          <div className="contact-page-bg-blob" />
        </div>

        {!submitted ? (
          <>
            <div className="contact-page-sendmail reveal">
              <p className="contact-page-kicker">Contact us at</p>
              <a href="mailto:hello@anubi.io" className="contact-page-mail">
                hello@anubi.io
              </a>
              <p className="contact-page-sub">or fill out the form</p>
            </div>

            <div className="contact-page-form-outer reveal">
              <form
                className="contact-page-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="contact-page-input-row">
                  <div className="contact-page-input-col">
                    <label className="contact-page-label" htmlFor="contact-name">
                      Name<span className="contact-page-req">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="contact-page-input"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact-page-input-col">
                    <label className="contact-page-label" htmlFor="contact-company">
                      Company / Project
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="contact-page-input"
                      placeholder="Company or project name"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <label className="contact-page-label" htmlFor="contact-email">
                  Email<span className="contact-page-req">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-page-input"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />

                <label className="contact-page-label" htmlFor="contact-subject">
                  Subject<span className="contact-page-req">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="contact-page-input"
                  placeholder="What do you need?"
                  required
                />

                <span className="contact-page-label">Budget</span>
                <div className="contact-page-budget-row" role="group" aria-label="Budget">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`contact-page-budget-btn${budget === b ? " is-selected" : ""}`}
                      onClick={() => setBudget(b)}
                    >
                      <span className="contact-page-budget-text">{b}</span>
                    </button>
                  ))}
                </div>

                <label className="contact-page-label" htmlFor="contact-message">
                  Message<span className="contact-page-req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  className="contact-page-textarea"
                  placeholder="Describe your project or question."
                  rows={6}
                  required
                />

                <label className="contact-page-checkbox">
                  <input type="checkbox" required />
                  <span className="contact-page-checkbox-text">
                    I have read and agree to the <a href="#">Privacy Policy</a>
                  </span>
                </label>

                <button type="submit" className="contact-page-submit">
                  Send
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="contact-page-thanks reveal is-visible">
            <p className="contact-page-thanks-line">Thank you for reaching out.</p>
            <p className="contact-page-thanks-line">We will get back to you as soon as possible.</p>
          </div>
        )}
      </div>
    </main>
  );
}
