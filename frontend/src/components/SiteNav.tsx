"use client";

import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { useLocale } from "@/i18n/LocaleProvider";

export function SiteNav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="shell site-nav__inner">
        <a className="brand-link" href="#top" aria-label="ClearBison home">
          <img src="/mark-metal.png" alt="" width={36} height={36} />
          <span>
            <span className="clear">Clear</span>
            <span className="bison">Bison</span>
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#difference">{t.nav.difference}</a>
            </li>
            <li>
              <a href="#product">{t.nav.product}</a>
            </li>
            <li>
              <a href="#options">{t.nav.options}</a>
            </li>
            <li>
              <a href="#trust">{t.nav.trust}</a>
            </li>
            <li>
              <a href="#faq">{t.nav.faq}</a>
            </li>
            <li>
              <LanguageSwitch />
            </li>
            <li>
              <a className="btn btn-primary" href="#contact">
                {t.nav.talk}
              </a>
            </li>
          </ul>
        </nav>
        <div className="site-nav__mobile-lang">
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
