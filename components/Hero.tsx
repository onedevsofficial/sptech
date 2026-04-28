export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute -top-44 -right-32 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #1E5BFF, transparent)" }}
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-40 h-[460px] w-[460px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #0A1A4A, transparent)" }}
        aria-hidden
      />

      <div className="container relative pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Copy column */}
          <div>
            <span className="pill animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Now booking April projects · Mumbai → All India
            </span>

            <h1 className="mt-6 font-display text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-tightest font-bold text-ink animate-fade-up">
              Websites that look premium,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">work hard</span>
                <span
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 sm:h-4 bg-accent/25"
                  aria-hidden
                />
              </span>{" "}
              and cost{" "}
              <span className="text-accent">just ₹999/month</span>.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] sm:text-[18.5px] leading-[1.6] text-muted animate-fade-up">
              SPTech designs and builds fully managed business websites and
              mobile apps for ambitious Indian brands. No upfront cost, no
              contracts, no surprises — just a polished site that brings you
              customers, backed by a team that actually picks up the phone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center animate-fade-up">
              <a href="#contact" className="btn-primary">
                Get my free website audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#pricing" className="btn-ghost">
                See what's included
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-muted animate-fade-up">
              {[
                "No commitment, cancel anytime",
                "7-day delivery on standard sites",
                "Hosting & SSL included",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4">
                    <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <HeroProof />
        </div>
      </div>
    </section>
  );
}

function HeroProof() {
  return (
    <div className="relative animate-fade-up">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Featured testimonial — navy, dominant */}
        <article className="col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden rounded-3xl bg-brand text-white p-6 sm:p-7 lg:p-8 shadow-card">
          <DotNetwork />
          <div className="relative h-full flex flex-col">
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 9.2 8.6 2 9.3l5.5 4.8L5.8 22 12 18.3 18.2 22l-1.7-7.9L22 9.3l-7.2-.7Z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-5 font-display text-[19px] sm:text-[20px] lg:text-[22px] leading-[1.32] font-semibold text-white">
              "Got our new site live in just 6 days. Three enquiries on the
              first weekend. Honestly didn't expect this at ₹999."
            </blockquote>

            <figcaption className="mt-auto pt-7 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-accent grid place-items-center font-display font-bold text-white">
                RM
              </div>
              <div>
                <p className="text-[14.5px] font-semibold leading-tight">
                  Ravi Mehra
                </p>
                <p className="text-[12.5px] text-white/65">
                  Owner · Mehra Interiors, Pune
                </p>
              </div>
            </figcaption>
          </div>
        </article>

        {/* Rating */}
        <article className="card p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Customer rating
          </p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-display text-[40px] sm:text-[44px] font-bold leading-none tracking-tightest text-ink">
              4.9
            </span>
            <span className="text-accent text-2xl leading-none">★</span>
          </div>
          <div className="mt-3 flex -space-x-1.5">
            {[
              { c: "P", bg: "#1E5BFF" },
              { c: "A", bg: "#0A1A4A" },
              { c: "M", bg: "#0E7C66" },
              { c: "S", bg: "#7C3AED" },
              { c: "+", bg: "#535B70" },
            ].map((p, i) => (
              <span
                key={i}
                className="h-7 w-7 rounded-full ring-2 ring-white grid place-items-center text-[10.5px] font-semibold text-white"
                style={{ background: p.bg }}
              >
                {p.c}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[12.5px] text-muted leading-snug">
            From 200+ Indian businesses
          </p>
        </article>

        {/* Performance */}
        <article className="card p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
            Avg. Lighthouse
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-12 w-12 grid place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E4E7EE" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="97.4"
                  strokeDashoffset="2"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <span className="font-display font-bold text-[15px] text-ink">98</span>
            </div>
            <div>
              <p className="font-display text-[22px] font-bold leading-none text-ink">
                Performance
              </p>
              <p className="text-[12px] text-emerald-600 font-semibold mt-1">
                Tuned for Core Web Vitals
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12.5px] text-muted leading-snug">
            Faster sites rank better &amp; convert more
          </p>
        </article>

        {/* Bottom strip */}
        <article className="col-span-2 card p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-500/15 grid place-items-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[13.5px] font-semibold leading-tight">
                Now booking April projects
              </p>
              <p className="text-[12px] text-muted">
                Avg. delivery: 6 days · cancel anytime
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-[13.5px] font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1"
          >
            Claim a spot
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </article>
      </div>
    </div>
  );
}

// Logo-inspired decorative network of dots — sits behind the testimonial card.
function DotNetwork() {
  const nodes: [number, number, number][] = [
    [40, 60, 2.5], [80, 80, 3], [130, 60, 2.5], [100, 130, 3],
    [60, 150, 2], [130, 150, 2.5], [160, 100, 2], [60, 30, 2],
    [100, 50, 2.2], [180, 140, 1.8], [30, 110, 2], [70, 170, 1.6],
    [150, 30, 1.8], [180, 60, 1.6],
  ];
  const edges = [
    "M40 60 L80 80", "M80 80 L130 60", "M80 80 L100 130", "M130 60 L160 100",
    "M100 130 L60 150", "M160 100 L130 150", "M130 150 L100 130", "M40 60 L60 30",
    "M60 30 L100 50", "M100 50 L130 60", "M150 30 L180 60", "M30 110 L60 150",
  ].join(" ");
  return (
    <svg
      className="absolute -bottom-10 -right-10 h-[300px] w-[300px] opacity-25 text-accent"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path d={edges} stroke="currentColor" strokeWidth="0.6" />
      {nodes.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />
      ))}
    </svg>
  );
}
