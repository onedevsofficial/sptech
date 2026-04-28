import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Lp999Form from "@/components/lp999/Lp999Form";
import MetaPixel from "@/components/MetaPixel";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sptechweb.site";

export const metadata: Metadata = {
  title: "Website at ₹999/month — Free Domain, Hosting & 24×7 Support · SPTech",
  description:
    "Get a fully managed business website for just ₹999/month. Unlimited pages, free domain, free hosting, 24×7 support. Live in 3 days. No commitment. Mumbai-based, serving all of India.",
  alternates: { canonical: "/999-website-plan" },
  keywords: [
    "₹999 website",
    "999 monthly website plan",
    "affordable website India",
    "small business website ₹999",
    "free domain free hosting website",
    "website with 24×7 support",
    "no contract website plan",
    "website design Mumbai ₹999",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/999-website-plan`,
    title: "Get a business website for ₹999/month — everything included",
    description:
      "Unlimited pages, free domain, free hosting, 24×7 support, Live in 3 days. No commitment. Built in Mumbai for businesses across India.",
    siteName: "SPTech",
    images: [
      {
        url: "/sptech.png",
        width: 1200,
        height: 630,
        alt: "SPTech ₹999/month website plan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website at ₹999/month — everything included · SPTech",
    description:
      "Unlimited pages · Free domain · Free hosting · 24×7 support. Live in 3 days. Cancel any time.",
    images: ["/sptech.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A1A4A",
  width: "device-width",
  initialScale: 1,
};

export default function Lp999Page() {
  return (
    <>
      <MetaPixel />
      <Lp999Header />
      <main>
        <Lp999Hero />
        <Lp999TrustStrip />
        <Lp999Includes />
        <Lp999Compare />
        <Lp999InlineCTA
          headline="Spots filling for April. Lock yours in 30 seconds."
          sub="Free 15-min discovery call · WhatsApp reply within minutes."
        />
        <Lp999Process />
        <Lp999Reviews />
        <Lp999FAQ />
        <Lp999FormSection />
      </main>
      <Lp999Footer />
      <Lp999StickyMobileCTA />
      <OfferJsonLd />
    </>
  );
}

/* ─────────────────────────  HEADER  ───────────────────────── */
function Lp999Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="container flex h-16 md:h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="SP Tech home">
          <Image
            src="/sptech.png"
            alt="SP Tech"
            width={920}
            height={345}
            priority
            sizes="(min-width: 768px) 132px, 116px"
            className="h-9 md:h-11 w-auto select-none"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+917003391355"
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-medium text-ink/75 hover:text-ink"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +91 70033 91355
          </a>
          <a
            href="#get-started"
            className="btn-primary !py-2.5 !px-4 sm:!px-5 text-[13.5px] sm:text-[14px]"
          >
            Get my plan
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────  HERO  ───────────────────────── */
function Lp999Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 grid-bg pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-40 -right-32 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #1E5BFF, transparent)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #0A1A4A, transparent)",
        }}
        aria-hidden
      />

      <div className="container relative pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="pill">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Limited spots · April 2025 · Mumbai → All India
            </span>

            <h1 className="mt-6 font-display text-[40px] sm:text-[54px] lg:text-[66px] leading-[1.02] tracking-tightest font-bold text-ink">
              A complete business website for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">just ₹999</span>
                <span
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 sm:h-4 bg-accent/15"
                  aria-hidden
                />
              </span>{" "}
              a month.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] sm:text-[18px] leading-[1.6] text-muted">
              Free domain. Free hosting.{" "}
              <strong className="text-ink">Unlimited pages</strong>. 24×7
              support. Live in 3 days. No commitment, cancel any month. Designed
              and built by humans in Mumbai — not templates with your logo on
              top.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="btn-primary">
                Get my ₹999 plan
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/917003391355?text=Hi%20SPTech%2C%20I%27d%20like%20the%20%E2%82%B9999%2Fmonth%20website%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] hover:bg-[#1eb558] text-white px-6 py-3.5 text-[15px]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6A11.94 11.94 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z" />
                </svg>
                WhatsApp us now
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-muted">
              {[
                "No setup fee",
                "No contract",
                "Free domain",
                "24×7 support",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.4"
                  >
                    <path
                      d="m5 12 5 5 9-11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Offer card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-brand text-white p-7 sm:p-9 shadow-card">
              <div
                className="absolute -top-24 -right-20 h-72 w-72 rounded-full opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, #1E5BFF, transparent)",
                }}
                aria-hidden
              />
              <div className="relative">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Single, simple plan
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-[68px] sm:text-[80px] font-bold leading-none tracking-tightest">
                    ₹999
                  </span>
                  <span className="text-white/70 text-[16px]">/ month</span>
                </div>
                <p className="mt-2 text-[13.5px] text-white/65">
                  Billed monthly · Pause or cancel anytime · No setup fee
                </p>

                <ul className="mt-7 space-y-2.5">
                  {[
                    "Unlimited pages, custom designed",
                    "Free domain (.in, .com, .co.in)",
                    "Free managed hosting + SSL",
                    "24×7 WhatsApp support",
                    "Same-day edits",
                    "Live in 3 days",
                  ].map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[15px]"
                    >
                      <svg
                        className="mt-1 shrink-0"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#86efac"
                        strokeWidth="2.6"
                      >
                        <path
                          d="m5 12 5 5 9-11"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#get-started"
                  className="btn mt-7 w-full bg-accent hover:bg-accent-hover text-white px-6 py-3.5 text-[15px] shadow-cta"
                >
                  Claim my spot
                </a>
              </div>
            </div>

            {/* Stamp */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rotate-[8deg]">
              <div className="rounded-full bg-white border-2 border-accent text-accent px-3 py-2 sm:px-4 sm:py-2.5 shadow-card">
                <p className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] leading-none">
                  Free domain
                  <br />+ hosting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  TRUST STRIP  ───────────────────────── */
function Lp999TrustStrip() {
  const stats = [
    { kpi: "200+", label: "Businesses live with SPTech" },
    { kpi: "4.9★", label: "Avg. rating across reviews" },
    { kpi: "7 days", label: "Avg. time to launch" },
    { kpi: "24×7", label: "Support, every day of the year" },
  ];
  return (
    <section className="border-y border-line bg-white">
      <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-2xl md:text-[28px] font-bold tracking-tightish text-ink">
              {s.kpi}
            </p>
            <p className="text-[13px] text-muted mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────  WHAT'S INCLUDED  ───────────────────────── */
function Lp999Includes() {
  const items: { title: string; body: string }[] = [
    {
      title: "Custom design from scratch",
      body: "Designed for YOUR brand — no recycled templates, no shortcuts.",
    },
    {
      title: "Unlimited pages",
      body: "5 pages, 25 pages, doesn't matter. As your business grows, your site grows.",
    },
    {
      title: "Free domain",
      body: "Pick a .in, .com, .co.in or .net. We register and configure DNS for you.",
    },
    {
      title: "Free managed hosting",
      body: "Fast, secure servers. Daily backups. Updated and patched by us.",
    },
    {
      title: "Free SSL certificate",
      body: "HTTPS green padlock. Required by Google for SEO and trust.",
    },
    {
      title: "Mobile-first responsive",
      body: "Looks perfect on every screen — phone, tablet, desktop.",
    },
    {
      title: "WhatsApp + contact form",
      body: "One-tap WhatsApp button, working contact form with spam protection.",
    },
    {
      title: "On-page SEO setup",
      body: "Titles, meta tags, schema, sitemap. The basics done right so Google can find you.",
    },
    {
      title: "Google Analytics + Search Console",
      body: "Track who visits, where they come from, what they click.",
    },
    {
      title: "24×7 support",
      body: "WhatsApp +91 70033 91355 anytime. Urgent issues handled within 30 minutes.",
    },
    {
      title: "Same-day edits",
      body: "Most content / image / pricing tweaks go live the same day you ask for them.",
    },
    {
      title: "7-day delivery",
      body: "Once we have your content and approvals, your site is live in a week.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">What's included</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Twelve things you'd normally pay extra for. All ₹999.
          </h2>
          <p className="mt-4 text-muted text-[16px] leading-relaxed">
            We bundled everything a small business website actually needs into
            one fair monthly price. No upsells, no add-ons, no surprises.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="card p-6">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-accent-soft text-accent grid place-items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path
                      d="m5 12 5 5 9-11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-[16.5px] font-bold tracking-tightish text-ink">
                    {it.title}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                    {it.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  COMPARISON  ───────────────────────── */
type CompareState = "good" | "warn" | "bad";
type CompareRow = { label: string; value: string; state: CompareState };
type CompareColumn = {
  name: string;
  sub: string;
  badge?: string;
  setup: string;
  monthly: string;
  monthlyNote: string;
  featured?: boolean;
  rows: CompareRow[];
  ctaHref?: string;
  ctaLabel?: string;
  // Tailwind order classes — SPTech first on mobile, middle on desktop
  orderClass: string;
};

function Lp999Compare() {
  const columns: CompareColumn[] = [
    {
      name: "SPTech ₹999/month",
      sub: "Fully managed, all bundled",
      badge: "Best for small business",
      setup: "₹0",
      monthly: "₹999",
      monthlyNote: "everything included",
      featured: true,
      ctaHref: "#get-started",
      ctaLabel: "Claim my plan",
      orderClass: "order-1 md:order-2",
      rows: [
        { label: "Custom design", state: "good", value: "Bespoke, by humans" },
        { label: "Page limit", state: "good", value: "Unlimited" },
        { label: "Free domain", state: "good", value: "Always free" },
        { label: "Free hosting", state: "good", value: "Free, managed" },
        { label: "24×7 support", state: "good", value: "WhatsApp anytime" },
        { label: "Time to launch", state: "good", value: "7 days" },
        { label: "Lock-in", state: "good", value: "None — cancel anytime" },
      ],
    },
    {
      name: "Doing it yourself",
      sub: "Wix · WordPress · builders",
      setup: "₹0",
      monthly: "₹500 – ₹1,500",
      monthlyNote: "tool fees, plugins, hosting",
      orderClass: "order-2 md:order-1",
      rows: [
        { label: "Custom design", state: "warn", value: "Templates only" },
        { label: "Page limit", state: "warn", value: "Tool-dependent" },
        { label: "Free domain", state: "bad", value: "You buy it" },
        { label: "Free hosting", state: "bad", value: "You pay separately" },
        { label: "24×7 support", state: "bad", value: "DIY troubleshooting" },
        { label: "Time to launch", state: "good", value: "1 – 3 days" },
        { label: "Lock-in", state: "good", value: "None" },
      ],
    },
    {
      name: "Traditional agency",
      sub: "One-time build + retainer",
      setup: "₹40,000 – ₹1L",
      monthly: "₹3,000 – ₹10,000",
      monthlyNote: "retainer, billed quarterly",
      orderClass: "order-3 md:order-3",
      rows: [
        { label: "Custom design", state: "good", value: "Bespoke" },
        { label: "Page limit", state: "warn", value: "Limited by quote" },
        { label: "Free domain", state: "warn", value: "Sometimes" },
        { label: "Free hosting", state: "bad", value: "Extra cost" },
        { label: "24×7 support", state: "bad", value: "Office hours only" },
        { label: "Time to launch", state: "warn", value: "30 – 60 days" },
        { label: "Lock-in", state: "bad", value: "6 – 12 month contracts" },
      ],
    },
  ];

  return (
    <section className="section bg-white border-y border-line">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">How we compare</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Cheaper than DIY. Faster than an agency.
          </h2>
          <p className="mt-4 text-muted text-[16px] leading-relaxed">
            Here's what ₹999/month actually gets you, side-by-side with the two
            routes most Indian businesses weigh up.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:items-stretch">
          {columns.map((col) => (
            <CompareCard key={col.name} col={col} />
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-muted">
          Prices reflect typical Indian market ranges as of 2025. Your mileage
          may vary.
        </p>
      </div>
    </section>
  );
}

function CompareCard({ col }: { col: CompareColumn }) {
  const featured = !!col.featured;
  const cardCls = featured
    ? "relative rounded-3xl bg-brand text-white p-6 sm:p-7 shadow-card md:scale-[1.02] md:-my-2 md:py-9 overflow-hidden"
    : "relative rounded-3xl bg-white border border-line p-6 sm:p-7 shadow-card";

  return (
    <article className={`${col.orderClass} flex flex-col ${cardCls}`}>
      {featured && (
        <div
          className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-30 blur-2xl pointer-events-none"
          style={{
            background: "radial-gradient(closest-side, #1E5BFF, transparent)",
          }}
          aria-hidden
        />
      )}

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className={`font-display text-[18px] sm:text-[19px] font-bold tracking-tightish ${featured ? "text-white" : "text-ink"}`}
            >
              {col.name}
            </h3>
            <p
              className={`mt-1 text-[13px] ${featured ? "text-white/65" : "text-muted"}`}
            >
              {col.sub}
            </p>
          </div>
          {col.badge && (
            <span className="shrink-0 inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white whitespace-nowrap">
              {col.badge}
            </span>
          )}
        </div>

        {/* Price block */}
        <div
          className={`mt-5 grid grid-cols-2 gap-3 rounded-2xl p-4 ${featured ? "bg-white/5 border border-white/10" : "bg-bg border border-line"}`}
        >
          <div>
            <p
              className={`text-[10.5px] uppercase tracking-[0.14em] ${featured ? "text-white/55" : "text-muted"}`}
            >
              Setup
            </p>
            <p
              className={`mt-1 font-display text-[20px] font-bold leading-none ${featured ? "text-white" : "text-ink"}`}
            >
              {col.setup}
            </p>
          </div>
          <div>
            <p
              className={`text-[10.5px] uppercase tracking-[0.14em] ${featured ? "text-white/55" : "text-muted"}`}
            >
              Monthly
            </p>
            <p
              className={`mt-1 font-display text-[20px] font-bold leading-none ${featured ? "text-white" : "text-ink"}`}
            >
              {col.monthly}
            </p>
            <p
              className={`text-[11px] mt-1 ${featured ? "text-white/55" : "text-muted"}`}
            >
              {col.monthlyNote}
            </p>
          </div>
        </div>

        {/* Feature list */}
        <ul className={`mt-6 space-y-3.5 ${featured ? "" : ""}`}>
          {col.rows.map((r) => (
            <li key={r.label} className="flex items-start gap-3">
              <StateIcon state={r.state} onDark={featured} />
              <div className="min-w-0 flex-1">
                <p
                  className={`text-[13px] uppercase tracking-[0.06em] ${featured ? "text-white/55" : "text-muted"}`}
                >
                  {r.label}
                </p>
                <p
                  className={`mt-0.5 text-[14.5px] leading-snug font-medium ${featured ? "text-white" : "text-ink"}`}
                >
                  {r.value}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {col.ctaHref && col.ctaLabel && (
          <a
            href={col.ctaHref}
            className="btn mt-7 w-full bg-accent hover:bg-accent-hover text-white px-6 py-3.5 text-[15px] shadow-cta"
          >
            {col.ctaLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

function StateIcon({
  state,
  onDark,
}: {
  state: CompareState;
  onDark: boolean;
}) {
  if (state === "good") {
    return (
      <span
        className={`mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 ${
          onDark
            ? "bg-emerald-400/20 text-emerald-300"
            : "bg-emerald-500/15 text-emerald-600"
        }`}
        aria-label="Yes"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            d="m5 12 5 5 9-11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (state === "warn") {
    return (
      <span
        className={`mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 ${
          onDark
            ? "bg-amber-400/20 text-amber-300"
            : "bg-amber-500/15 text-amber-600"
        }`}
        aria-label="Limited"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 12h14" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 ${
        onDark ? "bg-red-400/20 text-red-300" : "bg-red-500/15 text-red-600"
      }`}
      aria-label="No"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ─────────────────────────  INLINE CTA BAND  ───────────────────────── */
function Lp999InlineCTA({ headline, sub }: { headline: string; sub: string }) {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-8 sm:p-12 lg:p-14">
          <div
            className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #1E5BFF, transparent)",
            }}
            aria-hidden
          />
          <div className="relative grid sm:grid-cols-[1.6fr_auto] items-center gap-6">
            <div>
              <h3 className="font-display text-[26px] sm:text-[32px] leading-[1.1] font-bold tracking-tightest">
                {headline}
              </h3>
              <p className="mt-2 text-white/70 text-[15px]">{sub}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="btn-primary">
                Claim my plan
              </a>
              <a
                href="https://wa.me/917003391355"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white/10 hover:bg-white/15 text-white border border-white/15 px-6 py-3.5 text-[15px]"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  PROCESS  ───────────────────────── */
