"use client";

import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileDrawerNavProps = {
  menuLabel: string;
  closeLabel: string;
  items: NavItem[];
};

export default function MobileDrawerNav({
  menuLabel,
  closeLabel,
  items
}: MobileDrawerNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 text-xs font-semibold md:hidden"
        aria-label={menuLabel}
      >
        {menuLabel}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-[70] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label={closeLabel}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-[var(--surface)] p-4 text-midnight shadow-panel transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <p className="text-sm font-black">{menuLabel}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-border px-2 py-1 text-xs font-semibold"
              aria-label={closeLabel}
            >
              X
            </button>
          </div>

          <nav className="space-y-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-semibold hover:bg-[var(--surface-soft)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
