import Image from "next/image";

const stats = [
  { value: "80",  sup: "+", label: "Businesses launched across all industries" },
  { value: "7",   sup: "d", label: "Average delivery from brief to live site" },
  { value: "3",   sup: "x", label: "Average increase in lead generation" },
  { value: "100", sup: "%", label: "Client satisfaction on every project" },
];

const industries = [
  { label: "Restaurants",  gold: true  },
  { label: "Salons & Spas",gold: false },
  { label: "Contractors",  gold: false },
  { label: "E-Commerce",   gold: false },
  { label: "Healthcare",   gold: false },
  { label: "Finance",      gold: false },
  { label: "+ Many More",  gold: false },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen grid lg:grid-cols-2 items-center
      gap-16 px-20 pt-32 pb-20 overflow-hidden">

      {/* ── BACKGROUND LAYERS ── */}

      {/* 1. Real photo — city skyline at dusk, darkened */}
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
        alt=""
        fill
        className="object-cover object-center"
        priority
        unoptimized
      />

      {/* 2. Deep navy gradient overlay — left side fully opaque, right side lighter */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,14,28,0.97) 0%, rgba(10,18,36,0.93) 40%, rgba(11,22,40,0.78) 70%, rgba(11,22,40,0.55) 100%)",
        }}
      />

      {/* 3. Gold radial bloom — adds warmth to top-centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 55% 0%, rgba(201,168,76,0.13) 0%, transparent 65%)",
        }}
      />

      {/* 4. Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.35) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* 5. Bottom fade so it blends into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(11,22,40,0.95))",
        }}
      />

      {/* ── LEFT CONTENT ── */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up-1">
          <div className="w-8 h-px bg-gold flex-shrink-0" />
          <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
            Professional Web Development Studio
          </span>
        </div>

        <h1
          className="font-playfair font-black leading-[1.08] tracking-tight mb-7
            text-[clamp(2.8rem,5vw,4.8rem)] animate-fade-up-2 text-white"
        >
          Websites That{" "}
          <em className="text-gold not-italic font-light">Grow</em>
          <br />Your Business Revenue
        </h1>

        <p className="text-white/65 text-base leading-relaxed max-w-[460px]
          mb-10 animate-fade-up-3">
          From restaurants and salons to contractors, retail, healthcare, and beyond —
          we deliver custom, high-converting web solutions for every industry.
          Affordable. Fast. Results-driven.
        </p>

        <div className="flex gap-4 flex-wrap animate-fade-up-4">
          <a
            href="#portfolio"
            className="bg-gold text-navy text-sm font-semibold uppercase tracking-widest
              px-8 py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(201,168,76,0.4)]"
          >
            View Our Work →
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white/70 text-sm uppercase
              tracking-widest px-8 py-3.5 rounded-sm backdrop-blur-sm
              hover:border-gold hover:text-gold transition-all duration-200"
          >
            Get Free Quote
          </a>
        </div>

        {/* Social proof strip */}
        <div className="flex items-center gap-6 mt-12 animate-fade-up-4">
          <div className="flex -space-x-2">
            {["bg-amber-400","bg-blue-400","bg-emerald-400","bg-rose-400"].map((c, i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-navy/60 ${c} opacity-80`} />
            ))}
          </div>
          <p className="text-white/45 text-[0.78rem] leading-snug">
            Trusted by <span className="text-gold font-semibold">80+ business owners</span><br />
            across 12+ industries worldwide
          </p>
        </div>
      </div>

      {/* ── RIGHT — Stats Panel ── */}
      <div className="relative z-10 hidden lg:block animate-fade-up-4">
        <div
          className="relative rounded-sm p-10 overflow-hidden border border-white/10"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Top gold shimmer line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #c9a84c 40%, #e8c96a 60%, transparent 100%)",
            }}
          />

          {/* Corner glow */}
          <div
            className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            }}
          />

          <p className="text-[0.68rem] text-gold uppercase tracking-[0.2em] mb-8 relative z-10">
            — Our Track Record
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
            {stats.map((s) => (
              <div key={s.value} className="group">
                <div className="font-playfair text-[2.6rem] font-bold leading-none text-white
                  group-hover:text-gold transition-colors duration-300">
                  {s.value}
                  <sup className="text-base text-gold">{s.sup}</sup>
                </div>
                <p className="text-white/45 text-[0.76rem] mt-1.5 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className="h-px my-6 relative z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,168,76,0.3), rgba(255,255,255,0.06), rgba(201,168,76,0.1))",
            }}
          />

          <p className="text-[0.68rem] text-white/40 uppercase tracking-[0.16em] mb-3 relative z-10">
            Industries We Serve
          </p>
          <div className="flex flex-wrap gap-2 relative z-10">
            {industries.map((ind) => (
              <span
                key={ind.label}
                className={`text-[0.7rem] uppercase tracking-[0.07em] px-3 py-1
                  rounded-sm border transition-all duration-200 ${
                    ind.gold
                      ? "border-gold text-gold bg-gold/10"
                      : "border-white/10 text-white/55 hover:border-white/25 hover:text-white/80"
                  }`}
              >
                {ind.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}