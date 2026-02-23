"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Industry {
  emoji: string;
  title: string;
  desc: string;
  features: string[];
  accent: string;
  glow: string;
}

const industries: Industry[] = [
  {
    emoji: "🍽️", title: "Restaurants & Food",
    desc: "Drive more reservations and online orders with menus, booking systems, and stunning food photography layouts.",
    features: ["Online reservation system","Digital menu with specials","Google Maps & directions","Event & private dining pages"],
    accent: "from-[rgba(220,80,20,0.12)] to-transparent",
    glow: "rgba(220,80,20,0.08)",
  },
  {
    emoji: "✂️", title: "Salons & Beauty",
    desc: "Keep your chair fully booked with 24/7 online scheduling, service menus, and a portfolio showcasing your artistry.",
    features: ["Online booking widget","Service & pricing menu","Before & after gallery","Staff profiles & specialties"],
    accent: "from-[rgba(180,80,220,0.12)] to-transparent",
    glow: "rgba(180,80,220,0.08)",
  },
  {
    emoji: "🛠️", title: "Contractors & Trades",
    desc: "Generate qualified leads around the clock with project galleries, quote request forms, and local area targeting.",
    features: ["Lead capture & quote forms","Project portfolio gallery","Service area coverage map","Verified reviews integration"],
    accent: "from-[rgba(20,160,100,0.12)] to-transparent",
    glow: "rgba(20,160,100,0.08)",
  },
  {
    emoji: "🛍️", title: "E-Commerce & Retail",
    desc: "Sell 24/7 with a professional storefront, secure checkout, and inventory management that scales with you.",
    features: ["Full product catalog","Secure payment processing","Inventory management","Mobile-optimized shopping"],
    accent: "from-[rgba(30,100,240,0.12)] to-transparent",
    glow: "rgba(30,100,240,0.08)",
  },
  {
    emoji: "🏥", title: "Healthcare & Wellness",
    desc: "Build patient trust and streamline appointments with professional medical and wellness practice websites.",
    features: ["Appointment scheduling","Provider profiles & bios","Insurance & services info","Patient resource section"],
    accent: "from-[rgba(20,160,200,0.12)] to-transparent",
    glow: "rgba(20,160,200,0.08)",
  },
  {
    emoji: "💼", title: "Professional Services",
    desc: "Establish authority and attract high-value clients with polished sites for legal, financial, and consulting businesses.",
    features: ["Team & credentials pages","Consultation booking","Case studies & results","Trust & credibility signals"],
    accent: "from-[rgba(201,168,76,0.14)] to-transparent",
    glow: "rgba(201,168,76,0.10)",
  },
];

export default function Industries() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="industries"
      className="relative overflow-hidden
        px-4 sm:px-8 md:px-14 lg:px-20
        py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, #080f1e 0%, #0b1628 30%, #0d1c38 70%, #0a1425 100%)",
      }}
    >
      {/* Gold radial glow — top centre, scaled down on mobile */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
          w-[320px] h-[200px] sm:w-[600px] sm:h-[350px] lg:w-[900px] lg:h-[500px]
          pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Top rule — inset matches padding */}
      <div
        className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 lg:left-20 lg:right-20 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)",
        }}
      />

      <div className="relative z-10">
        {/* Header — stacks on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end
          gap-5 lg:gap-12 mb-10 sm:mb-12 lg:mb-14">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-7 h-px bg-gold flex-shrink-0" />
              <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
                Industries We Serve
              </span>
            </div>
            <h2
              className="font-playfair font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
            >
              Built for Every{" "}
              <em className="not-italic font-light text-gold">Type of Business</em>
            </h2>
          </div>
          <p className="text-white/45 text-[0.88rem] sm:text-[0.93rem] leading-relaxed lg:max-w-[420px]">
            Every industry has unique requirements. We know yours — and build
            specifically for it.
          </p>
        </div>

        {/* Cards
            mobile  : 1 column
            md      : 2 columns
            lg      : 3 columns              */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5
            reveal ${inView ? "reveal-in" : ""}`}
        >
          {industries.map((ind) => (
            <IndustryCard key={ind.title} industry={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  const { emoji, title, desc, features, accent, glow } = industry;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-sm overflow-hidden cursor-default
        transition-all duration-300 border
        ${hovered
          ? "border-gold/30 -translate-y-1 sm:-translate-y-1.5 shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
          : "border-white/7"
        }`}
      style={{
        background: hovered ? "rgba(18,30,55,0.95)" : "rgba(13,22,42,0.7)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Per-industry colour bloom — top-left corner */}
      <div
        className={`absolute top-0 left-0 w-36 h-36 sm:w-40 sm:h-40 pointer-events-none
          transition-opacity duration-500 bg-gradient-to-br ${accent}
          ${hovered ? "opacity-100" : "opacity-50"}`}
      />

      {/* Gold shimmer — top edge on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "linear-gradient(90deg, transparent, #c9a84c 40%, #e8c96a 60%, transparent)",
        }}
      />

      {/* Gold left bar — slides up on hover */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gold
          transition-transform duration-500 origin-bottom
          ${hovered ? "scale-y-100" : "scale-y-0"}`}
      />

      {/* Card body */}
      <div className="relative z-10 p-6 sm:p-7 lg:p-8">

        {/* Emoji icon box */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm flex items-center
            justify-center text-2xl sm:text-3xl mb-5 sm:mb-6
            border border-white/8 transition-all duration-300"
          style={{
            background: hovered ? glow : "rgba(255,255,255,0.04)",
            boxShadow: hovered ? `0 0 24px ${glow}` : "none",
          }}
        >
          {emoji}
        </div>

        {/* Title */}
        <h3
          className="font-playfair text-[1rem] sm:text-[1.05rem] font-bold
            text-white mb-2 sm:mb-2.5
            group-hover:text-gold transition-colors duration-300"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-[0.8rem] sm:text-[0.82rem] leading-relaxed mb-4 sm:mb-5">
          {desc}
        </p>

        {/* Feature list */}
        <ul className="space-y-1.5 sm:space-y-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 sm:gap-2.5
                text-[0.73rem] sm:text-[0.77rem] text-white/50"
            >
              <span
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm
                  bg-gold/15 border border-gold/25
                  flex items-center justify-center flex-shrink-0"
              >
                <svg
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gold"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M1.5 5l2.5 2.5 4.5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}