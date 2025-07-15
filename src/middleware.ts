import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("myapp_session");

 
  if (!sessionCookie && request.nextUrl.pathname.startsWith("/my-account")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-account"],
};