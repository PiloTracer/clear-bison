import { ContactForm } from "@/components/ContactForm";

const OPTIONS = [
  {
    id: "package",
    tag: "Option A · Self-run",
    title: "Package & session",
    blurb:
      "You keep the scanner. We get the three local passes running on your Linux machine in one working session.",
    points: [
      <><strong>Includes:</strong> Linux package, setup session, safe / code / misconfig passes.</>,
      <><strong>You run</strong> later scans and read the reports yourself.</>,
      <><strong>Outside:</strong> Mac/Windows, website targets, us interpreting the report after the session.</>,
    ],
    featured: false,
  },
  {
    id: "repo-scan",
    tag: "Option B · Repo scan",
    title: "We scan one repository",
    blurb:
      "You send one repo. We run the scans — including one non-destructive model-directed pass — and hand you the reports.",
    points: [
      <><strong>Includes:</strong> operated scans, report delivery, deletion of your copy with confirmation.</>,
      <><strong>You fix</strong> the code. We do not change it in this option.</>,
      <><strong>Outside:</strong> a second repository, a live website, “prove every line is exploitable.”</>,
    ],
    featured: true,
  },
  {
    id: "domain-scan",
    tag: "Option D · Domain scan",
    title: "We scan one hostname",
    blurb:
      "You prove you own the domain. We run the URL programs and deliver every report those runs write — non-destructive.",
    points: [
      <><strong>Includes:</strong> ownership-gated URL scans and full report set for that hostname.</>,
      <><strong>You supply</strong> only the ownership proof — not your source tree.</>,
      <><strong>Outside:</strong> source changes, a second hostname, a “certificate of safety.”</>,
    ],
    featured: true,
  },
  {
    id: "scan-fix",
    tag: "Option C · Scan + fix",
    title: "Scan, fix what fits, verify",
    blurb:
      "Same scans as Option B, then up to two days of local changes from the report — largest first — with verification re-runs.",
    points: [
      <><strong>Includes:</strong> scans, focused remediation branch, list of what we did not touch.</>,
      <><strong>Verification</strong> re-runs the same three local passes.</>,
      <><strong>Outside:</strong> redesigns, new auth systems, dependency migrations, a second repo.</>,
    ],
    featured: false,
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true">
          <img src="/hero-atmosphere.jpg" alt="" />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="shell hero__content">
          <img
            className="hero__mark"
            src="/mark-metal.jpg"
            alt="ClearBison"
            width={148}
            height={148}
          />
          <h1 id="hero-title">
            Security findings you can <em>patch</em> — not a wall of noise.
          </h1>
          <p className="hero__lead">
            ClearBison is AI security scanning for code and sites you control.
            Authorized runs. Actionable reports. Founder-led delivery when you
            want a human who owns the outcome.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#options">
              See engagement options
            </a>
            <a className="btn btn-ghost" href="#contact">
              Talk to the founder
            </a>
          </div>
        </div>
      </section>

      <section id="product" aria-labelledby="product-title">
        <div className="shell">
          <span className="section-kicker">Product</span>
          <h2 className="section-title" id="product-title">
            Built to detect risk and help you improve it.
          </h2>
          <p className="section-lead">
            ClearBison is the product name for our Security OS scanner. It
            inspects repositories and authorized hostnames, writes reports, and
            stops short of pretending your system is “certified safe.” The goal
            is a measurable step forward — risks found, risks patched.
          </p>
          <div className="feature-grid">
            <article className="feature">
              <span className="feature__index">01</span>
              <h3>Local code, no model required</h3>
              <p>
                Safe secrets, code-rule, and misconfiguration passes run on a
                directory you own — without calling a model and without changing
                your files.
              </p>
            </article>
            <article className="feature">
              <span className="feature__index">02</span>
              <h3>Authorized targets only</h3>
              <p>
                Non-loopback URLs require ownership proof before active testing.
                Legal and ethical use is enforced in the tool, not just the
                marketing copy.
              </p>
            </article>
            <article className="feature">
              <span className="feature__index">03</span>
              <h3>Agentic depth when you need it</h3>
              <p>
                Optional non-destructive model-directed runs go beyond pattern
                matching — for teams that want reasoning, not another SAST
                dump.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="difference" className="band" aria-labelledby="diff-title">
        <div className="shell">
          <span className="section-kicker">Difference</span>
          <h2 className="section-title" id="diff-title">
            Not another faceless scanner dashboard.
          </h2>
          <p className="section-lead">
            Commodity platforms sell seats and credit packs. ClearBison sells
            outcomes with a person who will get on a call, size the work, and
            stand behind the report.
          </p>
          <div className="compare">
            <div className="compare-col">
              <h3>Typical SaaS scanners</h3>
              <ul>
                <li>Self-serve login, credit meters, generic severity noise</li>
                <li>You interpret thousands of findings alone</li>
                <li>Support queues when the report does not match reality</li>
                <li>Published rate cards that become negotiation ceilings</li>
              </ul>
            </div>
            <div className="compare-col is-ours">
              <h3>ClearBison</h3>
              <ul>
                <li>Scoped engagements sized to one repo or one hostname</li>
                <li>Reports you can patch against — with optional fix branch</li>
                <li>Direct access to the founder for scoping and trust</li>
                <li>Quotes in writing after a short call — never a cold price list</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="options" aria-labelledby="options-title">
        <div className="shell">
          <span className="section-kicker">Options</span>
          <h2 className="section-title" id="options-title">
            Four ways to engage. One honest quote.
          </h2>
          <p className="section-lead">
            We do not publish dollar amounts on this site. Every engagement is
            quoted after we understand scope — then confirmed in writing. Here
            is what each option covers.
          </p>
          <div className="options">
            {OPTIONS.map((opt) => (
              <article
                key={opt.id}
                className={`option${opt.featured ? " option--featured" : ""}`}
                id={opt.id}
              >
                <span className="option__tag">{opt.tag}</span>
                <h3>{opt.title}</h3>
                <p className="option__blurb">{opt.blurb}</p>
                <ul>
                  {opt.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a className="btn btn-primary" href="#contact">
                  Request a scoped quote
                </a>
              </article>
            ))}
          </div>
          <p className="price-note">
            Mac and Windows packages exist but stay outside Option A until a
            scan has been proven on those machines. No monitoring SLA. No
            24/7. No claim that a clean report means the system cannot be
            breached.
          </p>
        </div>
      </section>

      <section id="trust" className="band" aria-labelledby="trust-title">
        <div className="shell trust">
          <div>
            <span className="section-kicker">Trust</span>
            <h2 className="section-title" id="trust-title">
              You get the founder — not a ticket queue.
            </h2>
            <ul className="trust-points">
              <li>
                <strong>Direct CEO contact</strong>
                Scoping calls, quote walkthroughs, and delivery questions go to
                the person who ships the work.
              </li>
              <li>
                <strong>Authorized use, written down</strong>
                We only scan systems you own or are explicitly allowed to test.
                Ownership proof gates non-local targets.
              </li>
              <li>
                <strong>Honest boundaries</strong>
                Findings help you improve. They are not a certificate of safety
                and not proof a breach did — or did not — already happen.
              </li>
            </ul>
          </div>
          <aside className="trust__panel">
            <h3>How a quote is made</h3>
            <p>
              Short call. We size the option (A / B / C / D), confirm access,
              and send a written proposal. Diagnostics stay paid. Builds and
              fixes are quoted separately when they leave the option boundary.
            </p>
            <a className="btn btn-ghost" href="#contact">
              Book the scoping call
            </a>
          </aside>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-box" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h2 id="contact-title">Ready when you are.</h2>
              <p>
                Tell us which option fits — or describe the system. We reply
                with a time for a short scoping call with the founder.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__inner">
            <div>
              <strong style={{ color: "var(--ink)" }}>ClearBison</strong>
              <span> · Product of LogicBison</span>
            </div>
            <div>
              <a href="mailto:hello@clearbison.com">hello@clearbison.com</a>
              {" · "}
              <a href="#top">Back to top</a>
            </div>
          </div>
          <p className="legal-line">
            ClearBison tools are for legal and ethical use only — on your own
            applications, or on systems you are explicitly authorized to test.
            Reports detect and describe risk so it can be patched; they do not
            certify that a system is safe.
          </p>
        </div>
      </footer>
    </main>
  );
}
