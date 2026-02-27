import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en", "fr"],
  defaultLocale: "de",
  localePrefix: "always",
  localeDetection: false,
  localeCookie: {
    name: "IGEE_LOCALE",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
  }
});
