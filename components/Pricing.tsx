const starter = [
  "Up to 5 fully designed pages",
  "Mobile-first responsive design",
  "Hosting, SSL & domain assistance",
  "WhatsApp + contact form integration",
  "Basic on-page SEO setup",
  "Google Analytics & Search Console",
  "2 minor edits every month",
  "Email & WhatsApp support (10am–8pm)",
];

const business = [
  "Everything in Starter, plus:",
  "Up to 12 pages + blog/CMS",
  "Advanced SEO + schema markup",
  "Lead capture & WhatsApp automations",
  "Speed-tuned for Core Web Vitals",
  "Unlimited minor edits",
  "Monthly performance report",
  "Priority support — 4 hr response",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white border-y border-line">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Honest pricing. No lock-in. Cancel any month.
          </h2>
          <p className="mt-4 text-muted text-[16.5px] leading-relaxed">
            Start with a website that does the work of a full-time employee —
            without the salary. Upgrade or pause whenever you like.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="card p-8 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-bold">Starter Web</h3>
              <span className="pill !bg-brand-50 !text-brand !border-brand/10">
                Most popular
              </span>
            </div>
            <p className="mt-2 text-[14.5px] text-muted">
              For local businesses and first-time websites.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[44px] font-bold tracking-tightest">
                ₹999
              </span>
              <span className="text-muted text-[14px]">/ month</span>
            </div>
            <p className="text-[12.5px] text-muted">
              Billed monthly · No setup fee
            </p>

            <ul className="mt-6 space-y-2.5 text-[14.5px]">
              {starter.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6">
                    <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-ink/85">{p}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-8 w-full">
              Start at ₹999/month
            </a>
            <p className="mt-3 text-center text-[12px] text-muted">
              No credit card needed for the audit
            </p>
          </div>

          {/* Business — featured */}
          <div className="relative rounded-2xl bg-brand text-white p-8 flex flex-col shadow-card overflow-hidden">
            <div
              className="absolute -top-20 -right-16 h-64 w-64 rounded-full opacity-25 blur-2xl"
              style={{ background: "radial-gradient(closest-side, #1E5BFF, transparent)" }}
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold">Business Web</h3>
                <span className="text-[12px] font-semibold tracking-wide bg-accent text-white px-2.5 py-1 rounded-full">
                  Best value
                </span>
              </div>
              <p className="mt-2 text-[14.5px] text-white/70">
                For brands ready to scale online.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[44px] font-bold tracking-tightest">
                  ₹2,499
                </span>
                <span className="text-white/60 text-[14px]">/ month</span>
              </div>
              <p className="text-[12.5px] text-white/60">
                Billed monthly · No setup fee
              </p>

              <ul className="mt-6 space-y-2.5 text-[14.5px]">
                {business.map((p, i) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2.6">
                      <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={i === 0 ? "text-white" : "text-white/85"}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn mt-8 w-full bg-accent hover:bg-accent-hover text-white px-6 py-3.5 text-[15px] shadow-cta"
              >
                Talk to us
              </a>
              <p className="mt-3 text-center text-[12px] text-white/60">
                Free migration if you're switching from another provider
              </p>
            </div>
          </div>

          {/* App */}
          <div className="card p-8 flex flex-col">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-bold">App Development</h3>
              <span className="pill">Custom quote</span>
            </div>
            <p className="mt-2 text-[14.5px] text-muted">
              For ambitious products that need more than a website.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[44px] font-bold tracking-tightest">
                Let's talk
              </span>
            </div>
            <p className="text-[12.5px] text-muted">
              Priced by scope · Fixed-bid available
            </p>

            <ul className="mt-6 space-y-2.5 text-[14.5px]">
              {[
                "iOS + Android (cross-platform or native)",
                "UI/UX design from scratch",
                "Secure backend & admin dashboard",
                "Push notifications & analytics",
                "Play Store + App Store deployment",
                "Maintenance & feature retainers",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6">
                    <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-ink/85">{p}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-secondary mt-8 w-full">
              Request a quote
            </a>
            <p className="mt-3 text-center text-[12px] text-muted">
              Average response time: under 4 hours
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[13.5px] text-muted">
          Not sure which plan fits? Start with the{" "}
          <a href="#audit" className="text-ink underline underline-offset-2">
            free website audit
          </a>{" "}
          — we'll recommend the right one for your business.
        </p>
      </div>
    </section>
  );
}
