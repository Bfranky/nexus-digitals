"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Testimonial {
  initials: string;
  quote: string;
  name: string;
  role: string;
  industry: string;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "MR",
    quote: "Online reservations doubled within the first month after launching. The site looks stunning and customers constantly compliment how easy it is to book.",
    name: "Maria Rodriguez",
    role: "Owner, La Cocina Restaurant",
    industry: "Restaurant",
    metric: "2× reservations",
  },
  {
    initials: "JT",
    quote: "I went from zero web presence to 15+ qualified leads every week. The ROI was immediate. Best investment I've made for my contracting business.",
    name: "James Turner",
    role: "Director, Turner Roofing Co.",
    industry: "Contractor",
    metric: "15+ leads / week",
  },
  {
    initials: "SL",
    quote: "The booking widget alone pays for the website every week. Clients book 24/7 without calling me. Revenue went up 40% in just three months.",
    name: "Sofia Lee",
    role: "Founder, Gloss Beauty Studio",
    industry: "Salon",
    metric: "+40% revenue",
  },
  {
    initials: "DA",
    quote: "Professional, fast, and genuinely invested in our success. They understood the medical industry immediately and delivered a site our patients love.",
    name: "Dr. David Alves",
    role: "Lead Physician, Alves Family Clinic",
    industry: "Healthcare",
    metric: "100% satisfied",
  },
  {
    initials: "PK",
    quote: "Our online store launched in under a week and the first weekend covered the entire project cost. Quality far beyond what we expected at this price.",
    name: "Priya Kapoor",
    role: "CEO, Silk & Stone Boutique",
    industry: "E-Commerce",
    metric: "ROI in 3 days",
  },
  {
    initials: "RC",
    quote: "Smooth, transparent process from start to finish. Delivered on time, under budget, and the site now ranks on the first page of Google for our area.",
    name: "Robert Chen",
    role: "Principal, Chen & Associates Law",
    industry: "Legal",
    metric: "Page 1 Google",
  },
];

