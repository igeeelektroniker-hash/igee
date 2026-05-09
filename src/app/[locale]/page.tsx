import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroSlider from "@/components/hero-slider";

/* ── Service icons ──────────────────────────────────────────────── */
function ElecIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(0,147,210,0.10)" />
      <path d="M26 10 16 26h10l-4 12 14-18H22l4-10Z" fill="#0093D2" />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(29,200,205,0.10)" />
      <rect x="12" y="30" width="5" height="8" rx="1" fill="#1DC8CD" />
      <rect x="21" y="22" width="5" height="16" rx="1" fill="#1DC8CD" />
      <rect x="30" y="14" width="5" height="24" rx="1" fill="#0093D2" />
    </svg>
  );
}

function SmartHomeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(40,207,145,0.10)" />
      <path
        d="M12 24 24 13 36 24v14H28v-8h-8v8H12V24Z"
        stroke="#28CF91"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="2.5" fill="#28CF91" />
    </svg>
  );
}

function SolarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(255,200,0,0.12)" />
      <circle cx="24" cy="24" r="7" fill="#FFB800" />
      <line x1="24" y1="8" x2="24" y2="13" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="35" x2="24" y2="40" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="24" x2="13" y2="24" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="35" y1="24" x2="40" y2="24" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="13" y1="13" x2="17" y2="17" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="31" x2="35" y2="35" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="13" x2="31" y2="17" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="31" x2="13" y2="35" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(0,147,210,0.10)" />
      <rect x="10" y="28" width="28" height="10" rx="1.5" stroke="#0093D2" strokeWidth="2" />
      <path d="M14 28V18l7 5V18l7 5V18l7 5v5" stroke="#0093D2" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function MeasureIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(255,77,126,0.10)" />
      <circle cx="24" cy="24" r="11" stroke="#FF4D7E" strokeWidth="2" />
      <path d="M24 13v5M24 30v5M13 24h5M30 24h5" stroke="#FF4D7E" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 24 30 18" stroke="#FF4D7E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LightingIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(255,200,0,0.12)" />
      <path
        d="M24 13c-4.4 0-8 3.6-8 8 0 3 1.6 5.6 4 7v3h8v-3c2.4-1.4 4-4 4-7 0-4.4-3.6-8-8-8Z"
        stroke="#FFB800"
        strokeWidth="2"
        fill="none"
      />
      <line x1="20" y1="34" x2="28" y2="34" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="37" x2="27" y2="37" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ElectronicsIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(40,207,145,0.10)" />
      <rect x="12" y="16" width="24" height="16" rx="2" stroke="#28CF91" strokeWidth="2" />
      <circle cx="18" cy="24" r="2" fill="#28CF91" />
      <circle cx="24" cy="24" r="2" fill="#1DC8CD" />
      <circle cx="30" cy="24" r="2" fill="#0093D2" />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="rgba(29,200,205,0.10)" />
      <path
        d="M30 14a8 8 0 1 0 0 14 8 8 0 0 0 0-14Zm0 0-2 2M18 30l-4 4"
        stroke="#1DC8CD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="21" r="4" stroke="#1DC8CD" strokeWidth="2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="rgba(40,207,145,0.15)" />
      <path d="M8 12l3 3 5-5" stroke="#28CF91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Component ──────────────────────────────────────────────────── */
