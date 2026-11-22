"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { isOptionId, type OptionId } from "@/i18n/messages";

type Status = "idle" | "sending" | "ok" | "error";

function readOptionFromUrl(): OptionId | "" {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("option") || "";
  return isOptionId(raw) ? raw : "";
}

export function ContactForm() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");
  const [option, setOption] = useState<OptionId | "">("");

  useEffect(() => {
    const sync = () => setOption(readOptionFromUrl());
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  // Re-sync when in-page links target contact (with or without ?option=)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href.includes("#contact")) return;
      try {
        const url = new URL(href, window.location.origin);
        const raw = url.searchParams.get("option") || "";
        setOption(isOptionId(raw) ? raw : "");
      } catch {
        setOption("");
      }
      // Also re-read after navigation settles (Next soft nav / history update).
      setTimeout(() => setOption(readOptionFromUrl()), 50);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setDetail("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          option: String(data.get("option") || ""),
          message: String(data.get("message") || ""),
        }),
      });
      const json = (await res.json()) as { detail?: string; ok?: boolean };
      if (!res.ok) {
        setStatus("error");
        setDetail(json.detail || t.contact.fail);
        return;
      }
      setStatus("ok");
      setDetail(json.detail || t.contact.okFallback);
      form.reset();
      setOption(readOptionFromUrl());
    } catch {
      setStatus("error");
      setDetail(t.contact.network);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          {t.contact.name}
          <input name="name" type="text" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          {t.contact.email}
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        {t.contact.option}
        <select
          name="option"
          value={option}
          onChange={(e) => {
            const next = e.target.value;
            const value = isOptionId(next) ? next : "";
            setOption(value);
            const url = new URL(window.location.href);
            if (value) url.searchParams.set("option", value);
            else url.searchParams.delete("option");
            url.hash = "contact";
            window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
          }}
        >
          <option value="">{t.contact.optionBlank}</option>
          {(Object.keys(t.contact.optionLabels) as OptionId[]).map((id) => (
            <option key={id} value={id}>
              {t.contact.optionLabels[id]}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t.contact.message}
        <textarea name="message" required rows={4} maxLength={4000} />
      </label>
      <div className="btn-row">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.contact.submitting : t.contact.submit}
        </button>
      </div>
      {detail ? (
        <p className={`contact-form__status is-${status}`} role="status">
          {detail}
        </p>
      ) : null}
    </form>
  );
}
