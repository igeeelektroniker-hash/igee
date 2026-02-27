import LanguageSelect from "@/components/language-select";
import HeroSlider from "@/components/hero-slider";
import MobileDrawerNav from "@/components/mobile-drawer-nav";
import ThemeToggle from "@/components/theme-toggle";
import { useTranslations } from "next-intl";

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

function DonationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
      <path
        d="M3 16c1.8-1.7 3.4-2 5-1l2 1.2c1 .6 2.2.6 3.2 0l1.7-1a3 3 0 0 1 3.1-.1l2 1.1"
        stroke="#0093D2"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.3 11.5V7.8c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v3.7"
        stroke="#1DC8CD"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12.5" cy="9.5" r="2" fill="#28CF91" />
    </svg>
  );
}

function VolunteerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
      <path
        d="m5 13 3-3 5 5-3 3a2.4 2.4 0 0 1-3.4 0L5 16.4a2.4 2.4 0 0 1 0-3.4Z"
        stroke="#0093D2"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m19 11-3 3-5-5 3-3a2.4 2.4 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4Z"
        stroke="#FF4D7E"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="#1DC8CD" />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
      <path
        d="M12 19c-3.6 0-6-2.3-6-5.5 0-1.7.8-3.2 2.2-4.2l3.8 3 3.8-3a5.2 5.2 0 0 1 2.2 4.2c0 3.2-2.4 5.5-6 5.5Z"
        stroke="#28CF91"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M12 9.2V4.5" stroke="#0093D2" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 4.5h4" stroke="#0093D2" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 5.5v2.5l-1.2 1" stroke="#FF4D7E" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
      <path
        d="M24 4 40.3 13.5v21L24 44 7.7 34.5v-21L24 4Z"
        fill="#E8FAFC"
        stroke="#1DC8CD"
        strokeWidth="2"
      />
      <path
        d="M15 18.8 24.2 13l8.8 5.3v3.7l-8.8 5.2-9.2-5.5v-2.9Z"
        fill="#0093D2"
      />
      <path d="m16 28.7 8.2 4.7 8.8-5.1" stroke="#28CF91" strokeWidth="2.2" />
    </svg>
  );
}

