import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSelect from "@/components/language-select";
import MobileDrawerNav from "@/components/mobile-drawer-nav";
import ThemeToggle from "@/components/theme-toggle";
import NavLinks from "@/components/nav-links";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 7h16v10H4V7Zm0 1.5 8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h3l1 4-2 2a14 14 0 0 0 5 5l2-2 4 1v3c0 .6-.4 1-1 1A14 14 0 0 1 5.5 5.5c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoMark() {
  return (
    <img
      src="/images/logo-website.png"
      alt="IGEE-Elektroniker logo"
      className="h-32 w-32 shrink-0 object-contain"
    />
  );
}

export default function SiteNav() {
  const topBar = useTranslations("TopBar");
  const theme = useTranslations("Theme");
  const header = useTranslations("Header");

  const navItems = [
    { href: "/", label: topBar("home") },
    { href: "/services", label: topBar("services") },
    { href: "/about", label: topBar("about") },
    { href: "/projects", label: topBar("projects") },
    { href: "/contact", label: topBar("contact") }
  ];

  return (
    <>
      {/* Top navigation bar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-primary text-white">
        <div className="mx-auto flex h-14 max-w-[1520px] items-center gap-3 px-4 sm:px-6">
          <MobileDrawerNav
            menuLabel={topBar("menu")}
            closeLabel={topBar("close")}
            items={navItems}
          />

          <NavLinks items={navItems} />

          <div className="ml-auto flex items-center gap-2">
            <LanguageSelect ariaLabel={topBar("language")} />
            <ThemeToggle
              lightLabel={theme("light")}
              darkLabel={theme("dark")}
              ariaLabel={theme("switch")}
              className="border-white/35 bg-black/20 text-white hover:border-white hover:text-white"
            />
          </div>
        </div>
      </div>

      {/* Header with logo and contact */}
      <header className="fixed inset-x-0 top-14 z-40 border-b border-border bg-[var(--surface)] shadow-sm">
        <div className="mx-auto flex h-[92px] max-w-[1520px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/">
            <LogoMark />
          </Link>

          {/* Desktop contact strip */}
          <div className="hidden w-full gap-4 text-sm lg:grid lg:grid-cols-3 lg:items-center lg:justify-end">
            <a
              href={`mailto:${header("email")}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface-soft)] px-3 py-3"
            >
              <span className="text-muted">
                <MailIcon />
              </span>
              <p className="font-semibold text-midnight">{header("email")}</p>
            </a>

            <a
              href={`tel:${header("phone").replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface-soft)] px-3 py-3"
            >
              <span className="text-muted">
                <PhoneIcon />
              </span>
              <p className="font-semibold text-midnight">{header("phone")}</p>
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-primary bg-primary px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-secondary hover:border-secondary"
            >
              {header("contactNow")}
            </Link>
          </div>

          {/* Mobile contact icons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`mailto:${header("email")}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface-soft)] text-muted"
              aria-label={header("emailLabel")}
            >
              <MailIcon />
            </a>
            <a
              href={`tel:${header("phone").replace(/\s/g, "")}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface-soft)] text-muted"
              aria-label={header("callLabel")}
            >
              <PhoneIcon />
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-primary bg-primary px-3 py-2 text-xs font-bold text-white"
            >
              {header("contactNow")}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
