import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Motion Design & Animations",
  description:
    "Motion systems and launch films for campaigns and branded moving-image storytelling.",
};

export default function ServiceMotionLayout({ children }: { children: ReactNode }) {
  return children;
}
