"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const budgetOptions = ["Not specified", "2K-5K", "5K-10K", "10K-20K", "20K-50K", "50K+"];

const initialContactState: ContactState = { ok: false, error: null };

export default function ContactPage() {
  const [budget, setBudget] = useState("Not specified");
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);

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
  }, [state.ok]);

  if (state.ok) {
    return (
      <main className="contact-page">
        <div className="contact-page-shell">
          <div className="contact-page-bg" aria-hidden>
            <div className="contact-page-bg-blob" />
          </div>
          <div className="contact-page-thanks reveal is-visible">
            <p className="contact-page-thanks-line">Thank you for reaching out.</p>
            <p className="contact-page-thanks-line">We will get back to you as soon as possible.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <div className="contact-page-shell">
        <div className="contact-page-bg" aria-hidden>
          <div className="contact-page-bg-blob" />
        </div>

        <>
          <div className="contact-page-sendmail reveal">
            <p className="contact-page-kicker">Contact us at</p>
            <a href="mailto:contact@stab.agency" className="contact-page-mail">
              contact@stab.agency
            </a>
            <p className="contact-page-sub">or fill out the form</p>
          </div>

          <div className="contact-page-form-outer reveal">
            <form className="contact-page-form" action={formAction}>
              <p className="contact-page-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">
                  Leave this field empty
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </p>

              <input type="hidden" name="budget" value={budget} />

              <div className="contact-page-input-row">
                <div className="contact-page-input-col">
                  <label className="contact-page-label" htmlFor="contact-name">
                    Name<span className="contact-page-req">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact-page-input"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    disabled={pending}
                  />
                </div>
                <div className="contact-page-input-col">
                  <label className="contact-page-label" htmlFor="contact-company">
                    Company / Project
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="contact-page-input"
                    placeholder="Company or project name"
                    autoComplete="organization"
                    disabled={pending}
                  />
                </div>
              </div>

              <label className="contact-page-label" htmlFor="contact-email">
                Email<span className="contact-page-req">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact-page-input"
                placeholder="your@email.com"
                required
                autoComplete="email"
                disabled={pending}
              />

              <label className="contact-page-label" htmlFor="contact-subject">
                Subject<span className="contact-page-req">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="contact-page-input"
                placeholder="What do you need?"
                required
                disabled={pending}
              />

              <span className="contact-page-label">Budget</span>
              <div className="contact-page-budget-row" role="group" aria-label="Budget">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`contact-page-budget-btn${budget === b ? " is-selected" : ""}`}
                    onClick={() => setBudget(b)}
                    disabled={pending}
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
                name="message"
                className="contact-page-textarea"
                placeholder="Describe your project or question."
                rows={6}
                required
                disabled={pending}
              />

              <label className="contact-page-checkbox">
                <input name="privacy" type="checkbox" required disabled={pending} />
                <span className="contact-page-checkbox-text">
                  I have read and agree to the{" "}
                  <a href="/privacy">Privacy Policy</a>
                </span>
              </label>

              {state.error ? (
                <p className="contact-page-form-error" role="alert">
                  {state.error}
                </p>
              ) : null}

              <button type="submit" className="contact-page-submit" disabled={pending}>
                {pending ? "Sending…" : "Send"}
              </button>
            </form>
          </div>
        </>
      </div>
    </main>
  );
}
