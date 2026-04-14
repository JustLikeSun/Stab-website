import type { NextConfig } from "next";

function comingSoonEnabled(): boolean {
  const vals = [
    process.env.COMING_SOON,
    process.env.NEXT_PUBLIC_COMING_SOON,
  ];
  return vals.some((v) => v === "1" || v === "true");
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  /**
   * Maintenance / coming soon: evaluated at **build time** when `next build` runs on Vercel,
   * so COMING_SOON / NEXT_PUBLIC_COMING_SOON must be set for Production and you must redeploy
   * after toggling. (Edge middleware alone was not reliably seeing env on Vercel for this project.)
   */
  async redirects() {
    if (!comingSoonEnabled()) {
      return [];
    }
    return [
      {
        source: "/",
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/:path((?!coming-soon|_next|brand-assets|assets|favicon.ico).*)",
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
