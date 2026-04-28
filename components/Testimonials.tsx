const testimonials = [
  {
    name: "Priya Shah",
    role: "Owner · Bloom Boutique, Ahmedabad",
    body:
      "We had three different web designers ghost us before SPTech. They delivered a beautiful site in 6 days flat — and answer WhatsApp in minutes when I need a change.",
    initials: "PS",
    color: "#1E5BFF",
  },
  {
    name: "Dr. Anand Iyer",
    role: "Iyer Dental Clinic, Bengaluru",
    body:
      "Online appointment bookings doubled in the second month. The ₹999/month plan pays for itself in a single new patient. Honestly best value we've found.",
    initials: "AI",
    color: "#0A1A4A",
  },
  {
    name: "Faisal Khan",
    role: "Co-founder · TrekRoute, Delhi",
    body:
      "We hired SPTech for a website and ended up doing our app with them too. Clean code, on time, and the team treats deadlines like deadlines.",
    initials: "FK",
    color: "#0E7C66",
  },
  {
    name: "Meera Nair",
    role: "Director · Coastal Logistics, Kochi",
    body:
      "The free audit alone saved us from paying another agency ₹85,000 for things we didn't need. We've been with SPTech for 7 months now.",
    initials: "MN",
    color: "#7C3AED",
  },
  {
    name: "Vikram Joshi",
    role: "Founder · Joshi & Sons Jewellers, Jaipur",
    body:
      "Three generations of business, and our website finally looks the part. Fast, mobile-first, and our walk-in customers actually mention it now.",
    initials: "VJ",
    color: "#0891B2",
  },
  {
    name: "Sneha Reddy",
    role: "Yoga Studio Owner, Hyderabad",
    body:
      "I'm not a tech person. SPTech made it dead simple — they call, ask the right questions, and the site just appears. Bookings have gone up since.",
    initials: "SR",
    color: "#BE185D",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-white border-y border-line">
      <div className="container">
        <div className="max-w-2xl">
          <p className="eyebrow">Customers</p>
          <h2 className="mt-3 font-display text-3xl md:text-[44px] leading-[1.1] font-bold tracking-tightest">
            200+ Indian businesses already chose us. Here's what they say.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card p-7 flex flex-col"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 9.2 8.6 2 9.3l5.5 4.8L5.8 22 12 18.3 18.2 22l-1.7-7.9L22 9.3l-7.2-.7Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/85">
                "{t.body}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-line">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-white text-[13px] font-bold"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold">{t.name}</p>
                  <p className="text-[12.5px] text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
