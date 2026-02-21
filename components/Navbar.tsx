"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Services",   href: "#value" },
  { label: "Portfolio",  href: "#portfolio" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing",    href: "#pricing" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        border-b border-gold/20 bg-navy/92 backdrop-blur-xl transition-all duration-300
        ${scrolled ? "px-20 py-4" : "px-20 py-5"}`}
    >
      {/* Logo */}
      <div className="flex flex-col gap-px">
        <span className="font-playfair text-xl font-bold tracking-wide">
          Nexus<span className="text-gold">Digital</span>
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.22em] text-gold opacity-65">
          Web Solutions Studio
        </span>
      </div>

      {/* Desktop links */}
      <div className="hidden lg:flex gap-10">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white/70 text-xs uppercase tracking-widest
              hover:text-white transition-colors duration-200 relative
              after:absolute after:bottom-[-3px] after:left-0 after:right-0
              after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100
              after:transition-transform after:duration-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="bg-gold text-navy text-xs font-semibold uppercase tracking-widest
          px-6 py-2.5 rounded-sm hover:bg-gold-light transition-all duration-200
          hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]"
      >
        Start a Project →
      </a>
    </nav>
  );
}