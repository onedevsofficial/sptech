"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "How it works" },
  { href: "#audit", label: "Free Audit" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(10,26,74,0.06),0_8px_24px_-12px_rgba(10,26,74,0.12)]"
          : "border-b border-line"
      }`}
    >
      <div className="container flex h-16 md:h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="SP Tech — Build, Grow, Succeed"
        >
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

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink/75 hover:text-ink hover:bg-bg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917003391355"
            className="hidden lg:inline-flex items-center gap-1.5 text-[14px] font-medium text-ink/75 hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            +91 70033 91355
          </a>
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-[14px]">
            Get Free Audit
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-ink/85 hover:bg-bg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+917003391355"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] text-ink/85 hover:bg-bg"
            >
              Call +91 70033 91355
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
