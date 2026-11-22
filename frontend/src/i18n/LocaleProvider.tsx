"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOCALE_STORAGE_KEY,
  messages,
  resolveInitialLocale,
  type Locale,
  type Messages,
} from "./messages";

type LocaleContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.title = messages[locale].metaTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", messages[locale].metaDescription);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = resolveInitialLocale();
    setLocaleState(initial);
    applyDocumentLocale(initial);
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyDocumentLocale(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      t: messages[locale],
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>
      <div className={ready ? "locale-ready" : "locale-boot"} data-locale={locale}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
