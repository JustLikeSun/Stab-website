import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Stab — new website coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return (
    <main className="coming-soon-root">
      <div className="coming-soon-inner">
        <p className="coming-soon-eyebrow">STAB Creative agency</p>
        <h1 className="coming-soon-title">Website coming soon</h1>
        <p className="coming-soon-lead">
          We are preparing a new experience. For project inquiries in the meantime,
          reach us at{" "}
          <a href="mailto:contact@stab.agency" className="coming-soon-link">
            contact@stab.agency
          </a>
          .
        </p>
      </div>
    </main>
  );
}
