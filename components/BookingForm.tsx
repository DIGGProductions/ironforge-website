"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

// Reusable request form. If a real form service or scheduler is connected later,
// set FORM_ENDPOINT. Until then it composes an email to the shop so no request is lost.
const FORM_ENDPOINT = ""; // [CONFIRM WITH WILL] form service URL or scheduler embed

type Kind = "inspection" | "fleet";

const fieldCls =
  "w-full rounded-[3px] border border-line bg-steel-800 px-3.5 py-2.5 text-[0.97rem] text-text placeholder:text-muted/60 focus:border-gold focus:outline-none";
const labelCls = "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-gold-deep";

export default function BookingForm({
  id = "book",
  kind = "inspection",
  heading,
  intro,
}: {
  id?: string;
  kind?: Kind;
  heading?: string;
  intro?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const defaultHeading = kind === "fleet" ? "Request a fleet quote" : "Request a DOT inspection";
  const defaultIntro =
    kind === "fleet"
      ? "Tell us about your fleet and we will put together a maintenance and compliance plan."
      : "Send your details and we will confirm a time. Need it today? Call the shop.";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (FORM_ENDPOINT) {
      try {
        setStatus("submitting");
        const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
        setStatus("sent");
        if (res.ok) form.reset();
        return;
      } catch {
        // fall through to email
      }
    }

    // Email fallback: compose a message to the shop.
    const subject = kind === "fleet" ? "Fleet quote request" : "DOT inspection request";
    const lines: string[] = [];
    data.forEach((value, key) => {
      if (typeof value === "string" && value.trim()) lines.push(`${key}: ${value}`);
    });
    const body = lines.join("\n");
    const to = SITE.email ?? "";
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <div id={id} className="scroll-mt-28 rounded-card border border-line bg-steel-900 p-6 md:p-8">
      <h2 className="font-display text-h3 font-bold uppercase tracking-tight text-text">
        {heading ?? defaultHeading}
      </h2>
      <p className="mt-2 text-[0.98rem] text-muted">{intro ?? defaultIntro}</p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelCls}>Name</label>
          <input id={`${id}-name`} name="Name" required className={fieldCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelCls}>Phone</label>
          <input id={`${id}-phone`} name="Phone" type="tel" required className={fieldCls} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelCls}>Email</label>
          <input id={`${id}-email`} name="Email" type="email" className={fieldCls} autoComplete="email" />
        </div>
        {kind === "fleet" ? (
          <div>
            <label htmlFor={`${id}-count`} className={labelCls}>Number of vehicles</label>
            <input id={`${id}-count`} name="Number of vehicles" className={fieldCls} inputMode="numeric" />
          </div>
        ) : (
          <div>
            <label htmlFor={`${id}-date`} className={labelCls}>Preferred date</label>
            <input id={`${id}-date`} name="Preferred date" type="date" className={fieldCls} />
          </div>
        )}
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-vehicle`} className={labelCls}>
            {kind === "fleet" ? "Fleet type (landscaping, utility, construction, municipal)" : "Vehicle (year, make, type)"}
          </label>
          <input id={`${id}-vehicle`} name="Vehicle" className={fieldCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={labelCls}>What do you need?</label>
          <textarea id={`${id}-message`} name="Message" rows={4} className={fieldCls} />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-btn border border-transparent bg-gold px-[22px] py-[13px] font-display text-[15px] font-bold uppercase tracking-wide leading-none text-ink shadow-[inset_0_1px_0_rgba(232,192,120,0.55)] transition hover:bg-gold-bright hover:shadow-gold-glow disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : kind === "fleet" ? "Request fleet quote" : "Request inspection"}
          </button>
          <span className="text-[0.9rem] text-muted">
            Or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-gold hover:text-gold-bright">
              {SITE.phoneDisplay}
            </a>
          </span>
        </div>
      </form>

      {status === "sent" && (
        <p className="mt-4 rounded-[3px] border border-gold-deep bg-gold/10 px-4 py-3 text-[0.95rem] text-gold-bright">
          Thanks. Your email app should open with the details ready to send. If it does not, call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phoneDisplay}</a> and we will get you scheduled.
        </p>
      )}
    </div>
  );
}
