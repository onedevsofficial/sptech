import Image from "next/image";

const reasons = [
  {
    title: "Real designers, not templates",
    body:
      "Every site is designed from scratch by humans who care about your brand — no recycled themes, no Canva exports.",
    iconPath: "M12 19l7-7 3 3-7 7-3-3Zm-9-9 7-7 3 3-7 7-3-3Z",
  },
  {
    title: "Fully managed, end-to-end",
    body:
      "Domain, hosting, SSL, backups, edits, security updates — all handled. You focus on running your business.",
    iconPath:
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  },
  {
    title: "No commitment, ever",
    body:
      "Pay month to month. Stop whenever. Take your content with you. We earn your renewal — we don't trap you in a contract.",
    iconPath: "M3 7h18M3 12h18M3 17h12",
  },
  {
    title: "Built for Indian businesses",
    body:
      "WhatsApp-first contact, INR pricing, regional language support if you need it — and a team that understands the Indian market.",
    iconPath: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0v20M2 12h20",
  },
  {
    title: "Speed-tuned for Google",
    body:
      "Core Web Vitals taken seriously. Fast sites rank better, convert better and feel more trustworthy to your visitors.",
    iconPath: "m13 2-3 14h6l-3 6 9-12h-6l3-8Z",
  },
  {
    title: "Support that actually responds",
    body:
      "WhatsApp, email or call — get a real human inside 4 hours on weekdays. Most edits are live the same day.",
    iconPath:
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z",
  },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1.05fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Why SPTech</p>
            <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.08] font-bold tracking-tightest">
              We're the partner agencies pretend to be — without the agency price tag.
            </h2>
            <p className="mt-4 text-muted text-[16.5px] leading-relaxed">
              For 99% of small businesses in India, a ₹50,000 website built in
              60 days is overkill. What you actually need is a site that's
              live next week, looks credible, ranks on Google, and gets fixed
              when something breaks. That's what we built SPTech to do.
            </p>

            <div className="relative mt-8 aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="SPTech team collaborating on a client project"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-15"
                style={{ background: "#0A1A4A" }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent">
                <p className="text-white text-[13.5px] font-medium">
                  A small senior team in Mumbai · No juniors, no outsourcing
                </p>
              </div>
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Book a 15-min discovery call
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="h-10 w-10 rounded-lg bg-accent-soft text-accent grid place-items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={r.iconPath} />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold tracking-tightish">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
