import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="container py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-lg bg-white p-2.5">
              <Image
                src="/sptech.png"
                alt="SP Tech — Build, Grow, Succeed"
                width={920}
                height={345}
                sizes="160px"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/65 max-w-sm">
              Affordable, no-nonsense web design, development and app services
              for Indian businesses. Mumbai-based. Pan-India service.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://wa.me/917003391355"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 text-[13px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="tel:+917003391355"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 text-[13px]"
              >
                Call
              </a>
              <a
                href="mailto:info@sptechweb.site"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 text-[13px]"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">Services</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li><a href="#services" className="hover:text-white">Website design</a></li>
              <li><a href="#services" className="hover:text-white">Web development</a></li>
              <li><a href="#services" className="hover:text-white">App development</a></li>
              <li><a href="#audit" className="hover:text-white">Free website audit</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">Company</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li><a href="#process" className="hover:text-white">How it works</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/45">Reach us</p>
            <ul className="mt-4 space-y-2.5 text-[14.5px]">
              <li>
                <a href="tel:+917003391355" className="hover:text-white">+91 70033 91355</a>
              </li>
              <li>
                <a href="mailto:info@sptechweb.site" className="hover:text-white">info@sptechweb.site</a>
              </li>
              <li>Mumbai, Maharashtra, India</li>
              <li className="text-white/55">Mon–Sat · 10am–8pm IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/55">
            © {new Date().getFullYear()} SPTech. All rights reserved.
          </p>
          <p className="text-[13px] text-white/55">
            Built in Mumbai with care · Serving businesses across India
          </p>
        </div>
      </div>
    </footer>
  );
}
