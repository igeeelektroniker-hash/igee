import { useTranslations } from "next-intl";
import ServiceDetailLayout from "@/components/service-detail-layout";

export default function PhotovoltaikPage() {
  const t = useTranslations("ServicePV");
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
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=80"
      serviceSlug="photovoltaik"
    />
  );
}
