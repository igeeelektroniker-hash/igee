import { useTranslations } from "next-intl";
import ServiceDetailLayout from "@/components/service-detail-layout";

export default function MesstechnikPage() {
  const t = useTranslations("ServiceMeasure");
  const cta = useTranslations("CTA");
  const common = useTranslations("Common");

  return (
    <ServiceDetailLayout
      title={t("title")}
      subtitle={t("subtitle")}
      intro={t("intro")}
      items={[t("item1"), t("item2"), t("item3"), t("item4"), t("item5")]}
      backLabel={common("backToServices")}
      ctaTitle={cta("title")}
      ctaDesc={cta("description")}
      ctaButton={cta("button")}
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2200&q=80"
      serviceSlug="messtechnik"
    />
  );
}
