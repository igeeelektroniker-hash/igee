import { Link } from "@/i18n/navigation";

type ServiceDetailLayoutProps = {
  title: string;
  subtitle: string;
  intro: string;
  items: string[];
  backLabel: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  heroImage: string;
  serviceSlug: string;
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="rgba(0,147,210,0.12)" />
      <path
        d="M8 12l3 3 5-5"
        stroke="#0093D2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceDetailLayout({
  title,
  subtitle,
  intro,
  items,
  backLabel,
  ctaTitle,
  ctaDesc,
  ctaButton,
  heroImage,
  serviceSlug
}: ServiceDetailLayoutProps) {
  const contactHref = `/contact?service=${serviceSlug}` as "/";
  return (
    <main>
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[380px] flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-6">
          <Link
            href="/services"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
            {backLabel}
          </Link>
          <div className="w-fit rounded-2xl bg-black/55 px-8 py-7 backdrop-blur-sm">
            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-base font-semibold text-secondary">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Intro text */}
            <div>
              <p className="text-base leading-relaxed text-muted">{intro}</p>

              <div className="mt-10">
                <Link
                  href={contactHref}
                  className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white transition hover:bg-secondary"
                >
                  {ctaButton}
                </Link>
              </div>
            </div>

            {/* Service items list */}
            <div className="rounded-2xl border border-border bg-[var(--surface)] p-8">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm font-semibold text-midnight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-[1520px] px-4 text-center sm:px-6">
          <h2 className="text-4xl font-black text-white">{ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">{ctaDesc}</p>
          <Link
            href={contactHref}
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:bg-secondary hover:text-white"
          >
            {ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
