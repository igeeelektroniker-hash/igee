import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const LOCALE_COOKIE = "IGEE_LOCALE";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = routing.locales.includes(
      cookieLocale as (typeof routing.locales)[number]
    )
      ? cookieLocale
      : routing.defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"]
};
