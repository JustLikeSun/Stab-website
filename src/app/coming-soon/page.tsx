import type { Metadata } from "next";
import Image from "next/image";

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
        <div className="coming-soon-mark-wrap">
          <Image
            className="coming-soon-mark"
            src="/brand-assets/_next/static/media/stab-mark.00dff3f2.svg"
            alt=""
            width={72}
            height={72}
            priority
          />
        </div>
        <p className="coming-soon-eyebrow">Creative agency</p>
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
