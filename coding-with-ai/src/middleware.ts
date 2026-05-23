import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Check if user is deactivated
    if (token && token.isActive === false) {
      return NextResponse.redirect(new URL("/login?error=deactivated", req.url));
    }

    // Redirect authenticated users away from auth pages
    if ((pathname === "/login" || pathname === "/register") && token) {
      if (token.role === "admin") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      return NextResponse.redirect(new URL("/student", req.url));
    }

    // Admin only routes
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/login?error=unauthorized", req.url));
    }

    // Student only routes
    if (pathname.startsWith("/student")) {
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      if (token.role !== "student") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      // Block access to subroutes (like /student/courses) if not approved
      if (token.membershipStatus !== "approved" && pathname !== "/student") {
        return NextResponse.redirect(new URL("/student", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        // Public routes
        if (
          pathname === "/" ||
          pathname.startsWith("/about") ||
          pathname.startsWith("/memberships") ||
          pathname.startsWith("/projects") ||
          pathname.startsWith("/ai-tools") ||
          pathname.startsWith("/blog") ||
          pathname.startsWith("/contact") ||
          pathname.startsWith("/community") ||
          pathname.startsWith("/login") ||
          pathname.startsWith("/register") ||
          pathname.startsWith("/privacy") ||
          pathname.startsWith("/terms") ||
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/api/users") ||
          pathname.startsWith("/api/memberships") ||
          pathname.startsWith("/api/projects")
        ) {
          return true;
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
