import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="#0093D2" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="9" ry="20" stroke="#1DC8CD" strokeWidth="2" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="#0093D2" strokeWidth="2" />
      <line x1="8" y1="15" x2="40" y2="15" stroke="#0093D2" strokeWidth="1.5" />
      <line x1="8" y1="33" x2="40" y2="33" stroke="#0093D2" strokeWidth="1.5" />
    </svg>
  );
}

export default function AboutPage() {
  const about = useTranslations("About");
  const cta = useTranslations("CTA");
  const whyUs = useTranslations("WhyUs");

  const strengths = [
    about("s1"),
    about("s2"),
    about("s3"),
    about("s4")
  ];

  const whyItems = [
    whyUs("r1"),
    whyUs("r2"),
    whyUs("r3"),
    whyUs("r4"),
    whyUs("r5"),
    whyUs("r6")
  ];

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
              {about("tag")}
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-tight text-white">
              {about("title")}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted">{about("description1")}</p>
              <p className="text-base leading-relaxed text-muted">{about("description2")}</p>
              <p className="text-base leading-relaxed text-muted">{about("description3")}</p>
            </div>

            {/* Strengths */}
            <div className="rounded-2xl border border-border bg-[var(--surface)] p-8">
              <h2 className="text-2xl font-black text-midnight">{about("strengthsTitle")}</h2>
              <ul className="mt-6 space-y-4">
                {strengths.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-sm font-semibold text-midnight">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── International ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-10 rounded-2xl border border-border bg-[var(--surface)] p-10 lg:grid-cols-2 lg:items-center">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--section-bg)]">
                <GlobeIcon />
              </div>
              <div>
                <h2 className="text-2xl font-black text-midnight">{about("internationalTitle")}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{about("internationalDesc")}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{about("internationalDetail")}</p>
              </div>
            </div>
            <div
              className="h-56 overflow-hidden rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80')"
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Why us ──────────────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black text-midnight">{whyUs("title")}</h2>
            <p className="mt-3 text-sm text-muted">{whyUs("subtitle")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface)] p-5"
              >
                <CheckIcon />
                <p className="text-sm font-semibold text-midnight">{item}</p>
              </div>
            ))}
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
          <h2 className="text-4xl font-black text-white">{cta("title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">
            {cta("description")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:bg-secondary hover:text-white"
          >
            {cta("button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
