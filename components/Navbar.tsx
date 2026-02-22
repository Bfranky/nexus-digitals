"use client";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Services",   href: "#value" },
  { label: "Portfolio",  href: "#portfolio" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing",    href: "#pricing" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when user clicks a link
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          border-b border-gold/20 bg-navy/95 backdrop-blur-xl
          transition-all duration-300
          px-4 sm:px-8 lg:px-20
          ${scrolled ? "py-3 lg:py-4" : "py-4 lg:py-5"}`}
      >
        {/* Logo */}
        <div className="flex flex-col gap-px">
          <span className="font-playfair text-lg sm:text-xl font-bold tracking-wide">
            Nexus<span className="text-gold">Digital</span>
          </span>
          <span className="text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.22em] text-gold opacity-65">
            Web Solutions Studio
          </span>
        </div>

        {/* Desktop nav links — hidden below lg */}
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

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA — hidden below lg */}
          <a
            href="#contact"
            className="hidden lg:block bg-gold text-navy text-xs font-semibold
              uppercase tracking-widest px-6 py-2.5 rounded-sm
              hover:bg-gold-light transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]"
          >
            Start a Project →
          </a>

          {/* Mobile CTA — visible on sm, hidden on lg+ */}
          <a
            href="#contact"
            className="lg:hidden bg-gold text-navy text-[0.65rem] font-bold
              uppercase tracking-wider px-3.5 py-2 rounded-sm
              hover:bg-gold-light transition-all duration-200"
          >
            Get Quote
          </a>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex flex-col justify-center items-center
              w-9 h-9 gap-[5px] rounded-sm border border-white/10
              hover:border-gold/30 transition-colors duration-200 flex-shrink-0"
          >
            <span
              className={`block w-4.5 h-px bg-white transition-all duration-300
                ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              style={{ width: "18px" }}
            />
            <span
              className={`block h-px bg-white transition-all duration-300
                ${menuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
              style={{ width: "14px" }}
            />
            <span
              className={`block h-px bg-white transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              style={{ width: "18px" }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm
            transition-opacity duration-300
            ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 sm:w-80
            bg-navy border-l border-gold/15 shadow-[0_0_60px_rgba(0,0,0,0.6)]
            flex flex-col transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ paddingTop: scrolled ? "60px" : "72px" }}
        >
          {/* Gold shimmer top */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
            }}
          />

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-6 pb-4 gap-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={handleLinkClick}
                className="flex items-center gap-3 px-4 py-3.5 rounded-sm
                  text-white/60 text-xs uppercase tracking-widest
                  hover:bg-white/5 hover:text-white
                  transition-all duration-200 group"
              >
                <span
                  className="w-4 h-px bg-gold/0 group-hover:bg-gold/60
                    transition-all duration-300 flex-shrink-0"
                />
                {label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-6 h-px bg-white/7" />

          {/* Mobile CTA full width */}
          <div className="px-6 pt-6">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full bg-gold text-navy text-xs font-bold
                uppercase tracking-widest text-center py-3.5 rounded-sm
                hover:bg-gold-light transition-all duration-200
                shadow-[0_8px_24px_rgba(201,168,76,0.25)]"
            >
              Start a Project →
            </a>
          </div>

          {/* Footer tagline */}
          <p className="px-6 mt-auto pb-8 text-white/25 text-[0.65rem] uppercase tracking-widest">
            NexusDigital · Web Solutions Studio
          </p>
        </div>
      </div>
    </>
  );
}