"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/messages";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();

  function pick(next: Locale) {
    if (next === locale) return;
    setLocale(next);
  }

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.langAria}>
      <button
        type="button"
        className={`lang-switch__btn${locale === "en" ? " is-active" : ""}`}
        aria-pressed={locale === "en"}
        onClick={() => pick("en")}
      >
        English
      </button>
      <button
        type="button"
        className={`lang-switch__btn${locale === "es" ? " is-active" : ""}`}
        aria-pressed={locale === "es"}
        onClick={() => pick("es")}
      >
        Español
      </button>
    </div>
  );
}
