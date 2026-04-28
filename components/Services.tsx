const services = [
  {
    tag: "₹999/month",
    title: "Website Design & Development",
    body: "A custom-designed business website built for conversions — not a template with your logo slapped on. Free domain, free hosting, unlimited pages and 24×7 support included.",
    points: [
      "Unlimited pages, fully bespoke design",
      "Free domain + free hosting",
      "Mobile-first, speed-tuned for Google",
      "24×7 WhatsApp support, same-day edits",
    ],
    cta: "View ₹999 plan details",
    href: "/999-website-plan",
    iconPath:
      "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 14h18M9 17v4M15 17v4",
  },
  {
    tag: "Custom quote",
    title: "Mobile App Development",
    body: "Native-feel apps for iOS and Android — clean UX, secure backend, Play Store / App Store launch handled. We scope to your project size, no bloated retainers.",
    points: [
      "iOS + Android from a single codebase",
      "Secure backend & admin panel",
      "Store submission & launch support",
      "Maintenance plans available",
    ],
    cta: "Request a quote",
    href: "#contact",
    iconPath:
      "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 17h.01",
  },
  {
    tag: "Free for everyone",
    title: "Website Audit Report",
    body: "A genuine human-led review of your existing site — speed, SEO, design and conversion gaps — with a clear plan you can act on (with us, or without).",
    points: [
      "PageSpeed & Core Web Vitals",
      "On-page SEO + keyword gap check",
      "UX & conversion review",
      "PDF report within 48 hours",
    ],
    cta: "Get my free audit",
    href: "#audit",
    iconPath:
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6M9 13l2 2 4-4",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Three services. One promise — your business looks the part online.
          </h2>
          <p className="mt-4 text-muted text-[16.5px] leading-relaxed">
            We focus on the things that move the needle for small and mid-sized
            businesses in India: a website that earns trust, an app that earns
            its keep, and an audit that earns you back lost customers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="card p-7 flex flex-col group hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-brand text-white grid place-items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.iconPath} />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold tracking-wide text-accent bg-accent-soft px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[22px] font-bold tracking-tightish">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                {s.body}
              </p>

              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14px]">
                    <svg
                      className="mt-1 shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.6"
                    >
                      <path
                        d="m5 12 5 5 9-11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-ink/85">{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={s.href}
                className="mt-7 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink group-hover:text-accent transition-colors"
              >
                {s.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
