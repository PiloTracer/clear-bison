"use client";

import { ContactForm } from "@/components/ContactForm";
import { useLocale } from "@/i18n/LocaleProvider";
import { OPTION_IDS } from "@/i18n/messages";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true">
          <img src="/hero-atmosphere.jpg" alt="" />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="hero__reliance">{t.hero.reliance}</p>
            <h1 id="hero-title">
              {t.hero.titleBefore}
              <em>{t.hero.titleEm}</em>
              {t.hero.titleAfter}
            </h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#contact">
                {t.hero.ctaTalk}
              </a>
              <a className="btn btn-ghost" href="#options">
                {t.hero.ctaOptions}
              </a>
            </div>
            <ul className="hero__assurances">
              {t.hero.assurances.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <figure className="hero__stage">
            <div className="product-visual__frame">
              <div className="product-visual__chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <img
                src="/report-preview.jpg"
                alt={t.product.visualAlt}
                width={960}
                height={720}
              />
            </div>
            <figcaption>{t.product.visualCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="proof" aria-label="Offer">
        <div className="shell proof__grid">
          {t.proof.map((item) => (
            <article key={item.label}>
              <strong>{item.label}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reel" className="reel" aria-labelledby="reel-title">
        <div className="shell">
          <span className="section-kicker">{t.reel.kicker}</span>
          <h2 className="section-title" id="reel-title">
            {t.reel.title}
          </h2>
          <div className="reel__grid">
            {t.reel.items.map((item) => (
              <figure className="reel__card" key={item.image}>
                <img src={item.image} alt={item.alt} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="path" aria-labelledby="path-title">
        <div className="shell">
          <span className="section-kicker">{t.steps.kicker}</span>
          <h2 className="section-title" id="path-title">
            {t.steps.title}
          </h2>
          <ol className="steps">
            {t.steps.items.map((step, index) => (
              <li key={step.title}>
                <span className="steps__n">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="product" aria-labelledby="product-title">
        <div className="shell">
          <span className="section-kicker">{t.product.kicker}</span>
          <h2 className="section-title" id="product-title">
            {t.product.title}
          </h2>
          <p className="section-lead">{t.product.lead}</p>
          <div className="feature-grid">
            <article className="feature">
              <span className="feature__index">01</span>
              <h3>{t.product.f1Title}</h3>
              <p>{t.product.f1Body}</p>
            </article>
            <article className="feature">
              <span className="feature__index">02</span>
              <h3>{t.product.f2Title}</h3>
              <p>{t.product.f2Body}</p>
            </article>
            <article className="feature">
              <span className="feature__index">03</span>
              <h3>{t.product.f3Title}</h3>
              <p>{t.product.f3Body}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="difference" className="band" aria-labelledby="diff-title">
        <div className="shell">
          <span className="section-kicker">{t.difference.kicker}</span>
          <h2 className="section-title" id="diff-title">
            {t.difference.title}
          </h2>
          <p className="section-lead">{t.difference.lead}</p>
          <div className="compare">
            <div className="compare-col">
              <h3>{t.difference.themTitle}</h3>
              <ul>
                {t.difference.them.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="compare-col is-ours">
              <h3>{t.difference.usTitle}</h3>
              <ul>
                {t.difference.us.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="options" aria-labelledby="options-title">
        <div className="shell">
          <span className="section-kicker">{t.options.kicker}</span>
          <h2 className="section-title" id="options-title">
            {t.options.title}
          </h2>
          <p className="section-lead">{t.options.lead}</p>
          <div className="options">
            {OPTION_IDS.map((id) => {
              const opt = t.options.items[id];
              const featured = id === "repo-scan";
              return (
                <article
                  key={id}
                  className={`option${featured ? " option--featured" : ""}`}
                  id={id}
                >
                  {featured ? (
                    <span className="option__start">{t.options.startHere}</span>
                  ) : null}
                  <span className="option__tag">{opt.tag}</span>
                  <h3>{opt.title}</h3>
                  <p className="option__blurb">{opt.blurb}</p>
                  <ul>
                    {opt.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${featured ? "btn-primary" : "btn-ghost"}`}
                    href={`/?option=${id}#contact`}
                  >
                    {t.options.requestQuote}
                  </a>
                </article>
              );
            })}
          </div>

          <a className="btn btn-wide" href="/#contact">
            <span className="btn-wide__label">{t.options.generalCta}</span>
            <span className="btn-wide__hint">{t.options.generalHint}</span>
          </a>

          <p className="price-note">{t.options.note}</p>
        </div>
      </section>

      <section id="trust" className="band" aria-labelledby="trust-title">
        <div className="shell trust">
          <div>
            <span className="section-kicker">{t.trust.kicker}</span>
            <h2 className="section-title" id="trust-title">
              {t.trust.title}
            </h2>
            <ul className="trust-points">
              {t.trust.points.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  {p.body}
                </li>
              ))}
            </ul>
          </div>
          <aside className="trust__panel">
            <h3>{t.trust.panelTitle}</h3>
            <p>{t.trust.panelBody}</p>
            <a className="btn btn-ghost" href="#contact">
              {t.trust.panelCta}
            </a>
          </aside>
        </div>
      </section>

      <section id="founding" className="founding" aria-labelledby="founding-title">
        <div className="founding__bg" aria-hidden="true">
          <img src="/cta-band.jpg" alt="" />
        </div>
        <div className="founding__veil" aria-hidden="true" />
        <div className="shell founding__content">
          <span className="section-kicker">{t.founding.kicker}</span>
          <h2 className="section-title" id="founding-title">
            {t.founding.title}
          </h2>
          <p className="founding__lead">{t.founding.lead}</p>
          <ul className="founding__points">
            {t.founding.points.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#contact">
            {t.founding.cta}
          </a>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-box">
            <div>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.lead}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__inner">
            <div>
              <strong className="site-footer__brand">ClearBison</strong>
              <span>
                {" "}
                · {t.footer.productOf}{" "}
                <a
                  href="https://logicbison.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t.footer.brand}
                </a>
              </span>
            </div>
            <div>
              <a href="#top">{t.footer.backTop}</a>
            </div>
          </div>
          <p className="legal-line">{t.footer.legal}</p>
        </div>
      </footer>
    </main>
  );
}
