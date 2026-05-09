import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type ServiceGroup = {
  slug: string;
  titleKey: string;
  descKey: string;
  color: string;
  image: string;
};

export default function ServicesPage() {
  const t = useTranslations("Services");
  const cta = useTranslations("CTA");
  const topBar = useTranslations("TopBar");

  const serviceGroups: ServiceGroup[] = [
    {
      slug: "elektroinstallation",
      titleKey: "elecTitle",
      descKey: "elecDesc",
      color: "bg-blue-50 dark:bg-blue-950/30",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "energie-gebaeudetechnik",
      titleKey: "energyTitle",
      descKey: "energyDesc",
      color: "bg-cyan-50 dark:bg-cyan-950/30",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "smart-home",
      titleKey: "smartTitle",
      descKey: "smartDesc",
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "photovoltaik",
      titleKey: "pvTitle",
      descKey: "pvDesc",
      color: "bg-yellow-50 dark:bg-yellow-950/30",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "industrie",
      titleKey: "industryTitle",
      descKey: "industryDesc",
      color: "bg-slate-50 dark:bg-slate-800/30",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "messtechnik",
      titleKey: "measureTitle",
      descKey: "measureDesc",
      color: "bg-rose-50 dark:bg-rose-950/30",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "beleuchtung",
      titleKey: "lightingTitle",
      descKey: "lightingDesc",
      color: "bg-amber-50 dark:bg-amber-950/30",
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "elektronik",
      titleKey: "electronicsTitle",
      descKey: "electronicsDesc",
      color: "bg-teal-50 dark:bg-teal-950/30",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "wartung",
      titleKey: "maintenanceTitle",
      descKey: "maintenanceDesc",
      color: "bg-indigo-50 dark:bg-indigo-950/30",
      image:
        "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main>
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[340px] flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-6">
          <div className="w-fit rounded-2xl bg-black/55 px-8 py-7 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {topBar("services")}
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-tight text-white">
              {t("title")}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* ── Services grid ───────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}` as "/"}
                className="group overflow-hidden rounded-2xl border border-border bg-[var(--surface)] transition hover:shadow-panel hover:border-primary"
              >
                <div
                  className="h-44 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${svc.image}')` }}
                />
                <div className="p-5">
                  <h2 className="text-lg font-black text-midnight group-hover:text-primary transition-colors">
                    {t(svc.titleKey as "elecTitle")}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(svc.descKey as "elecDesc")}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-primary">
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
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
