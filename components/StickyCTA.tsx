"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-3 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex gap-2">
        <a href="#contact" className="btn-primary flex-1">
          Get free audit
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
