import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <article className="privacy-page-inner">
        <p className="privacy-page-kicker">
          <Link href="/">← Back</Link>
        </p>

        <h1 className="privacy-page-title">
          Privacy Policy of <strong className="privacy-page-brand">Stab</strong>
        </h1>

        <p className="privacy-page-lead">
          This website (<a href="https://www.stab.agency">stab.agency</a>) collects
          some Personal Data from its Users. This document describes how and why we
          process it, in line with common patterns used by professional privacy
          disclosures (similar in structure to tools such as{" "}
          <a
            href="https://www.iubenda.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            iubenda
          </a>
          ).
        </p>

        <section className="privacy-section" aria-labelledby="privacy-data-heading">
          <h2 id="privacy-data-heading" className="privacy-h2">
            Personal Data processed for the following purposes and using the following
            services
          </h2>

          <div className="privacy-service">
            <h3 className="privacy-h3">Hosting and backend infrastructure</h3>
            <p className="privacy-service-detail">
              <strong>Vercel</strong>
            </p>
            <p className="privacy-service-detail">
              Personal Data: usage data; technical logs and diagnostics necessary to
              operate and secure the site (for example IP address, browser type,
              timestamps), as described in the service provider’s documentation.
            </p>
          </div>

          <div className="privacy-service">
            <h3 className="privacy-h3">Contacting the User</h3>
            <p className="privacy-service-detail">
              <strong>Contact form</strong>
            </p>
            <p className="privacy-service-detail">
              Personal Data: email address; name; company or project name; message
              content; budget range when provided; and any other information you
              choose to include. Submissions are transmitted to us via our email
              delivery provider so we can respond to your request.
            </p>
          </div>

          <div className="privacy-service">
            <h3 className="privacy-h3">Displaying content from external platforms</h3>
            <p className="privacy-service-detail">
              <strong>Images and media (content delivery network)</strong>
            </p>
            <p className="privacy-service-detail">
              Some media may be loaded from a third-party content infrastructure (for
              example a CDN used for portfolio assets). In those cases, the provider
              may process technical data such as IP address and request metadata as
              part of delivering the files.
            </p>
          </div>

          <div className="privacy-service">
            <h3 className="privacy-h3">Typography</h3>
            <p className="privacy-service-detail">
              <strong>Google Fonts (via Next.js)</strong>
            </p>
            <p className="privacy-service-detail">
              Personal Data: may include connection and usage data associated with
              loading font files, depending on how fonts are served. We use
              Next.js/font to optimize delivery; refer to Google’s and Vercel’s
              documentation for details on what they process when fonts are loaded.
            </p>
          </div>
        </section>

        <section className="privacy-section" aria-labelledby="privacy-rights-heading">
          <h2 id="privacy-rights-heading" className="privacy-h2">
            Your rights
          </h2>
          <p className="privacy-page-copy">
            Depending on where you live (for example the EEA or UK), you may have
            rights to access, rectify, delete, or restrict processing of your
            Personal Data, and to object to certain processing or to data portability.
            To exercise these rights, contact us at the email below. You may also have
            the right to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section className="privacy-section" aria-labelledby="privacy-contact-heading">
          <h2 id="privacy-contact-heading" className="privacy-h2">
            Contact information
          </h2>
          <ul className="privacy-contact-list" role="list">
            <li>
              <strong>Owner and Data Controller</strong>
              <br />
              Stab
              <br />
              Website:{" "}
              <a href="https://www.stab.agency">https://www.stab.agency</a>
              <br />
              <strong>Owner contact email:</strong>{" "}
              <a href="mailto:contact@stab.agency">contact@stab.agency</a>
            </li>
          </ul>
        </section>

        <p className="privacy-page-updated">
          <strong>Latest update:</strong> April 13, 2026
        </p>

        <p className="privacy-page-note">
          This policy describes our practices in good faith for visitors and clients.
          It is not legal advice. If you adopt a hosted policy from a provider such as{" "}
          <a
            href="https://www.iubenda.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            iubenda
          </a>
          , you can replace or supplement this page with their embed or link while
          keeping the same site navigation.
        </p>
      </article>
    </main>
  );
}
