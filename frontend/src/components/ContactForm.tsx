"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");

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
        setDetail(json.detail || "Request failed. Email hello@clearbison.com.");
        return;
      }
      setStatus("ok");
      setDetail(json.detail || "Received. We will reply shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setDetail("Network error. Email hello@clearbison.com directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          Name
          <input name="name" type="text" required maxLength={120} autoComplete="name" />
        </label>
        <label>
          Work email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        Option
        <select name="option" defaultValue="">
          <option value="">Not sure yet</option>
          <option value="package">A — Package & session</option>
          <option value="repo-scan">B — Repo scan</option>
          <option value="domain-scan">D — Domain scan</option>
          <option value="scan-fix">C — Scan + fix</option>
        </select>
      </label>
      <label>
        What should we look at?
        <textarea name="message" required rows={4} maxLength={4000} />
      </label>
      <div className="btn-row">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request a scoping call"}
        </button>
        <a className="btn btn-ghost" href="mailto:hello@clearbison.com">
          Or email the founder
        </a>
      </div>
      {detail ? (
        <p className={`contact-form__status is-${status}`} role="status">
          {detail}
        </p>
      ) : null}
    </form>
  );
}
