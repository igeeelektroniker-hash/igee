import { useTranslations } from "next-intl";
import ServiceDetailLayout from "@/components/service-detail-layout";

export default function EnergieGebaeudetechnikPage() {
  const t = useTranslations("ServiceEnergy");
  const cta = useTranslations("CTA");
  const common = useTranslations("Common");

  return (
    <ServiceDetailLayout
      title={t("title")}
      subtitle={t("subtitle")}
      intro={t("intro")}
      items={[t("item1"), t("item2"), t("item3")]}
      backLabel={common("backToServices")}
      ctaTitle={cta("title")}
      ctaDesc={cta("description")}
      ctaButton={cta("button")}
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
      serviceSlug="energie-gebaeudetechnik"
    />
  );
}
