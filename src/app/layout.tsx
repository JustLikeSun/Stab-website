import type { Metadata } from "next";
import { Bricolage_Grotesque, Epilogue, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "STAB - Creative Agency",
  description: "Creative production studio for CGI, 3D and motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${epilogue.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <PageTransition />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