function Lp999Process() {
  const steps = [
    {
      n: "01",
      t: "15-min discovery call",
      d: "We learn about your business, customers and what's not working with your current site (if any).",
    },
    {
      n: "02",
      t: "Design preview in 48 hrs",
      d: "We send a clickable design before you pay anything. You give feedback. We iterate until you love it.",
    },
    {
      n: "03",
      t: "Built & launched in 7 days",
      d: "Domain, hosting, SSL, SEO basics, content, contact form — all set up. We handle every technical step.",
    },
    {
      n: "04",
      t: "Free 24×7 support after launch",
      d: "WhatsApp us anything — edits, urgent fixes, content updates. Most go live the same day.",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Four steps. Seven days. Live website.
          </h2>
        </div>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <li key={s.n} className="card p-6">
              <span className="font-display text-[40px] font-bold leading-none text-accent">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-[18px] font-bold tracking-tightish">
                {s.t}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────  REVIEWS  ───────────────────────── */
function Lp999Reviews() {
  const t = [
    {
      name: "Ravi Mehra",
      role: "Mehra Interiors · Pune",
      body: "Got our new site live in 6 days. Three enquiries on the first weekend. Honestly didn't expect this at ₹999.",
      initials: "RM",
      color: "#1E5BFF",
    },
    {
      name: "Priya Shah",
      role: "Bloom Boutique · Ahmedabad",
      body: "We had three different designers ghost us before SPTech. They delivered fast and reply on WhatsApp in minutes when I need a change.",
      initials: "PS",
      color: "#0A1A4A",
    },
    {
      name: "Dr. Anand Iyer",
      role: "Iyer Dental Clinic · Bengaluru",
      body: "Online appointment bookings doubled in the second month. The ₹999/month plan pays for itself in a single new patient.",
      initials: "AI",
      color: "#0E7C66",
    },
  ];
  return (
    <section className="section bg-white border-y border-line">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">From real customers</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            Indian businesses already running on ₹999.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {t.map((c) => (
            <figure key={c.name} className="card p-7 flex flex-col">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2 9.2 8.6 2 9.3l5.5 4.8L5.8 22 12 18.3 18.2 22l-1.7-7.9L22 9.3l-7.2-.7Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/85">
                "{c.body}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-line">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-white text-[13px] font-bold"
                  style={{ background: c.color }}
                >
                  {c.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold">{c.name}</p>
                  <p className="text-[12.5px] text-muted">{c.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FAQ  ───────────────────────── */
function Lp999FAQ() {
  const faqs: { q: string; a: string }[] = [
    {
      q: "What does ₹999 actually cover?",
      a: "Everything listed above — custom design, unlimited pages, free domain, free managed hosting, free SSL, mobile-responsive build, on-page SEO, contact form, WhatsApp button, Google Analytics, same-day edits and 24×7 support. There is no setup fee and no surprise charges.",
    },
    {
      q: "Is it really unlimited pages?",
      a: "Yes. We've built 30+ page websites for clients on this plan. Add new service pages, a blog, a portfolio — whatever your business needs, we'll keep building. No upsells.",
    },
    {
      q: "Which domains are free?",
      a: "Any standard .in, .com, .co.in, .net or .org domain. We register and configure DNS on your behalf. Free for the first year; renewable at the standard registrar cost (~₹600–₹900/year). Once you stop renewing, the domain is yours to take elsewhere — we never hold it hostage.",
    },
    {
      q: "What about hosting after the first year?",
      a: "Hosting is free for the entire time you're on the ₹999/month plan — year 1, year 2, year 5. The moment you stop your subscription, hosting stops. Resume any time and we'll bring the site back online.",
    },
    {
      q: "How does 24×7 support actually work?",
      a: "WhatsApp +91 70033 91355 — day or night. Urgent issues (site down, payment broken, content emergency) are handled within 30 minutes. Non-urgent edits go live within 24 hours, usually the same day.",
    },
    {
      q: "Can I cancel any time?",
      a: "Yes. No contract, no notice period, no termination fee. Cancel via WhatsApp; we'll hand over your content and migrate the domain to your registrar of choice if you want to leave.",
    },
    {
      q: "What if my site needs custom features (online ordering, bookings, payments)?",
      a: "Most lead-gen and informational features are included. Heavy custom development — booking systems, payment gateways, multi-vendor portals — may need a one-time scoping fee. We always quote upfront before any extra charge.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.08] font-bold tracking-tightest">
              Honest answers, not fine print.
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Don't see your question? WhatsApp us at{" "}
              <a
                className="text-ink underline underline-offset-2"
                href="https://wa.me/917003391355"
              >
                +91 70033 91355
              </a>{" "}
              — we usually reply within minutes.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex w-full items-start justify-between gap-6 text-left cursor-pointer list-none">
                  <span className="font-display text-[17.5px] md:text-[18.5px] font-semibold tracking-tightish text-ink">
                    {f.q}
                  </span>
                  <span className="mt-1 shrink-0 grid place-items-center h-7 w-7 rounded-full border border-line text-ink group-open:rotate-45 group-open:bg-ink group-open:text-white group-open:border-ink transition-transform">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted pr-10">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FORM SECTION  ───────────────────────── */
function Lp999FormSection() {
  return (
    <section id="get-started" className="section bg-white border-t border-line">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
          <div>
            <p className="eyebrow">Lock your spot</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.08] font-bold tracking-tightest">
              Ready in 30 seconds. Live in 3 days.
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Drop your details — a senior designer will WhatsApp you within 4
              hours. No obligation, no payment until you're happy with the
              design preview.
            </p>

            <ul className="mt-8 space-y-4 text-[15px]">
              {[
                [
                  "Free 15-min discovery call",
                  "We learn about your business, no pitch.",
                ],
                [
                  "Design preview in 48 hours",
                  "Clickable preview before any payment.",
                ],
                ["Cancel any time", "No contract, no notice period."],
              ].map(([t, b]) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-emerald-500/15 grid place-items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.5"
                    >
                      <path
                        d="m5 12 5 5 9-11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{t}</p>
                    <p className="text-[13.5px] text-muted">{b}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-bg border border-line p-5">
              <p className="text-[12px] uppercase tracking-widest text-muted">
                Prefer WhatsApp?
              </p>
              <a
                href="https://wa.me/917003391355?text=Hi%20SPTech%2C%20I%27d%20like%20the%20%E2%82%B9999%2Fmonth%20website%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 font-display text-[20px] font-bold text-ink hover:text-accent"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6A11.94 11.94 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z" />
                </svg>
                +91 70033 91355
              </a>
              <p className="text-[13px] text-muted mt-1">
                Mon–Sun · replies usually within minutes
              </p>
            </div>
          </div>

          <Lp999Form />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FOOTER  ───────────────────────── */
function Lp999Footer() {
  return (
    <footer className="bg-ink text-white/80 py-10 md:py-14">
      <div className="container grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] items-start">
        <div>
          <div className="inline-block rounded-lg bg-white p-2.5">
            <Image
              src="/sptech.png"
              alt="SP Tech"
              width={920}
              height={345}
              sizes="160px"
              className="h-9 w-auto"
            />
          </div>
          <p className="mt-4 text-[13.5px] leading-relaxed text-white/60 max-w-sm">
            Affordable, no-nonsense web design and development for Indian
            businesses. Mumbai-based, serving customers pan-India.
          </p>
        </div>
        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">
            Reach us
          </p>
          <ul className="mt-3 space-y-1.5 text-[14px]">
            <li>
              <a href="tel:+917003391355" className="hover:text-white">
                +91 70033 91355
              </a>
            </li>
            <li>
              <a href="mailto:info@sptechweb.site" className="hover:text-white">
                info@sptechweb.site
              </a>
            </li>
            <li>Mumbai, Maharashtra, India</li>
          </ul>
        </div>
        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">
            Site
          </p>
          <ul className="mt-3 space-y-1.5 text-[14px]">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#audit" className="hover:text-white">
                Free audit
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[13px] text-white/55">
        <p>© {new Date().getFullYear()} SPTech. All rights reserved.</p>
        <p>Built in Mumbai · Serving businesses across India</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────  MOBILE STICKY  ───────────────────────── */
function Lp999StickyMobileCTA() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-3 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent">
      <div className="flex gap-2">
        <a href="#get-started" className="btn-primary flex-1">
          Get my ₹999 plan
        </a>
        <a
          href="https://wa.me/917003391355"
          target="_blank"
          rel="noopener noreferrer"
          className="btn shrink-0 bg-[#25D366] text-white px-4 py-3.5 rounded-full"
          aria-label="WhatsApp us"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5A11.94 11.94 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6A11.94 11.94 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────  STRUCTURED DATA  ───────────────────────── */
function OfferJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SPTech ₹999/month Website Plan",
    description:
      "Fully managed business website for ₹999/month. Unlimited pages, free domain, free managed hosting + SSL, 24×7 support, same-day edits. No setup fee, no contract.",
    brand: { "@type": "Organization", name: "SPTech" },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/999-website-plan`,
      priceCurrency: "INR",
      price: "999",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "999",
        priceCurrency: "INR",
        unitCode: "MON",
      },
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "212",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