export default function Testimonials() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="testimonials"
      className="relative px-4 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0e1c35 0%, #0b1628 25%, #0f1e3a 55%, #09121f 100%)",
      }}
    >
      {/* Gold orb — bottom right (smaller on mobile) */}
      <div
        className="absolute bottom-0 right-0 w-64 h-48 sm:w-[500px] sm:h-96 lg:w-[700px] lg:h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 100% 100%, rgba(201,168,76,0.1) 0%, transparent 65%)",
        }}
      />

      {/* Cool blue orb — top left */}
      <div
        className="absolute top-0 left-0 w-48 h-36 sm:w-[400px] sm:h-72 lg:w-[600px] lg:h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(30,80,160,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Thin top rule — inset matches padding */}
      <div
        className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 lg:left-20 lg:right-20 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent)",
        }}
      />

      <div className="relative z-10">
        {/* ── Header — stacks on mobile, side-by-side on lg ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center mb-10 sm:mb-12 lg:mb-16 gap-6">

          <div>
            {/* Giant decorative quote — smaller on mobile */}
            <div
              className="font-playfair leading-none mb-[-1.2rem] sm:mb-[-2rem]
                select-none pointer-events-none text-[5rem] sm:text-[7rem]"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &ldquo;
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-7 h-px bg-gold flex-shrink-0" />
              <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
                Client Results
              </span>
            </div>
            <h2
              className="font-playfair font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
            >
              What Business Owners{" "}
              <em className="not-italic font-light text-gold">Say About Us</em>
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <p className="text-white/50 text-[0.88rem] sm:text-[0.93rem] leading-relaxed max-w-[420px]">
              Real results from real business owners across every industry we serve.
            </p>

            {/* Trust summary bar */}
            <div
              className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 rounded-sm border border-gold/15"
              style={{ background: "rgba(201,168,76,0.06)" }}
            >
              <div className="text-center">
                <div className="font-playfair text-lg sm:text-xl font-bold text-white">4.9</div>
                <div className="text-white/40 text-[0.6rem] uppercase tracking-wider">Rating</div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/10" />
              <div className="flex gap-0.5">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-gold text-sm sm:text-base">{s}</span>
                ))}
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/10" />
              <div className="text-center">
                <div className="font-playfair text-lg sm:text-xl font-bold text-white">80+</div>
                <div className="text-white/40 text-[0.6rem] uppercase tracking-wider">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards
              mobile  : 1 column
              md      : 2 columns
              lg      : 3 columns                 ── */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5
            reveal ${inView ? "reveal-in" : ""}`}
        >
          {testimonials.map((t) => (
            <TestiCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestiCard({ testimonial }: { testimonial: Testimonial }) {
  const { initials, quote, name, role, industry, metric } = testimonial;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-sm overflow-hidden cursor-default
        transition-all duration-300 flex flex-col border
        ${hovered
          ? "border-gold/35 -translate-y-1 sm:-translate-y-2 shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
          : "border-white/7"
        }`}
      style={{
        background: hovered ? "rgba(18,30,58,0.95)" : "rgba(13,22,44,0.65)",
        backdropFilter: "blur(16px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top shimmer on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "linear-gradient(90deg, transparent, #c9a84c 35%, #e8c96a 65%, transparent)",
        }}
      />

      {/* Ambient glow on hover */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500
          ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative quote mark — hidden on very small screens to save space */}
      <div
        className="absolute -bottom-4 -right-2 font-playfair text-[7rem] sm:text-[9rem]
          leading-none select-none pointer-events-none transition-opacity duration-300
          hidden xs:block"
        style={{
          background: hovered
            ? "linear-gradient(135deg, rgba(201,168,76,0.12), transparent)"
            : "linear-gradient(135deg, rgba(201,168,76,0.05), transparent)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        &rdquo;
      </div>

      {/* Card content */}
      <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col flex-1 gap-3 sm:gap-4">

        {/* Stars + metric badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-0.5">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-gold text-sm">{s}</span>
            ))}
          </div>
          <span
            className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-wider
              px-2 sm:px-2.5 py-1 rounded-sm border font-semibold flex-shrink-0"
            style={{
              background: "rgba(201,168,76,0.1)",
              borderColor: "rgba(201,168,76,0.2)",
              color: "#c9a84c",
            }}
          >
            {metric}
          </span>
        </div>

        {/* Quote */}
        <blockquote className="text-white/65 text-[0.83rem] sm:text-[0.86rem] leading-[1.75] italic flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Divider */}
        <div
          className="h-px"
          style={{
            background: hovered
              ? "linear-gradient(90deg, rgba(201,168,76,0.25), rgba(255,255,255,0.05))"
              : "rgba(255,255,255,0.06)",
          }}
        />

        {/* Author row */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Avatar */}
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
              font-playfair text-[0.8rem] sm:text-[0.85rem] font-bold text-gold
              flex-shrink-0 border transition-all duration-300"
            style={{
              background: hovered ? "rgba(201,168,76,0.18)" : "rgba(201,168,76,0.08)",
              borderColor: hovered ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.15)",
            }}
          >
            {initials}
          </div>

          {/* Name & role */}
          <div className="min-w-0 flex-1">
            <div className="text-[0.82rem] sm:text-[0.85rem] font-semibold text-white truncate">
              {name}
            </div>
            <div className="text-white/40 text-[0.68rem] sm:text-[0.72rem] truncate">{role}</div>
          </div>

          {/* Industry pill — only on xl screens */}
          <span className="hidden xl:block ml-auto text-[0.6rem] uppercase tracking-wider
            text-white/30 border border-white/8 px-2 py-0.5 rounded-sm flex-shrink-0">
            {industry}
          </span>
        </div>
      </div>
    </div>
  );
}