export default function HomePage() {
  const topBar = useTranslations("TopBar");
  const theme = useTranslations("Theme");
  const header = useTranslations("Header");
  const help = useTranslations("Help");
  const causes = useTranslations("Causes");
  const news = useTranslations("News");
  const urgent = useTranslations("Urgent");
  const newsletter = useTranslations("Newsletter");
  const latestNews = useTranslations("LatestNews");
  const testimonials = useTranslations("Testimonials");
  const volunteer = useTranslations("Volunteer");
  const footer = useTranslations("Footer");
  const common = useTranslations("Common");

  const helpCards = [
    {
      title: help("card1Title"),
      description: help("card1Description"),
      icon: <DonationIcon />
    },
    {
      title: help("card2Title"),
      description: help("card2Description"),
      icon: <VolunteerIcon />
    },
    {
      title: help("card3Title"),
      description: help("card3Description"),
      icon: <FoodIcon />
    }
  ];

  const causeCards = [
    {
      title: causes("card1Title"),
      raised: causes("card1Raised"),
      goal: causes("card1Goal"),
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: causes("card2Title"),
      raised: causes("card2Raised"),
      goal: causes("card2Goal"),
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: causes("card3Title"),
      raised: causes("card3Raised"),
      goal: causes("card3Goal"),
      image:
        "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const topNewsCards = [
    {
      title: news("card1Title"),
      description: news("card1Description"),
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: news("card2Title"),
      description: news("card2Description"),
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: news("card3Title"),
      description: news("card3Description"),
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
    }
  ];

  const latestItems = [
    {
      title: latestNews("item1Title"),
      meta: latestNews("item1Meta"),
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: latestNews("item2Title"),
      meta: latestNews("item2Meta"),
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: latestNews("item3Title"),
      meta: latestNews("item3Meta"),
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const donorCards = [
    {
      name: testimonials("card1Name"),
      role: testimonials("card1Role"),
      quote: testimonials("card1Quote"),
      avatar:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: testimonials("card2Name"),
      role: testimonials("card2Role"),
      quote: testimonials("card2Quote"),
      avatar:
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const navItems = [
    { href: "#", label: topBar("home") },
    { href: "#causes", label: topBar("causes") },
    { href: "#events", label: topBar("events") },
    { href: "#news", label: topBar("blog") },
    { href: "#contact", label: topBar("contact") }
  ];

  const sliderImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80"
  ];

  return (
    <main className="bg-[var(--page-bg)] text-[var(--foreground)]">
      <div className="fixed inset-x-0 top-0 z-50 bg-primary text-white">
        <div className="mx-auto flex h-14 max-w-[1520px] items-center gap-3 px-4 sm:px-6">
          <MobileDrawerNav
            menuLabel={topBar("menu")}
            closeLabel={topBar("close")}
            items={navItems}
          />

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#">{topBar("home")}</a>
            <a href="#causes">{topBar("causes")}</a>
            <a href="#events">{topBar("events")}</a>
            <a href="#news">{topBar("blog")}</a>
            <a href="#contact">{topBar("contact")}</a>
          </nav>

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

      <header className="fixed inset-x-0 top-14 z-40 border-b border-border bg-[var(--surface)] shadow-sm">
        <div className="mx-auto flex h-[92px] max-w-[1520px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-3xl font-black leading-none text-midnight">{header("orgName")}</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted">
                {header("orgType")}
              </p>
            </div>
          </div>

          <div className="hidden w-full gap-4 text-sm lg:grid lg:grid-cols-3 lg:items-center lg:justify-end">
            <a
              href="mailto:contact@igee-elektronick.com"
              className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface-soft)] px-3 py-3"
            >
              <span className="text-muted">
                <MailIcon />
              </span>
              <p className="font-semibold text-midnight">{header("email")}</p>
            </a>

            <a
              href="tel:+497031234567"
              className="flex items-center gap-3 rounded-xl border border-border bg-[var(--surface-soft)] px-3 py-3"
            >
              <span className="text-muted">
                <PhoneIcon />
              </span>
              <p className="font-semibold text-midnight">{header("phone")}</p>
            </a>

            <button
              type="button"
              className="rounded-xl border border-[var(--color-error)] bg-transparent px-5 py-3 text-sm font-bold text-[var(--color-error)] transition hover:bg-[var(--color-error)] hover:text-white"
            >
              {header("donateNow")}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="mailto:contact@igee-elektronick.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface-soft)] text-muted"
              aria-label={header("emailLabel")}
            >
              <MailIcon />
            </a>
            <a
              href="tel:+497031234567"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface-soft)] text-muted"
              aria-label={header("callLabel")}
            >
              <PhoneIcon />
            </a>
            <button
              type="button"
              className="rounded-full border border-[var(--color-error)] px-3 py-2 text-xs font-bold text-[var(--color-error)]"
            >
              {header("donateNow")}
            </button>
          </div>
        </div>
      </header>

      <div className="pt-[148px]">
        <HeroSlider images={sliderImages} className="h-[300px] sm:h-[430px] lg:h-[600px]" />

      <section id="events" className="bg-[var(--section-bg)] py-16">
        <div className="mx-auto max-w-[1520px] px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black text-midnight">{help("title")}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted">{help("subtitle")}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {helpCards.map((item) => (
              <article key={item.title} className="px-4">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-panel">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-midnight">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="causes" className="bg-[var(--section-bg)] pb-16">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-midnight">{causes("title")}</h2>
            <p className="mt-3 text-sm text-muted">{causes("subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {causeCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-sm border border-border bg-[var(--surface)]"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold leading-snug text-midnight">{card.title}</h3>

                  <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-sm border border-border">
                    <div className="border-r border-border px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                        {common("raised")}
                      </p>
                      <p className="text-2xl font-black text-primary">{card.raised}</p>
                    </div>
                    <div className="px-3 py-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                        {common("goal")}
                      </p>
                      <p className="text-2xl font-black text-midnight">{card.goal}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href="#"
              className="inline-block rounded-md bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-secondary"
            >
              {causes("viewAll")}
            </a>
          </div>
        </div>
      </section>

      <section id="news" className="bg-[var(--section-bg)] py-16">
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black text-midnight">{news("title")}</h2>
            <p className="mt-3 text-sm text-muted">{news("subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {topNewsCards.map((card) => (
              <article key={card.title}>
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.image}')` }}
                >
                  <span className="absolute right-2 top-2 rounded bg-white px-2 py-1 text-[11px] font-semibold text-midnight">
                    {news("date")}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-snug text-midnight">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href="#"
              className="inline-block rounded-md bg-primary px-7 py-3 text-sm font-bold text-white transition hover:bg-secondary"
            >
              {news("viewAll")}
            </a>
          </div>
        </div>
      </section>

      <section className="relative h-[390px] overflow-hidden sm:h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto flex h-full max-w-[1520px] items-center justify-center px-4 sm:px-6">
          <article className="w-full max-w-xl rounded-md border border-border bg-[var(--surface)] p-8 text-center shadow-panel">
            <h2 className="text-4xl font-black leading-tight text-midnight">{urgent("title")}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-dustGray">
              {urgent("description")}
            </p>
            <button
              type="button"
              className="mt-6 rounded-md bg-primary px-8 py-3 text-sm font-bold text-white transition hover:bg-secondary"
            >
              {urgent("button")}
            </button>
          </article>
        </div>
      </section>

      <section id="contact" className="bg-[var(--section-bg)] py-16">
        <div className="mx-auto grid max-w-[1520px] gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-secondary">{newsletter("tag")}</p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-midnight">
              {newsletter("title")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {newsletter("description")}
            </p>

            <form className="mt-7 flex max-w-md flex-col gap-3">
              <input
                type="text"
                placeholder={newsletter("namePlaceholder")}
                className="rounded-sm border border-border bg-[var(--surface)] px-4 py-3 text-sm text-midnight outline-none ring-0 placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-[var(--ring)]"
              />
              <input
                type="email"
                placeholder={newsletter("emailPlaceholder")}
                className="rounded-sm border border-border bg-[var(--surface)] px-4 py-3 text-sm text-midnight outline-none ring-0 placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-[var(--ring)]"
              />
              <button
                type="button"
                className="rounded-sm bg-[var(--color-error)] px-4 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                {newsletter("button")}
              </button>
            </form>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h2 className="text-4xl font-black text-midnight">{latestNews("title")}</h2>
              <a href="#" className="text-sm font-semibold text-[var(--color-error)]">
                {latestNews("viewAll")}
              </a>
            </div>

            <div className="mt-4 space-y-4">
              {latestItems.map((item) => (
                <article key={item.title} className="flex gap-4">
                  <div
                    className="h-16 w-24 shrink-0 rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-midnight">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--section-alt)] py-16">
        <div className="mx-auto max-w-[1520px] px-4 text-center sm:px-6">
          <h2 className="text-4xl font-black text-midnight">{testimonials("title")}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted">{testimonials("subtitle")}</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {donorCards.map((card) => (
              <article key={card.name} className="rounded-sm bg-[var(--surface)] p-6 text-left">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${card.avatar}')` }}
                  />
                  <div>
                    <p className="text-lg font-bold text-midnight">{card.name}</p>
                    <p className="text-xs text-muted">{card.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-dustGray">{card.quote}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[rgba(29,200,205,0.45)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[rgba(29,200,205,0.65)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          </div>
        </div>
      </section>

      <section className="relative h-[260px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-full max-w-[1520px] items-center justify-center px-4 text-center sm:px-6">
          <div>
            <h2 className="text-4xl font-black text-white">{volunteer("title")}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90">
              {volunteer("description")}
            </p>
            <a
              href="#"
              className="mt-7 inline-block rounded-md bg-[var(--color-error)] px-8 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              {volunteer("button")}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-[1520px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <p className="text-2xl font-black text-midnight">{header("orgName")}</p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-muted">
                  {header("orgType")}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{footer("about")}</p>
          </div>

          <div>
            <p className="text-lg font-black text-midnight">{footer("officeTitle")}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{footer("address")}</p>
            <p className="mt-3 text-sm font-semibold text-midnight">{header("phone")}</p>
            <p className="mt-1 text-sm font-semibold text-midnight">{header("email")}</p>
          </div>

          <div>
            <p className="text-lg font-black text-midnight">{footer("causesTitle")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{footer("cause1")}</li>
              <li>{footer("cause2")}</li>
              <li>{footer("cause3")}</li>
              <li>{footer("cause4")}</li>
              <li>{footer("cause5")}</li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-black text-midnight">{footer("linksTitle")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{footer("link1")}</li>
              <li>{footer("link2")}</li>
              <li>{footer("link3")}</li>
              <li>{footer("link4")}</li>
              <li>{footer("link5")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1520px] flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-muted sm:flex-row sm:px-6">
            <p>{footer("copyright")}</p>
            <div className="flex items-center gap-4 text-xs font-bold">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">IN</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
