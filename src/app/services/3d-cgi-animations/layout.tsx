import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "3D CGI Animations",
  description:
    "Premium CGI stills and animation — art direction, modeling, look development, lighting and compositing.",
};

export default function Service3DLayout({ children }: { children: ReactNode }) {
  return children;
}
