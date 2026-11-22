"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";

/**
 * Animated sample scan. Steps: 0 command typed → 1..3 passes → 4..6 findings → 7 summary.
 * Respects prefers-reduced-motion by rendering the final state immediately.
 */
const LAST_STEP = 7;

export function ScanConsole() {
  const { t } = useLocale();
  const c = t.console;
  const rows = t.board.rows;
  const [typed, setTyped] = useState(0);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(c.command.length);
      setStep(LAST_STEP);
      return;
    }
    setTyped(0);
    setStep(-1);
    let i = 0;
    let s = -1;
    let timer: ReturnType<typeof setTimeout>;
    const typeNext = () => {
      i += 1;
      setTyped(i);
      if (i < c.command.length) {
        timer = setTimeout(typeNext, 22 + Math.random() * 30);
      } else {
        timer = setTimeout(stepNext, 380);
      }
    };
    const stepNext = () => {
      s += 1;
      setStep(s);
      if (s < LAST_STEP) timer = setTimeout(stepNext, s < 3 ? 520 : 340);
    };
    timer = setTimeout(typeNext, 700);
    return () => clearTimeout(timer);
  }, [c.command]);

  const done = step >= LAST_STEP;

  return (
    <div className="console" aria-label={c.title}>
      <div className="console__bar">
        <span className="console__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="console__title">{c.title}</span>
        <span className={`console__state${done ? " is-done" : ""}`} aria-hidden="true" />
      </div>
      <div className="console__body">
        <p className="console__cmd">
          <span className="console__prompt">$</span>
          <span>{c.command.slice(0, typed)}</span>
          {step < 0 ? <span className="console__caret" aria-hidden="true" /> : null}
        </p>

        <ul className="console__passes">
          {c.passes.map((p, idx) => (
            <li key={p.name} className={step >= idx ? "is-in" : ""}>
              <span className="console__ok">✓</span>
              <span className="console__pass">{p.name}</span>
              <span className="console__note">{p.note}</span>
              <span className="console__hits">{p.hits}</span>
            </li>
          ))}
        </ul>

        <p className={`console__label${step >= 3 ? " is-in" : ""}`}>{c.findingsLabel}</p>
        <ul className="console__findings">
          {rows.map((row, idx) => (
            <li key={row.where} className={`sev-${row.level}${step >= 4 + idx ? " is-in" : ""}`}>
              <span className="sev-pill">{row.label}</span>
              <span className="console__fix">{row.fix}</span>
              <code>{row.where}</code>
            </li>
          ))}
        </ul>

        <div className={`console__summary${done ? " is-in" : ""}`}>
          <strong>{c.summary}</strong>
          <span>{c.written}</span>
        </div>
      </div>
      <a className={`console__cta${done ? " is-in" : ""}`} href="#contact">
        {c.cta}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
