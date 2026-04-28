const steps = [
  {
    n: "01",
    t: "Free 15-minute call",
    d: "Tell us about your business, your customers and what's not working. We'll tell you honestly if a website is even the right fix.",
  },
  {
    n: "02",
    t: "Design draft in 48 hours",
    d: "We send a clickable design preview before you pay anything. You give feedback. We iterate until you genuinely love it.",
  },
  {
    n: "03",
    t: "Built & launched in 5–7 days",
    d: "We code, test, hook up domain & hosting, and launch your site. Speed, security and SEO basics are dialled in before go-live.",
  },
  {
    n: "04",
    t: "Ongoing care",
    d: "Edits, security updates, backups and monthly check-ins — all handled. WhatsApp us for changes; most go live the same day.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-brand text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="container relative">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            From "we need a website" to live, in under a week.
          </h2>
          <p className="mt-4 text-white/70 text-[16.5px] leading-relaxed">
            Our process is built to remove the two things that kill small
            business websites: long timelines and surprise costs.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[40px] font-bold leading-none text-accent">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <svg className="hidden lg:block opacity-40" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 font-display text-[19px] font-bold">{s.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                {s.d}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a href="#contact" className="btn-primary">
            Start with a free audit
          </a>
          <a href="#pricing" className="btn bg-white/10 text-white hover:bg-white/15 px-6 py-3.5 text-[15px] border border-white/15">
            Compare plans
          </a>
        </div>
      </div>
    </section>
  );
}
