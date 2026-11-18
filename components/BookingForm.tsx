"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

// Reusable request form. Submissions POST to FormSubmit, which emails them to the shop
// inbox (alias below maps to ironforge80135@gmail.com). FormSubmit's ajax endpoint can
// return HTTP 200 with {success:"false"} when it does not deliver, so we only show the
// success message when the JSON body confirms success === "true". Anything else (bad
// status, unconfirmed delivery, unreadable response, network error) shows a visible
// error with the shop phone and email so the customer can retry or reach us directly.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/3c62156067f49daa15e8678f6d6cd6c9";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const defaultHeading = kind === "fleet" ? "Request a fleet quote" : "Request a DOT inspection";
  const defaultIntro =
    kind === "fleet"
      ? "Tell us about your fleet and we will put together a maintenance and compliance plan."
      : "Send your details and we will confirm a time. Need it today? Call the shop.";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject =
      kind === "fleet"
        ? "New fleet quote request (ironforgecolorado.com)"
        : "New DOT inspection request (ironforgecolorado.com)";

    try {
      setStatus("submitting");
      data.append("_subject", subject);
      data.append("_template", "table");
      data.append("_captcha", "false");
      data.append("_url", window.location.href);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      let json: { success?: unknown } | null = null;
      try {
        json = await res.json();
      } catch {
        json = null;
      }
      if (res.ok && json && String(json.success) === "true") {
        setStatus("sent");
        form.reset();
        return;
      }
    } catch {
      // Network error: handled below.
    }
    setStatus("error");
  }

  return (
    <div id={id} className="scroll-mt-28 rounded-card border border-line bg-steel-900 p-6 md:p-8">
      <h2 className="font-display text-h3 font-bold uppercase tracking-tight text-text">
        {heading ?? defaultHeading}
      </h2>
      <p className="mt-2 text-[0.98rem] text-muted">{intro ?? defaultIntro}</p>

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
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
          Thanks, we have your request and will be in touch. Need it sooner? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phoneDisplay}</a>.
        </p>
      )}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-4 rounded-[3px] border border-red-500 bg-red-950/40 px-4 py-3 text-[0.95rem] text-red-200"
        >
          <p>
            Sorry, your request didn&apos;t go through. Please call us at{" "}
            <a href={SITE.phoneHref} className="font-semibold text-red-100 underline">{SITE.phoneDisplay}</a>.
          </p>
          <p className="mt-1">
            Or email us at{" "}
            <a href={`mailto:${SITE.email ?? "ironforge80135@gmail.com"}`} className="font-semibold text-red-100 underline">
              {SITE.email ?? "ironforge80135@gmail.com"}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
