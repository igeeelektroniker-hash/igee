"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const locales = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" }
] as const;

type LocaleSwitcherProps = {
  label: string;
};

export default function LocaleSwitcher({ label }: LocaleSwitcherProps) {
  const currentLocale = useLocale();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-[var(--surface)] p-1"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      {locales.map((locale) => {
        const isActive = currentLocale === locale.code;

        return (
          <Link
            key={locale.code}
            href="/"
            locale={locale.code}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              isActive
                ? "bg-primary text-white"
                : "text-muted hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
            }`}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
