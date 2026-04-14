import { type NextRequest, NextResponse } from "next/server";

function isComingSoonMode(): boolean {
  const a = process.env.COMING_SOON?.trim();
  const b = process.env.NEXT_PUBLIC_COMING_SOON?.trim();
  return (
    a === "1" ||
    a === "true" ||
    b === "1" ||
    b === "true"
  );
}

/**
 * When COMING_SOON or NEXT_PUBLIC_COMING_SOON is 1/true, all routes redirect to
 * /coming-soon (except static assets). Set in Vercel Environment Variables.
 * Using NEXT_PUBLIC_* ensures the flag is available in the Edge bundle; redeploy after toggling.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const comingSoon = isComingSoonMode();

  if (!comingSoon) {
    if (pathname === "/coming-soon") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  if (/\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff2?|txt|xml|json|webmanifest)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/",
    /*
     * Match the rest of paths except Next internals (omit root — see above).
     */
    "/((?!_next/static|_next/image|favicon.ico).+)",
  ],
};
