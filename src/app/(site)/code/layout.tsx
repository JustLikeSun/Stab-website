import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Code",
  description:
    "High-end digital experiences for brands and agencies — websites, WebGL, 3D and custom tools.",
};

export default function CodeLayout({ children }: { children: ReactNode }) {
  return children;
}
