const stats = [
  { kpi: "200+", label: "Businesses served" },
  { kpi: "4.9★", label: "Avg. client rating" },
  { kpi: "3 days", label: "Avg. launch time" },
  { kpi: "24 hrs", label: "Edit turnaround" },
];

const sectors = [
  "Real Estate",
  "Restaurants",
  "Clinics",
  "Boutiques",
  "Coaching",
  "Manufacturing",
  "Travel",
  "Salons",
  "Logistics",
  "Astrology",
  "Wedding Planners",
  "Interior Design",
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white/60">
      <div className="container py-8 md:py-10 grid gap-8 md:grid-cols-[1.1fr_1fr] items-center">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl md:text-[28px] font-bold tracking-tightish text-ink">
                {s.kpi}
              </dt>
              <dd className="text-[13px] text-muted mt-0.5">{s.label}</dd>
            </div>
          ))}
        </dl>

        <div className="overflow-hidden relative">
          <p className="text-[12px] uppercase tracking-[0.18em] text-muted mb-3">
            Trusted across industries
          </p>
          <div className="flex gap-2 animate-marquee whitespace-nowrap will-change-transform">
            {[...sectors, ...sectors].map((s, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-brand-50 text-brand text-[12.5px] font-medium border border-brand/10"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
