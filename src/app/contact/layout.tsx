import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Anubi | Contact us",
  description: "Get in touch with Anubi for CGI, 3D, motion and creative production.",
  openGraph: {
    title: "Anubi | Contact us",
    description: "Get in touch with Anubi for CGI, 3D, motion and creative production.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
