import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuth = request.cookies.has("site-access");
    const isLoginPage = request.nextUrl.pathname === "/login";

    // If user is not authenticated and tries to access a protected page
    if (!isAuth && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If user is authenticated and tries to access the login page
    if (isAuth && isLoginPage) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes, except Login API which we have to be careful about, but usually middleware runs before API unless excluded. Wait. 
         *   Actually we WANT to allow the /api/login route. 
         *   The matcher below excludes _next/static, _next/image, favicon.ico.
         *   We should also exclude matching public assets like images if possible.
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.webp|.*\\.svg).*)',
    ],
};
