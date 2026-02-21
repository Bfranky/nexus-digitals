const reassurances = [
  "Free consultation",
  "No obligation quote",
  "Reply within 24 hours",
  "100% satisfaction guarantee",
];

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden text-center px-20 py-32
      bg-[linear-gradient(135deg,#112040_0%,#0e1e42_50%,#112040_100%)]
      border-t border-gold/20">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] rounded-full pointer-events-none
        bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_65%)]" />

      <div className="relative">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-7 h-px bg-gold" />
          <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
            Ready to Get Started?
          </span>
          <div className="w-7 h-px bg-gold" />
        </div>

        <h2 className="font-playfair font-bold leading-tight tracking-tight mb-6
          text-[clamp(2.4rem,5vw,4.4rem)]">
          Your Business Deserves a<br />
          Website That{" "}
          <em className="font-light not-italic text-gold">Works</em>
        </h2>

        <p className="text-white/70 text-base leading-relaxed max-w-[510px]
          mx-auto mb-12">
          Join 80+ business owners who trusted us to build their digital presence.
          Schedule a free 30-minute consultation — no pressure, no commitment required.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <a
            href="#contact"
            className="bg-gold text-navy text-sm font-semibold uppercase tracking-widest
              px-8 py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(201,168,76,0.35)]"
          >
            Start a Free Consultation →
          </a>
          <a
            href="#portfolio"
            className="border border-gold/20 text-white/70 text-sm uppercase
              tracking-widest px-8 py-3.5 rounded-sm hover:border-gold
              hover:text-gold transition-all duration-200"
          >
            View More Work
          </a>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {reassurances.map((r) => (
            <span key={r} className="text-white/50 text-[0.73rem] flex items-center gap-1.5">
              <span className="text-gold">✓</span> {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}