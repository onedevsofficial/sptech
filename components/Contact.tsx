"use client";

import { useEffect, useState } from "react";

type Captcha = { question: string; token: string };
type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
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
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      budget: String(fd.get("budget") || "").trim(),
      message: String(fd.get("message") || "").trim(),
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
      form.reset();
      loadCaptcha();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send.");
      loadCaptcha();
    }
  };

  return (
    <section id="contact" className="section bg-white border-t border-line">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <p className="eyebrow">Let's talk</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.08] font-bold tracking-tightest">
              Tell us about your business. We'll be in touch in under 4 hours.
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Free audit, free quote, free advice. Whether you're at "just thinking
              about it" or "need it live next week", we'll meet you where you are.
            </p>

            <ul className="mt-10 space-y-5 text-[15px]">
              <li className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand grid place-items-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted">Call / WhatsApp</p>
                  <a href="tel:+917003391355" className="text-[16px] font-semibold text-ink hover:text-accent">
                    +91 70033 91355
                  </a>
                  <p className="text-[13px] text-muted">Mon–Sat · 10am–8pm IST</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand grid place-items-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted">Email</p>
                  <a href="mailto:info@sptechweb.site" className="text-[16px] font-semibold text-ink hover:text-accent">
                    info@sptechweb.site
                  </a>
                  <p className="text-[13px] text-muted">We reply within 4 working hours</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand grid place-items-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted">Office</p>
                  <p className="text-[16px] font-semibold text-ink">Mumbai, Maharashtra</p>
                  <p className="text-[13px] text-muted">Serving businesses across India</p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/917003391355?text=Hi%20SPTech%2C%20I%27d%20like%20a%20free%20website%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-10 bg-[#25D366] hover:bg-[#1eb558] text-white px-6 py-3.5 text-[15px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6A11.94 11.94 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 22c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.94 9.94 0 0 1 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10Zm5.5-7.5c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-.9.9-.9 2.2.9 2.6 1.1 2.8c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate>
            <h3 className="font-display text-[22px] font-bold tracking-tightish">
              Request your free audit / quote
            </h3>
            <p className="mt-1 text-[14px] text-muted">
              No spam, ever. We use your details only to reply to you.
            </p>

            {status === "success" && (
              <div className="mt-5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-[14px] text-emerald-900">
                <strong>Thanks — we got it.</strong> A senior designer will reach out within 4 working hours. For urgent requests, WhatsApp us at +91 70033 91355.
              </div>
            )}

            {status === "error" && errorMsg && (
              <div className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[14px] text-red-900">
                {errorMsg}
              </div>
            )}

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium mb-1.5">
                  Your name <span className="text-accent">*</span>
                </label>
                <input id="name" name="name" type="text" required maxLength={80} autoComplete="name" placeholder="Ravi Mehra" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[13px] font-medium mb-1.5">
                  Phone / WhatsApp <span className="text-accent">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required maxLength={20} autoComplete="tel" placeholder="+91 98xxxxxxxx" pattern="^[0-9+()\-\s]{7,20}$" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-[13px] font-medium mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="you@business.com" />
              </div>
              <div>
                <label htmlFor="service" className="block text-[13px] font-medium mb-1.5">
                  I'm interested in
                </label>
                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="website-999">Website at ₹999/month</option>
                  <option value="business-web">Business website plan</option>
                  <option value="app">Mobile app development</option>
                  <option value="audit">Free website audit</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-[13px] font-medium mb-1.5">
                  Approx. budget
                </label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>Optional</option>
                  <option value="999">₹999/month plan</option>
                  <option value="2499">₹2,499/month plan</option>
                  <option value="50k-1L">₹50k–₹1L (one-time)</option>
                  <option value="1L-3L">₹1L–₹3L</option>
                  <option value="3L+">₹3L+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-[13px] font-medium mb-1.5">
                  Tell us a bit about your business
                </label>
                <textarea id="message" name="message" maxLength={1500} placeholder="What do you do, who's your customer, and what's not working with your current website?" />
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
                  <label htmlFor="captchaAnswer" className="block text-[13px] font-medium mb-1.5">
                    Quick check: what is{" "}
                    {captcha ? (
                      <span className="font-mono font-semibold text-ink">
                        {captcha.question}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted">
                        <span className="inline-block h-3 w-3 rounded-full border-2 border-line border-t-accent animate-spin" />
                        loading…
                      </span>
                    )}
                    ? <span className="text-accent">*</span>
                  </label>
                  <input
                    id="captchaAnswer"
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
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent/40"
                />
                <label htmlFor="consent" className="text-[13.5px] text-muted leading-relaxed">
                  I agree to be contacted by SPTech via phone, WhatsApp or email
                  about my enquiry. We never share your details.
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
                : "Send & get free audit"}
              {status !== "submitting" && captcha && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <p className="mt-3 text-center text-[12px] text-muted">
              Protected by math captcha and basic spam controls. Your data is
              transmitted over HTTPS.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
