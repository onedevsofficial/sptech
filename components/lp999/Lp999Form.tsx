"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { trackLead } from "@/components/MetaPixel";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "214b6fc4-44d0-481f-9e10-7b115b83063e";
const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

type Status = "idle" | "submitting" | "success" | "error";

export default function Lp999Form() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const startedAtRef = useRef<number>(Date.now());

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (String(fd.get("website") || "").length > 0) {
      // Honeypot tripped — pretend success and move on.
      setStatus("success");
      form.reset();
      return;
    }

    if (Date.now() - startedAtRef.current < 1000) {
      setStatus("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", `[LP-999] ${fd.get("name") || "Lead"} — sptechweb.site`);
    fd.append("from_name", "SPTech ₹999 Plan LP");
    fd.append("source", "999-website-plan landing page");
    fd.append("replyto", String(fd.get("email") || ""));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (data?.success) {
        setStatus("success");
        trackLead(999);
        form.reset();
        try {
          window.hcaptcha?.reset();
        } catch {
          /* ignore */
        }
      } else {
        setStatus("error");
        setErrorMsg(
          data?.message ||
            "Could not send right now. Please WhatsApp us at +91 70033 91355."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please WhatsApp us at +91 70033 91355."
      );
    }
  };

  return (
    <>
      <Script
        id="hcaptcha-api"
        src="https://js.hcaptcha.com/1/api.js"
        strategy="afterInteractive"
        async
        defer
      />

      <form onSubmit={onSubmit} className="card p-6 sm:p-8" noValidate>
        <h3 className="font-display text-[22px] sm:text-[24px] font-bold tracking-tightish">
          Claim your ₹999 plan
        </h3>
        <p className="mt-1 text-[14px] text-muted">
          Fill this in 30 seconds. We'll WhatsApp you within 4 hours with next steps.
        </p>

        {status === "success" && (
          <div className="mt-5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-[14px] text-emerald-900">
            <strong>Done — we got your details.</strong> Our senior designer will WhatsApp you on the number you shared. For anything urgent, message{" "}
            <a className="underline" href="https://wa.me/917003391355">
              +91 70033 91355
            </a>
            .
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

          {/* hCaptcha — auto-rendered after the api.js script loads */}
          <div className="sm:col-span-2 mt-1">
            <div className="h-captcha" data-sitekey={HCAPTCHA_SITE_KEY}></div>
          </div>

          <div className="sm:col-span-2 flex items-start gap-3">
            <input
              id="lp-consent"
              name="consent"
              type="checkbox"
              required
              defaultChecked
              value="Yes"
              className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent/40"
            />
            <label htmlFor="lp-consent" className="text-[13px] text-muted leading-relaxed">
              I agree to be contacted by SPTech via WhatsApp, phone or email. We never share your details.
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-6 w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Get my ₹999 plan"}
          {status !== "submitting" && (
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
    </>
  );
}
