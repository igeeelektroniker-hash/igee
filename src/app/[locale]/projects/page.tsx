import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const projectData = [
  {
    titleKey: "p1Title",
    descKey: "p1Desc",
    categoryKey: "category1",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
  },
  {
    titleKey: "p2Title",
    descKey: "p2Desc",
    categoryKey: "category1",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
  },
  {
    titleKey: "p3Title",
    descKey: "p3Desc",
    categoryKey: "category2",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
  },
  {
    titleKey: "p4Title",
    descKey: "p4Desc",
    categoryKey: "category3",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const cta = useTranslations("CTA");
  const topBar = useTranslations("TopBar");

  return (
    <main>
      {/* ── Page hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[340px] flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="relative mx-auto w-full max-w-[1520px] px-4 py-10 sm:px-6">
          <div className="w-fit rounded-2xl bg-black/55 px-8 py-7 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              {topBar("projects")}
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-tight text-white">
              {t("title")}
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* ── Projects grid ───────────────────────────────────────── */}
      <section className="bg-[var(--section-bg)] py-20">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="grid gap-7 sm:grid-cols-2">
            {projectData.map((p) => (
              <article
                key={p.titleKey}
                className="group overflow-hidden rounded-2xl border border-border bg-[var(--surface)] transition hover:shadow-panel"
              >
                <div
                  className="h-56 bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t(p.categoryKey as "category1")}
                  </span>
                  <h2 className="mt-3 text-xl font-black leading-snug text-midnight">
                    {t(p.titleKey as "p1Title")}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(p.descKey as "p1Desc")}
                  </p>
                </div>
              </article>
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
