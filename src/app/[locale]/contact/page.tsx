import { useTranslations } from "next-intl";
import { Suspense } from "react";
import ContactFormClient from "./ContactFormClient";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
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


/* Skeleton shown while the form hydrates */
function FormSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-[var(--surface)] p-8 animate-pulse">
      <div className="h-7 w-48 rounded-lg bg-[var(--section-bg)]" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="mt-5 space-y-1.5">
          <div className="h-3 w-24 rounded bg-[var(--section-bg)]" />
          <div className="h-11 w-full rounded-lg bg-[var(--section-bg)]" />
        </div>
      ))}
      <div className="mt-5 h-12 w-full rounded-lg bg-primary/20" />
    </div>
  );
}

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main>
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[340px] flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-6">
          <div className="w-fit rounded-2xl bg-black/55 px-8 py-7 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {t("tag")}
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-tight text-white">
              {t("title")}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* ── Contact content ─────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* ── Contact info ───────────────────────────────��──── */}
            <div className="space-y-5">
              {/* Person */}
              <div className="flex items-center gap-5 rounded-2xl border border-border bg-[var(--surface)] p-6">
                <img
                  src="/images/profile.jpeg"
                  alt={t("personName")}
                  className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-2 ring-primary/30"
                />
                <div>
                  <p className="text-xl font-black text-midnight">{t("personName")}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">IGEE-Elektroniker</p>
                  <p className="mt-0.5 text-xs text-muted">Energie- &amp; Gebäudetechnik</p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:+4917645817025`}
                className="flex items-start gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6 transition hover:border-primary hover:shadow-panel"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {t("orCall")}
                  </p>
                  <p className="mt-1 text-xl font-black text-midnight">{t("phone")}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@igee-elektroniker.com"
                className="flex items-start gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6 transition hover:border-primary hover:shadow-panel"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {t("orEmail")}
                  </p>
                  <p className="mt-1 text-xl font-black text-midnight">{t("email")}</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Adresse
                  </p>
                  <p className="mt-1 text-xl font-black text-midnight">{t("address")}</p>
                </div>
              </div>

              <p className="pl-1 text-xs italic text-muted">{t("responseTime")}</p>
            </div>

            {/* ── Contact form (client, reads ?service= param) ───── */}
            <Suspense fallback={<FormSkeleton />}>
              <ContactFormClient />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
