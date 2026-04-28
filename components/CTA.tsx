export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-10 sm:p-16 lg:p-20">
          <div
            className="absolute -top-32 -right-32 h-[440px] w-[440px] rounded-full opacity-35 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #1E5BFF, transparent)" }}
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-32 h-[440px] w-[440px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, #1747D6, transparent)" }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-[48px] lg:text-[56px] leading-[1.05] font-bold tracking-tightest">
              Your business deserves a website that earns its keep.
            </h2>
            <p className="mt-5 text-white/75 text-[16.5px] leading-relaxed max-w-2xl">
              Start with the free audit. Decide later whether to work with us.
              The only thing you lose is a bad website.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a href="#contact" className="btn-primary">
                Claim my free audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="tel:+917003391355"
                className="btn bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 text-[15px] border border-white/15"
              >
                Or call +91 70033 91355
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
