"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What's actually included in the ₹999/month plan?",
    a: "A custom-designed 5-page website, hosting, SSL certificate, domain setup, basic SEO, mobile responsiveness, contact form, WhatsApp button, Google Analytics, plus 2 minor edits every month. There is no setup fee.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "No. You pay month to month. Stop any time with 7 days' notice — we'll hand over your content and design files. We earn your renewal; we don't trap you in a contract.",
  },
  {
    q: "How long does it take to launch a website?",
    a: "5 to 7 working days for the Starter plan, once we have your content and approvals. Business plan sites typically take 10–14 days. Apps depend on scope — we share an honest timeline before you commit.",
  },
  {
    q: "Do you work with businesses outside Mumbai?",
    a: "Yes. We're based in Mumbai but serve clients across India — Delhi, Bengaluru, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Kochi and dozens of tier-2 cities. Everything is handled remotely; calls happen over WhatsApp or Google Meet.",
  },
  {
    q: "What if I don't have content or photos ready?",
    a: "We'll help. Our team can write your website copy, source licensed images, and even arrange basic on-site photography in Mumbai. For other cities we coordinate with local photographers when needed.",
  },
  {
    q: "How much does an app cost?",
    a: "It depends on what the app does. A simple iOS+Android app for a service business typically starts around ₹75,000. A multi-feature app with backend, payments and admin panel can range from ₹1.5L to ₹6L. We always quote a fixed price after a free scoping call.",
  },
  {
    q: "Is the free audit really free? What's the catch?",
    a: "It's genuinely free — no credit card, no obligation. We do it because around 1 in 4 audit clients eventually become paid customers, and the rest spread the word. We limit it to 10 audits a week so they're done properly.",
  },
  {
    q: "Do you handle SEO and Google Ads?",
    a: "Basic on-page SEO is included in every plan. Advanced SEO and paid ad management (Google + Meta) are available as add-ons. We'll only recommend paid ads if your website is ready to convert traffic — otherwise it's just expensive.",
  },
  {
    q: "What about payment? Do you accept UPI?",
    a: "Yes — UPI, NEFT, IMPS, all major debit/credit cards, and direct bank transfer. Proper invoices issued for every payment. We don't accept cash.",
  },
  {
    q: "Who owns the website after I cancel?",
    a: "You do. Content, design and copy are yours. We can hand over a complete export and help you migrate to another host — even if you're not staying with us.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.08] font-bold tracking-tightest">
              Questions, answered straight.
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Don't see your question here? WhatsApp us at{" "}
              <a
                href="https://wa.me/917003391355"
                className="text-ink underline underline-offset-2"
              >
                +91 70033 91355
              </a>{" "}
              — we usually reply within minutes.
            </p>
            <a href="#contact" className="btn-primary mt-7">
              Ask us anything
            </a>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[18px] md:text-[19px] font-semibold tracking-tightish text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`mt-1 shrink-0 grid place-items-center h-7 w-7 rounded-full border border-line transition-transform ${
                        isOpen ? "rotate-45 bg-ink text-white border-ink" : "text-ink"
                      }`}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] leading-relaxed text-muted pr-10">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
