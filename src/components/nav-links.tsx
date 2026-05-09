"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

type NavItem = {
  href: string;
  label: string;
};

type NavLinksProps = {
  items: NavItem[];
};

export default function NavLinks({ items }: NavLinksProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
      {items.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href as "/"}
            className={`transition-opacity ${
              active ? "opacity-80" : "opacity-100 hover:opacity-80"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
