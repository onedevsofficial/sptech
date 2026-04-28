"use client";

import { useEffect, useState } from "react";
import { trackLead } from "@/components/MetaPixel";

type Captcha = { question: string; token: string };
type Status = "idle" | "submitting" | "success" | "error";

export default function Lp999Form() {
  const [captcha, setCaptcha] = useState<Captcha | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [startedAt] = useState<number>(() => Date.now());

  const loadCaptcha = async () => {
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      if (!res.ok) throw new Error("captcha");
      setCaptcha(await res.json());
    } catch {
      setCaptcha(null);
    }
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;

    if (!captcha?.token) {
      setStatus("error");
      setErrorMsg("Verification still loading. Try again in a moment.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(form);
    const businessLine = [
      fd.get("business") ? `Business: ${fd.get("business")}` : "",
      fd.get("city") ? `City: ${fd.get("city")}` : "",
    ]
      .filter(Boolean)
      .join(" · ");

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      service: "website-999 (LP)",
      budget: "999",
      message: businessLine || "Enquiry from ₹999 plan landing page.",
      website: String(fd.get("website") || ""),
      captchaAnswer: String(fd.get("captchaAnswer") || "").trim(),
      captchaToken: captcha.token,
      elapsedMs: Date.now() - startedAt,
      consent: fd.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      let data: { error?: string; message?: string; ok?: boolean } = {};
      try {
        data = JSON.parse(text);
      } catch {
        /* response wasn't JSON */
      }
      if (!res.ok) {
        const msg =
          data?.error ||
          data?.message ||
          (text && text.length < 200 ? text : `Submission failed (HTTP ${res.status}).`);
        throw new Error(msg);
      }
      setStatus("success");
      trackLead(999);
      form.reset();
      loadCaptcha();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send.");
      loadCaptcha();
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate>
      <h3 className="font-display text-[22px] sm:text-[24px] font-bold tracking-tightish">
        Claim your ₹999 plan
      </h3>
      <p className="mt-1 text-[14px] text-muted">
        Fill this in 30 seconds. We'll WhatsApp you within 4 hours with next steps.
      </p>

      {status === "success" && (
        <div className="mt-5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-[14px] text-emerald-900">
          <strong>Done — we got your details.</strong> Our senior designer will WhatsApp you on the number you shared. For anything urgent, message <a className="underline" href="https://wa.me/917003391355">+91 70033 91355</a>.
        </div>
      )}

      {status === "error" && errorMsg && (
        <div className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[14px] text-red-900">
          {errorMsg}
        </div>
      )}

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="lp-name" className="block text-[13px] font-medium mb-1.5">
            Your name <span className="text-accent">*</span>
          </label>
          <input id="lp-name" name="name" type="text" required maxLength={80} autoComplete="name" placeholder="Ravi Mehra" />
        </div>
        <div>
          <label htmlFor="lp-phone" className="block text-[13px] font-medium mb-1.5">
            WhatsApp number <span className="text-accent">*</span>
          </label>
          <input id="lp-phone" name="phone" type="tel" required maxLength={20} autoComplete="tel" pattern="^[0-9+()\-\s]{7,20}$" placeholder="+91 98xxxxxxxx" />
        </div>
        <div>
          <label htmlFor="lp-email" className="block text-[13px] font-medium mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input id="lp-email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@business.com" />
        </div>
        <div>
          <label htmlFor="lp-business" className="block text-[13px] font-medium mb-1.5">
            Business name
          </label>
          <input id="lp-business" name="business" type="text" maxLength={80} placeholder="Mehra Interiors" />
        </div>
        <div>
          <label htmlFor="lp-city" className="block text-[13px] font-medium mb-1.5">
            City
          </label>
          <input id="lp-city" name="city" type="text" maxLength={60} autoComplete="address-level2" placeholder="Mumbai" />
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {/* Math captcha */}
        <div className="sm:col-span-2 grid sm:grid-cols-[1fr_auto] gap-3 items-end">
          <div>
            <label htmlFor="lp-cap" className="block text-[13px] font-medium mb-1.5">
              Quick check: what is{" "}
              {captcha ? (
                <span className="font-mono font-semibold text-ink">{captcha.question}</span>
              ) : (
                <span className="inline-flex items-center gap-1 text-muted">
                  <span className="inline-block h-3 w-3 rounded-full border-2 border-line border-t-accent animate-spin" />
                  loading…
                </span>
              )}
              ? <span className="text-accent">*</span>
            </label>
            <input
              id="lp-cap"
              name="captchaAnswer"
              type="text"
              inputMode="numeric"
              pattern="-?[0-9]+"
              required
              maxLength={6}
              autoComplete="off"
              placeholder={captcha ? "Type the answer" : "Loading verification…"}
              disabled={!captcha}
            />
          </div>
          <button
            type="button"
            onClick={loadCaptcha}
            className="btn-ghost h-[46px] !py-0"
            aria-label="Get a new question"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-3-6.7L21 8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            New question
          </button>
        </div>

        <div className="sm:col-span-2 flex items-start gap-3">
          <input
            id="lp-consent"
            name="consent"
            type="checkbox"
            required
            defaultChecked
            className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent/40"
          />
          <label htmlFor="lp-consent" className="text-[13px] text-muted leading-relaxed">
            I agree to be contacted by SPTech via WhatsApp, phone or email. We never share your details.
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting" || !captcha}
        className="btn-primary mt-6 w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting"
          ? "Sending…"
          : !captcha
          ? "Loading verification…"
          : "Get my ₹999 plan"}
        {status !== "submitting" && captcha && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <p className="mt-3 text-center text-[12px] text-muted">
        Or WhatsApp us directly at{" "}
        <a className="text-ink underline underline-offset-2" href="https://wa.me/917003391355">
          +91 70033 91355
        </a>
      </p>
    </form>
  );
}
