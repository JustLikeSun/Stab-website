"use client";

import { useState } from "react";

const budgetOptions = ["Not specified", "2K-5K", "5K-10K", "10K-20K", "20K-50K", "50K+"];

export default function ContactPage() {
  const [budget, setBudget] = useState("Not specified");

  return (
    <main>
      {/* Hero */}
      <section className="inner-section light inner-hero" style={{ textAlign: "center" }}>
        <div className="page-container">
          <p className="sec-label" style={{ marginBottom: 16, display: "block" }}>CONTACT US AT</p>
          <h1 className="contact-title" style={{ marginBottom: 12 }}>hello@anubi.io</h1>
          <p className="page-subtitle">or fill out the form</p>
        </div>
      </section>

      {/* Form */}
      <section className="inner-section light" style={{ paddingTop: 0 }}>
        <div className="page-container" style={{ maxWidth: 720 }}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row form-row-2">
              <div className="form-group">
                <label className="form-label">NAME *</label>
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label className="form-label">COMPANY / PROJECT</label>
                <input type="text" className="form-input" placeholder="Company or Project Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL *</label>
              <input type="email" className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">SUBJECT *</label>
              <input type="text" className="form-input" placeholder="What do you need?" required />
            </div>
            <div className="form-group">
              <label className="form-label">BUDGET</label>
              <div className="budget-row">
                {budgetOptions.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`budget-btn ${budget === b ? "active" : ""}`}
                    onClick={() => setBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">MESSAGE *</label>
              <textarea className="form-textarea" placeholder="Describe your needs here." rows={6} required />
            </div>
            <div className="form-group">
              <label className="form-checkbox">
                <input type="checkbox" required />
                <span>I have read and agree to the <a href="#">Privacy Policy</a></span>
              </label>
            </div>
            <button type="submit" className="form-submit">SEND</button>
          </form>
        </div>
      </section>
    </main>
  );
}
