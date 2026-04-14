import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Stab collects and processes personal data when you use stab.agency.",
  openGraph: {
    title: "Stab | Privacy Policy",
    description:
      "How Stab collects and processes personal data when you use stab.agency.",
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
