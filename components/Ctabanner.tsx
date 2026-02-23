const reassurances: string[] = [
  "Free consultation",
  "No obligation quote",
  "Reply within 24 hours",
  "100% satisfaction guarantee",
];

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden text-center
        px-4 sm:px-8 md:px-14 lg:px-20
        py-16 sm:py-20 lg:py-32
        bg-[linear-gradient(135deg,#112040_0%,#0e1e42_50%,#112040_100%)]
        border-t border-gold/20"
    >
      {/* Central glow — scaled down on mobile */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px]
          rounded-full pointer-events-none
          bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_65%)]"
      />

      <div className="relative">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-5 sm:w-7 h-px bg-gold flex-shrink-0" />
          <span className="text-gold text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] font-medium">
            Ready to Get Started?
          </span>
          <div className="w-5 sm:w-7 h-px bg-gold flex-shrink-0" />
        </div>

        {/* Headline */}
        <h2
          className="font-playfair font-bold leading-tight tracking-tight mb-5 sm:mb-6 text-white"
          style={{ fontSize: "clamp(1.9rem, 5vw, 4.4rem)" }}
        >
          Your Business Deserves a
          {/* On mobile the br looks bad — hide it and let text wrap naturally */}
          <br className="hidden sm:block" />{" "}
          Website That{" "}
          <em className="font-light not-italic text-gold">Works</em>
        </h2>

        {/* Body */}
        <p
          className="text-white/70 text-[0.88rem] sm:text-base leading-relaxed
            max-w-[90%] sm:max-w-[510px] mx-auto mb-8 sm:mb-12"
        >
          Join 80+ business owners who trusted us to build their digital presence.
          Schedule a free 30-minute consultation — no pressure, no commitment required.
        </p>

        {/* CTA buttons — full width on small mobile, auto on sm+ */}
        <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 flex-wrap mb-8 sm:mb-10">
          <a
            href="#contact"
            className="bg-gold text-navy text-[0.78rem] sm:text-sm font-semibold
              uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm
              hover:bg-gold-light transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(201,168,76,0.35)]"
          >
            Start a Free Consultation →
          </a>
          <a
            href="#portfolio"
            className="border border-gold/20 text-white/70
              text-[0.78rem] sm:text-sm uppercase tracking-widest
              px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm
              hover:border-gold hover:text-gold transition-all duration-200"
          >
            View More Work
          </a>
        </div>

        {/* Reassurance items — 2×2 on mobile, single row on md+ */}
        <div className="grid grid-cols-2 md:flex md:justify-center md:flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {reassurances.map((r) => (
            <span
              key={r}
              className="text-white/50 text-[0.68rem] sm:text-[0.73rem]
                flex items-center justify-center gap-1.5"
            >
              <span className="text-gold flex-shrink-0">✓</span>
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}