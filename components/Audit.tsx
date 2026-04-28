const audit = [
  "Page speed score (mobile + desktop)",
  "Core Web Vitals analysis",
  "On-page SEO audit (titles, meta, headings)",
  "Keyword gap vs. your top 3 competitors",
  "Mobile usability check",
  "Conversion-rate quick wins",
  "Security & SSL configuration",
  "Plain-English fix list, prioritised",
];

export default function Audit() {
  return (
    <section id="audit" className="section">
      <div className="container">
        <div className="card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="eyebrow">Free for everyone</p>
              <h2 className="mt-3 font-display text-3xl md:text-[40px] leading-[1.1] font-bold tracking-tightest">
                Get a no-strings website audit — worth ₹4,999, free.
              </h2>
              <p className="mt-4 text-muted text-[16px] leading-relaxed">
                Whether you work with us or not, you'll walk away with a
                concrete list of what to fix. We'll review your existing
                website and email you a personalised PDF report inside 48 hours.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-2.5 text-[14.5px]">
                {audit.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6">
                      <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-ink/85">{p}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary mt-9">
                Claim my free audit report
              </a>
              <p className="mt-3 text-[12.5px] text-muted">
                Limit: 10 free audits per week so we can do them properly.
              </p>
            </div>

            <div className="relative bg-brand text-white p-8 sm:p-12 lg:p-14 overflow-hidden">
              <div
                className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-30 blur-2xl"
                style={{ background: "radial-gradient(closest-side, #1E5BFF, transparent)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[11.5px] font-semibold tracking-wider uppercase">
                  Sample report preview
                </div>
                <div className="mt-6 rounded-xl bg-white text-ink p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold">yourbusiness.in</p>
                    <span className="text-[11px] text-muted">Audit · April 2025</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { label: "Performance", value: 62, color: "#DC2626" },
                      { label: "SEO", value: 71, color: "#F59E0B" },
                      { label: "Best practices", value: 88, color: "#16a34a" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-lg bg-bg p-3 text-center">
                        <div className="font-display text-2xl font-bold" style={{ color: m.color }}>
                          {m.value}
                        </div>
                        <div className="text-[11px] text-muted mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 text-[12.5px]">
                    {[
                      ["LCP too slow on mobile (4.1s)", "high"],
                      ["Missing meta descriptions on 6 pages", "high"],
                      ["Images not converted to WebP", "med"],
                      ["No schema markup detected", "med"],
                      ["Contact form has no spam protection", "low"],
                    ].map(([t, p]) => (
                      <div key={t} className="flex items-center justify-between gap-3 rounded-md bg-bg/60 px-3 py-2">
                        <span className="text-ink/80">{t}</span>
                        <span
                          className="text-[10.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          style={{
                            background: p === "high" ? "#FEE2E2" : p === "med" ? "#FEF3C7" : "#DCFCE7",
                            color: p === "high" ? "#991B1B" : p === "med" ? "#92400E" : "#166534",
                          }}
                        >
                          {p as string}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-[13px] text-white/70 leading-relaxed">
                  Real audits include 20–30 prioritised findings, screenshots,
                  competitor benchmarks, and the exact fixes — written in
                  plain English, not jargon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