export default function HomePage() {
  const welcome = useTranslations("Welcome");
  const services = useTranslations("Services");
  const whyUs = useTranslations("WhyUs");
  const partners = useTranslations("Partners");
  const projects = useTranslations("Projects");
  const cta = useTranslations("CTA");
  const hero = useTranslations("Hero");

  const serviceCards = [
    {
      slug: "elektroinstallation",
      title: services("elecTitle"),
      desc: services("elecDesc"),
      icon: <ElecIcon />
    },
    {
      slug: "energie-gebaeudetechnik",
      title: services("energyTitle"),
      desc: services("energyDesc"),
      icon: <EnergyIcon />
    },
    {
      slug: "smart-home",
      title: services("smartTitle"),
      desc: services("smartDesc"),
      icon: <SmartHomeIcon />
    },
    {
      slug: "photovoltaik",
      title: services("pvTitle"),
      desc: services("pvDesc"),
      icon: <SolarIcon />
    },
    {
      slug: "industrie",
      title: services("industryTitle"),
      desc: services("industryDesc"),
      icon: <IndustryIcon />
    },
    {
      slug: "messtechnik",
      title: services("measureTitle"),
      desc: services("measureDesc"),
      icon: <MeasureIcon />
    },
    {
      slug: "beleuchtung",
      title: services("lightingTitle"),
      desc: services("lightingDesc"),
      icon: <LightingIcon />
    },
    {
      slug: "elektronik",
      title: services("electronicsTitle"),
      desc: services("electronicsDesc"),
      icon: <ElectronicsIcon />
    },
    {
      slug: "wartung",
      title: services("maintenanceTitle"),
      desc: services("maintenanceDesc"),
      icon: <MaintenanceIcon />
    }
  ];

  const whyItems = [
    whyUs("r1"),
    whyUs("r2"),
    whyUs("r3"),
    whyUs("r4"),
    whyUs("r5"),
    whyUs("r6")
  ];

  const projectCards = [
    {
      title: projects("p1Title"),
      desc: projects("p1Desc"),
      category: projects("category1"),
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: projects("p2Title"),
      desc: projects("p2Desc"),
      category: projects("category1"),
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: projects("p3Title"),
      desc: projects("p3Desc"),
      category: projects("category2"),
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: projects("p4Title"),
      desc: projects("p4Desc"),
      category: projects("category3"),
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const sliderImages = [
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2200&q=80",
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2200&q=80"
  ];

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative">
        <HeroSlider images={sliderImages} className="h-[340px] sm:h-[480px] lg:h-[640px]" />
        {/* Strong left-to-right gradient so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        {/* Extra vertical darkening on mobile where the full image shows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6">
            <div className="inline-block max-w-xl rounded-2xl bg-black/50 px-8 py-8 backdrop-blur-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {hero("subtitle")}
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {hero("title")}
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
                {hero("description")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-secondary"
                >
                  {hero("ctaContact")}
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-white/70 bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25"
                >
                  {hero("ctaServices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Welcome / Intro ─────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                {welcome("tag")}
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-midnight">
                {welcome("title")}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">{welcome("description1")}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{welcome("description2")}</p>
              <div className="mt-6 inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary">
                {welcome("badge")}
              </div>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
                >
                  {welcome("learnMore")}
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="min-h-[200px] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=700&q=80')"
                }}
                role="img"
                aria-label="Electrical installation"
              />
              <div className="grid gap-4">
                <div
                  className="min-h-[96px] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80')"
                  }}
                  role="img"
                  aria-label="Solar panels"
                />
                <div
                  className="min-h-[96px] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80')"
                  }}
                  role="img"
                  aria-label="Smart home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ───────────────────────────────────────── */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black text-midnight">{services("title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{services("subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => (
              <Link
                key={card.slug}
                href={`/services/${card.slug}` as "/"}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-[var(--surface)] p-6 transition hover:border-primary hover:shadow-panel"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--section-bg)]">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-midnight group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-bold text-primary">
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white transition hover:bg-secondary"
            >
              {services("viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why us ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-midnight/80" />
        <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-black text-white">{whyUs("title")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{whyUs("subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/8 p-4 backdrop-blur-sm"
                >
                  <CheckIcon />
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ────────────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-16">
        <div className="mx-auto max-w-[1520px] px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black text-midnight">{partners("title")}</h2>
          <p className="mt-2 text-sm text-muted">{partners("subtitle")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["Televes", "KNX", "LOXONE"].map((name) => (
              <div
                key={name}
                className="flex h-16 w-36 items-center justify-center rounded-xl border border-border bg-[var(--surface)] px-4"
              >
                <span className="text-lg font-black text-midnight">{name}</span>
              </div>
            ))}
            <div className="flex h-16 w-36 items-center justify-center rounded-xl border border-dashed border-border px-4">
              <span className="text-sm font-semibold text-muted">{partners("more")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────── */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-black text-midnight">{projects("title")}</h2>
              <p className="mt-2 text-sm text-muted">{projects("subtitle")}</p>
            </div>
            <Link
              href="/projects"
              className="hidden shrink-0 text-sm font-bold text-primary hover:text-secondary transition-colors sm:block"
            >
              {projects("viewAll")} →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projectCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-2xl border border-border bg-[var(--surface)] transition hover:shadow-panel"
              >
                <div
                  className="h-44 bg-cover bg-center transition group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="p-4">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {card.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-midnight">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white"
            >
              {projects("viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ──────────────────────────────────────────── */}
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
