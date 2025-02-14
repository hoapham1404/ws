import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRouteByPath } from "./constants/routes";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore Next.js internal assets (_next, images, etc.)
  if (pathname.startsWith("/_next") || pathname.startsWith("/static")) {
    return NextResponse.next();
  }


  if (pathname === "/" || getRouteByPath(pathname)) {
    return NextResponse.next();
  }

  // go to not found page
  return NextResponse.error();
}

// Apply middleware to dynamic pages only
export const config = {
  matcher: "/((?!_next|static).*)", // Exclude static assets
};

