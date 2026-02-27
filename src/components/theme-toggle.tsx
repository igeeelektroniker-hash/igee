"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
  ariaLabel: string;
  className?: string;
};

export default function ThemeToggle({
  lightLabel,
  darkLabel,
  ariaLabel,
  className
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => {
    if (!mounted) {
      return false;
    }
    if (theme === "system") {
      return systemTheme === "dark";
    }
    return theme === "dark";
  }, [mounted, systemTheme, theme]);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-[var(--surface)] text-muted ${
          className ?? ""
        }`}
        aria-label={ariaLabel}
      >
        <span className="inline-block h-3 w-3 rounded-full bg-[rgba(141,151,183,0.6)]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? lightLabel : darkLabel}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-[var(--surface)] text-muted transition hover:border-primary hover:text-primary ${
        className ?? ""
      }`}
      aria-label={ariaLabel}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M12 4V2m0 20v-2m8-8h2M2 12h2m12.24 5.66 1.42 1.42M4.34 4.34 5.76 5.76m12.48-1.42-1.42 1.42M5.76 18.24l-1.42 1.42"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M20 15.4A9 9 0 1 1 8.6 4a7 7 0 1 0 11.4 11.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
