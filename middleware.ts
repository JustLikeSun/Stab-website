import { type NextRequest, NextResponse } from "next/server";

/**
 * When COMING_SOON=1, all routes redirect to /coming-soon (except static assets).
 * Set in Vercel Environment Variables; omit or set to 0 for a normal site.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (process.env.COMING_SOON !== "1") {
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
  matcher: ["/((?!_next/static|_next/image).*)"],
};
