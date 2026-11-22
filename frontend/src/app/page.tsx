"use client";

import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icon";
import { PageEffects } from "@/components/PageEffects";
import { ScanConsole } from "@/components/ScanConsole";
import { useLocale } from "@/i18n/LocaleProvider";
import { OPTION_IDS } from "@/i18n/messages";

const OPTION_ICONS: Record<string, IconName> = {
  package: "terminal",
  "repo-scan": "file",
  "domain-scan": "globe",
  "scan-fix": "wrench",
};

const TRUST_ICONS: IconName[] = ["seat", "shield", "lock", "eye", "spark", "scale"];

/** Illustrative "noise" rows for the typical-scanner panel (decorative only). */
const NOISE_ROWS = Array.from({ length: 22 }, (_, i) => i);

export default function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      <PageEffects />

      {/* ——— Hero ——— */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true">
          <img src="/hero-atmosphere.jpg" alt="" />
        </div>
        <div className="hero__aurora" aria-hidden="true" />
        <div className="hero__grid-lines" aria-hidden="true" />
        <div className="shell hero__layout">
          <div className="hero__copy">
            <a className="eyebrow" href="#founding">
              <span className="eyebrow__dot" aria-hidden="true" />
              {t.hero.eyebrow}
              <Icon name="arrow" size={14} />
            </a>
            <h1 id="hero-title">
              {t.hero.titleBefore}
              <em>{t.hero.titleEm}</em>
              {t.hero.titleAfter}
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn-primary btn-lg" href="#contact">
                {t.hero.ctaTalk}
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-ghost btn-lg" href="#options">
                {t.hero.ctaOptions}
              </a>
            </div>
            <ul className="hero__assurances">
              {t.hero.assurances.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    <Icon name="check" size={16} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero__stage">
            <div className="hero__halo" aria-hidden="true" />
            <ScanConsole />
          </div>
        </div>

        <div className="shell">
          <dl className="facts">
            {t.facts.map((f) => (
              <div key={f.value} className="facts__item">
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ——— Coverage marquee ——— */}
      <section className="coverage" aria-label={t.coverage.label}>
        <p className="coverage__label">{t.coverage.label}</p>
        <div className="marquee">
          <ul className="marquee__track">
            {[...t.coverage.items, ...t.coverage.items].map((item, i) => (
              <li key={`${item}-${i}`} aria-hidden={i >= t.coverage.items.length}>
                <Icon name="shield" size={15} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Signal vs noise ——— */}
      <section id="difference" className="section" aria-labelledby="diff-title">
        <div className="shell">
          <header className="section-head" data-reveal>
            <span className="section-kicker">{t.difference.kicker}</span>
            <h2 className="section-title" id="diff-title">
              {t.difference.title}
            </h2>
            <p className="section-lead">{t.difference.lead}</p>
          </header>

          <div className="versus">
            <article className="versus__col is-them" data-reveal>
              <header>
                <h3>{t.difference.themTitle}</h3>
                <p>{t.difference.themCount}</p>
              </header>
              <div className="noise" aria-hidden="true">
                {NOISE_ROWS.map((i) => (
                  <span key={i} style={{ ["--w" as string]: `${38 + ((i * 37) % 55)}%` }} />
                ))}
              </div>
              <ul className="versus__list">
                {t.difference.them.map((line) => (
                  <li key={line}>
                    <Icon name="minus" size={16} />
                    {line}
                  </li>
                ))}
              </ul>
            </article>

            <article className="versus__col is-us" data-reveal>
              <header>
                <h3>{t.difference.usTitle}</h3>
                <p>{t.difference.usCount}</p>
              </header>
              <ul className="signal" aria-hidden="true">
                {t.board.rows.map((row) => (
                  <li key={row.where} className={`sev-${row.level}`}>
                    <span className="sev-pill">{row.label}</span>
                    <span className="signal__fix">{row.fix}</span>
                    <code>{row.where}</code>
                  </li>
                ))}
              </ul>
              <ul className="versus__list">
                {t.difference.us.map((line) => (
                  <li key={line}>
                    <Icon name="check" size={16} />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Product bento ——— */}
      <section id="product" className="section section--tint" aria-labelledby="product-title">
        <div className="shell">
          <header className="section-head" data-reveal>
            <span className="section-kicker">{t.product.kicker}</span>
            <h2 className="section-title" id="product-title">
              {t.product.title}
            </h2>
            <p className="section-lead">{t.product.lead}</p>
          </header>

          <div className="bento">
            <article className="tile tile--report spot" data-reveal>
              <div className="tile__text">
                <span className="tile__icon">
                  <Icon name="doc" />
                </span>
                <h3>{t.product.reportTitle}</h3>
                <p>{t.product.reportBody}</p>
              </div>
              <div className="report" aria-hidden="true">
                <div className="report__head">
                  <span className="sev-pill sev-critical">{t.board.rows[0].label}</span>
                  <code>src/api/session.ts:88</code>
                </div>
                <p className="report__title">{t.product.reportFinding}</p>
                <pre className="code">
                  <span className="ln">86</span>
                  {"export function requireSession(req) {\n"}
                  <span className="ln">87</span>
                  {"  const token = req.headers.get(\"x-session\");\n"}
                  <span className="code__bad">
                    <span className="ln">88</span>
                    {"  if (!token) return next();\n"}
                  </span>
                  <span className="ln">89</span>
                  {"  return verify(token);\n"}
                </pre>
                <p className="report__fixlabel">{t.product.reportFixLabel}</p>
                <pre className="code code--diff">
                  <span className="code__del">{"-  if (!token) return next();\n"}</span>
                  <span className="code__add">{"+  if (!token) return deny(401);\n"}</span>
                </pre>
              </div>
            </article>

            <article className="tile spot" data-reveal>
              <span className="tile__icon">
                <Icon name="terminal" />
              </span>
              <h3>{t.product.f1Title}</h3>
              <p>{t.product.f1Body}</p>
              <div className="passes" aria-hidden="true">
                {t.console.passes.map((p) => (
                  <span key={p.name}>
                    <Icon name="check" size={14} />
                    {p.name}
                  </span>
                ))}
              </div>
              <p className="tile__metric" aria-hidden="true">
                <strong>0</strong> {t.product.f1Meta}
              </p>
            </article>

            <article className="tile spot" data-reveal>
              <span className="tile__icon">
                <Icon name="globe" />
              </span>
              <h3>{t.product.f2Title}</h3>
              <p>{t.product.f2Body}</p>
              <div className="dns" aria-hidden="true">
                <code>
                  _clearbison.acme.dev <span>TXT</span> &quot;cb-verify=7f3a…&quot;
                </code>
                <span className="dns__ok">
                  <Icon name="check" size={14} />
                  {t.product.f2Status}
                </span>
              </div>
            </article>

            <article className="tile tile--wide spot" data-reveal>
              <div className="tile__text">
                <span className="tile__icon">
                  <Icon name="spark" />
                </span>
                <h3>{t.product.f3Title}</h3>
                <p>{t.product.f3Body}</p>
              </div>
              <div className="trail" aria-hidden="true">
                <span>local passes</span>
                <i />
                <span>model-directed pass</span>
                <i />
                <span className="trail__badge">
                  <Icon name="shield" size={14} />
                  {t.product.f3Badge}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ——— Path ——— */}
      <section id="path" className="section" aria-labelledby="path-title">
        <div className="shell">
          <header className="section-head section-head--center" data-reveal>
            <span className="section-kicker">{t.steps.kicker}</span>
            <h2 className="section-title" id="path-title">
              {t.steps.title}
            </h2>
          </header>
          <ol className="steps">
            {t.steps.items.map((step, index) => (
              <li key={step.title} data-reveal style={{ ["--d" as string]: `${index * 90}ms` }}>
                <span className="steps__n">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Options ——— */}
      <section id="options" className="section section--tint" aria-labelledby="options-title">
        <div className="shell">
          <header className="section-head section-head--center" data-reveal>
            <span className="section-kicker">{t.options.kicker}</span>
            <h2 className="section-title" id="options-title">
              {t.options.title}
            </h2>
            <p className="section-lead">{t.options.lead}</p>
          </header>

          <div className="options">
            {OPTION_IDS.map((id, index) => {
              const opt = t.options.items[id];
              const featured = id === "repo-scan";
              const labels = [t.options.includedLabel, t.options.youLabel, t.options.outsideLabel];
              const icons: IconName[] = ["check", "user", "minus"];
              return (
                <article
                  key={id}
                  id={id}
                  className={`option spot${featured ? " is-featured" : ""}`}
                  data-reveal
                  style={{ ["--d" as string]: `${index * 70}ms` }}
                >
                  {featured ? <span className="option__start">{t.options.startHere}</span> : null}
                  <div className="option__top">
                    <span className="tile__icon">
                      <Icon name={OPTION_ICONS[id]} />
                    </span>
                    <span className="option__tag">{opt.tag}</span>
                  </div>
                  <h3>{opt.title}</h3>
                  <p className="option__blurb">{opt.blurb}</p>
                  <ul className="option__points">
                    {opt.points.map((point, i) => (
                      <li key={point} className={`is-${icons[i]}`}>
                        <Icon name={icons[i]} size={15} />
                        <span>
                          <b>{labels[i]}</b>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${featured ? "btn-primary" : "btn-ghost"} option__cta`}
                    href={`/?option=${id}#contact`}
                  >
                    {t.options.requestQuote}
                  </a>
                </article>
              );
            })}
          </div>

          <a className="btn-wide" href="/#contact" data-reveal>
            <span>
              <span className="btn-wide__label">{t.options.generalCta}</span>
              <span className="btn-wide__hint">{t.options.generalHint}</span>
            </span>
            <Icon name="arrow" size={22} />
          </a>

          <p className="price-note">{t.options.note}</p>
        </div>
      </section>

      {/* ——— Trust ——— */}
      <section id="trust" className="section" aria-labelledby="trust-title">
        <div className="shell trust">
          <aside className="letter" data-reveal>
            <span className="section-kicker">{t.trust.kicker}</span>
            <h2 className="section-title" id="trust-title">
              {t.trust.title}
            </h2>
            <div className="letter__card">
              <h3>{t.trust.panelTitle}</h3>
              <p>{t.trust.panelBody}</p>
              <p className="letter__sign">
                <img src="/mark-metal.png" alt="" width={28} height={28} />
                {t.trust.panelSign}
              </p>
              <a className="btn btn-primary" href="#contact">
                {t.trust.panelCta}
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </aside>
          <ul className="trust-grid">
            {t.trust.points.map((p, i) => (
              <li key={p.title} className="spot" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                <span className="tile__icon">
                  <Icon name={TRUST_ICONS[i] ?? "shield"} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section id="faq" className="section section--tint" aria-labelledby="faq-title">
        <div className="shell faq">
          <header className="section-head" data-reveal>
            <span className="section-kicker">{t.faq.kicker}</span>
            <h2 className="section-title" id="faq-title">
              {t.faq.title}
            </h2>
          </header>
          <div className="faq__list" data-reveal>
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Icon name="plus" size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Founding + contact ——— */}
      <section id="founding" className="closing" aria-labelledby="founding-title">
        <div className="closing__bg" aria-hidden="true">
          <img src="/cta-band.jpg" alt="" />
        </div>
        <div className="closing__veil" aria-hidden="true" />
        <div className="shell closing__layout">
          <div className="closing__pitch" data-reveal>
            <span className="section-kicker">{t.founding.kicker}</span>
            <h2 className="section-title section-title--xl" id="founding-title">
              {t.founding.title}
            </h2>
            <p className="closing__lead">{t.founding.lead}</p>
            <ul className="closing__points">
              {t.founding.points.map((line) => (
                <li key={line}>
                  <Icon name="check" size={16} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div id="contact" className="contact-card" data-reveal>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.lead}</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__inner">
            <div className="site-footer__brandrow">
              <img src="/mark-metal.png" alt="" width={28} height={28} />
              <strong className="site-footer__brand">ClearBison</strong>
              <span>
                {t.footer.productOf}{" "}
                <a href="https://logicbison.com" rel="noopener noreferrer" target="_blank">
                  {t.footer.brand}
                </a>
              </span>
            </div>
            <a href="#top">{t.footer.backTop} ↑</a>
          </div>
          <p className="legal-line">{t.footer.legal}</p>
        </div>
      </footer>

      <a className="mobile-cta btn btn-primary" href="#contact">
        {t.nav.talk}
        <Icon name="arrow" size={18} />
      </a>
    </main>
  );
}
