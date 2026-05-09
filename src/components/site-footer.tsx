import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function LogoMark() {
  return (
    <img
      src="/images/logo-website.png"
      alt="IGEE-Elektroniker logo"
      className="h-24 w-24 shrink-0 object-contain"
    />
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function SiteFooter() {
  const footer = useTranslations("Footer");

  return (
    <footer className="bg-[var(--surface)] border-t border-border">
      <div className="mx-auto grid max-w-[1520px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        {/* Brand col */}
        <div>
          <div className="flex items-center">
            <LogoMark />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{footer("about")}</p>
        </div>

        {/* Contact col */}
        <div>
          <p className="text-base font-black text-midnight">{footer("officeTitle")}</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <LocationIcon />
              <span>{footer("address")}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon />
              <a
                href={`tel:${footer("phone").replace(/\s/g, "")}`}
                className="hover:text-primary transition-colors"
              >
                {footer("phone")}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon />
              <a
                href={`mailto:${footer("email")}`}
                className="hover:text-primary transition-colors"
              >
                {footer("email")}
              </a>
            </li>
          </ul>
        </div>

        {/* Services col */}
        <div>
          <p className="text-base font-black text-midnight">{footer("servicesTitle")}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services/elektroinstallation" className="hover:text-primary transition-colors">
                {footer("s1")}
              </Link>
            </li>
            <li>
              <Link href="/services/smart-home" className="hover:text-primary transition-colors">
                {footer("s2")}
              </Link>
            </li>
            <li>
              <Link href="/services/photovoltaik" className="hover:text-primary transition-colors">
                {footer("s3")}
              </Link>
            </li>
            <li>
              <Link href="/services/messtechnik" className="hover:text-primary transition-colors">
                {footer("s4")}
              </Link>
            </li>
            <li>
              <Link href="/services/industrie" className="hover:text-primary transition-colors">
                {footer("s5")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Links col */}
        <div>
          <p className="text-base font-black text-midnight">{footer("linksTitle")}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                {footer("link1")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                {footer("link2")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                {footer("link3")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors">
                {footer("link4")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                {footer("link5")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1520px] items-center justify-center px-4 py-5 text-sm text-muted sm:px-6">
          <p>{footer("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
