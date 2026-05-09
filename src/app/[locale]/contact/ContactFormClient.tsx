"use client";

import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

/* Map URL slug → translation key for the service select */
const SLUG_TO_KEY: Record<string, string> = {
  elektroinstallation: "sElec",
  "energie-gebaeudetechnik": "sEnergy",
  "smart-home": "sSmart",
  photovoltaik: "sPV",
  industrie: "sIndustry",
  messtechnik: "sMeasure",
  beleuchtung: "sLighting",
  elektronik: "sElectronics",
  wartung: "sMaintenance"
};

export default function ContactFormClient() {
  const t = useTranslations("Contact");
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";

  const serviceOptions = [
    { value: "elektroinstallation", label: t("sElec") },
    { value: "energie-gebaeudetechnik", label: t("sEnergy") },
    { value: "smart-home", label: t("sSmart") },
    { value: "photovoltaik", label: t("sPV") },
    { value: "industrie", label: t("sIndustry") },
    { value: "messtechnik", label: t("sMeasure") },
    { value: "beleuchtung", label: t("sLighting") },
    { value: "elektronik", label: t("sElectronics") },
    { value: "wartung", label: t("sMaintenance") }
  ];

  /* Pre-fill from URL param; fall back to empty (= placeholder shown) */
  const initialService = SLUG_TO_KEY[serviceParam] ? serviceParam : "";
  const [service, setService] = useState(initialService);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    /* Attach selected service to the mailto link for later wiring */
    const subject = service
      ? `Anfrage – ${serviceOptions.find((o) => o.value === service)?.label ?? service}`
      : "Allgemeine Anfrage";
    const body = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Telefon: ${data.get("phone") || "–"}`,
      `Leistung: ${subject}`,
      ``,
      `${data.get("message")}`
    ].join("\n");

    /* Open mailto – easy to swap for a real backend later */
    window.open(
      `mailto:info@igee-elektroniker.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-[var(--surface-soft)] px-4 py-3 text-sm text-midnight outline-none placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <div className="rounded-2xl border border-border bg-[var(--surface)] p-8">
      <h2 className="text-2xl font-black text-midnight">{t("formTitle")}</h2>

      {sent ? (
        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-primary/8 p-8 text-center">
          <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M8 12l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-lg font-black text-midnight">{t("send")} ✓</p>
          <p className="text-sm text-muted">{t("responseTime")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Service selector */}
          <div>
            <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-muted">
              {t("serviceLabel")}
            </label>
            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${inputClass} appearance-none bg-[image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%238d97b7'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")] bg-[right_0.75rem_center] bg-[length:1.25rem] bg-no-repeat pr-10`}
            >
              <option value="">{t("servicePlaceholder")}</option>
              <option value="general">{t("serviceGeneral")}</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-muted">
              {t("namePlaceholder")} *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t("namePlaceholder")}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-muted">
              {t("emailPlaceholder")} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-muted">
              {t("phonePlaceholder")}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t("phonePlaceholder")}
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-muted">
              {t("messagePlaceholder")} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={t("messagePlaceholder")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-secondary"
          >
            {t("send")}
          </button>
        </form>
      )}
    </div>
  );
}
