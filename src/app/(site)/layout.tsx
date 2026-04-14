import type { ReactNode } from "react";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteChromeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageTransition />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
