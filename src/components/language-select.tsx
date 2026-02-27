"use client";

import { useEffect, useMemo } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

type Locale = "de" | "en" | "fr";

type Option = {
  value: Locale;
  label: string;
};

const STORAGE_KEY = "igee_locale";
const COOKIE_NAME = "IGEE_LOCALE";

const options: Option[] = [
  { value: "de", label: "Deutsch" },
  { value: "en", label: "English" },
  { value: "fr", label: "Francais" }
];

const styles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: 34,
    borderRadius: 999,
    borderColor: state.isFocused ? "var(--color-secondary)" : "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    boxShadow: "none",
    paddingLeft: 4,
    paddingRight: 4,
    cursor: "pointer"
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px"
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
    margin: 0,
    padding: 0
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
    fontSize: 12,
    fontWeight: 700
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#fff",
    padding: 6
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 6,
    backgroundColor: "var(--surface)",
    border: "1px solid var(--color-border)"
  }),
  option: (base, state) => ({
    ...base,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    color: state.isSelected ? "#fff" : "var(--color-midnight_text)",
    backgroundColor: state.isSelected
      ? "var(--color-primary)"
      : state.isFocused
        ? "var(--surface-soft)"
        : "var(--surface)"
  })
};

function persistLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale);
  document.cookie = `${COOKIE_NAME}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

type LanguageSelectProps = {
  ariaLabel: string;
};

export default function LanguageSelect({ ariaLabel }: LanguageSelectProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    persistLocale(locale);
  }, [locale]);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === locale) ?? options[0],
    [locale]
  );

  const onChange = (option: SingleValue<Option>) => {
    if (!option || option.value === locale) {
      return;
    }

    persistLocale(option.value);
    router.replace(pathname, { locale: option.value });
  };

  return (
    <div className="w-[108px] sm:w-[128px]" aria-label={ariaLabel}>
      <Select
        instanceId="language-select"
        options={options}
        value={selectedOption}
        onChange={onChange}
        isSearchable={false}
        styles={styles}
      />
    </div>
  );
}
