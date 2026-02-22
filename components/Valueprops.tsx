"use client";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

const values = [
  { num: "01", icon: "⚡", title: "Fast Delivery",         desc: "Most projects go live within 7 business days. We move fast without cutting corners, so you start generating business sooner." },
  { num: "02", icon: "💎", title: "Affordable Pricing",    desc: "Premium-quality websites at prices built for small and growing businesses. Transparent quotes — no hidden fees, ever." },
  { num: "03", icon: "🎨", title: "Custom Design Quality", desc: "Every site is crafted from scratch for your brand. No templates — just original, professional design that sets you apart." },
  { num: "04", icon: "📈", title: "Business Growth",       desc: "We build with conversion in mind. Booking tools, lead forms, SEO — every element is engineered to grow your revenue." },
  { num: "05", icon: "📱", title: "Mobile-First",          desc: "Over 70% of your customers browse on mobile. Every site we deliver looks and performs flawlessly on all screen sizes." },
  { num: "06", icon: "🔍", title: "Local SEO Included",    desc: "Google-optimized from day one. We set up your local presence so customers in your area find your business first." },
  { num: "07", icon: "🔧", title: "Ongoing Support",       desc: "We don't disappear after launch. Updates, maintenance, and technical support are always available when you need us." },
  { num: "08", icon: "🤝", title: "True Partnership",      desc: "You get a real partner invested in your success — direct communication and full transparency on every project." },
];

export default function ValueProps() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="value"
      className="relative text-white px-4 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80"
        alt=""
        fill
        className="object-cover object-center"
        unoptimized
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      {/* Subtle gold glow top-left */}
      <div
        className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 0% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Header — stacks on mobile, side by side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 lg:items-end mb-10 sm:mb-12 lg:mb-14 gap-5">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-7 h-px bg-gold flex-shrink-0" />
              <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
                Why Choose Us
              </span>
            </div>
            <h2
              className="font-playfair font-bold leading-tight tracking-tight text-white"
              style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
            >
              Everything Your Business<br />
              Needs to{" "}
              <em className="not-italic font-light text-gold">Succeed Online</em>
            </h2>
          </div>
          <p className="text-white/60 text-[0.88rem] sm:text-[0.93rem] leading-relaxed lg:max-w-[490px]">
            We combine speed, affordability, and world-class design to deliver websites
            that don&apos;t just look great — they convert visitors into paying customers.
          </p>
        </div>

        {/* Card grid
            mobile  : 1 column
            sm      : 2 columns
            lg      : 4 columns                       */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6
            reveal ${inView ? "reveal-in" : ""}`}
        >
          {values.map((v) => (
            <ValueCard key={v.num} {...v} />
          ))}
        </div>

      </div>
    </section>
  );
}

interface ValueCardProps {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

function ValueCard({ num, icon, title, desc }: ValueCardProps) {
  return (
    <div
      className="group relative p-6 sm:p-7 lg:p-8 rounded-sm overflow-hidden
        transition-all duration-300
        bg-white/5 border border-white/10 backdrop-blur-sm
        hover:bg-white/10 hover:border-gold/40
        hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
    >
      {/* Gold bottom bar slides in on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gold w-0
          group-hover:w-full transition-all duration-500"
      />

      {/* Faint step number */}
      <span
        className="absolute top-4 right-4 sm:top-5 sm:right-5
          font-playfair text-[0.72rem] text-white/15 font-bold select-none"
      >
        {num}
      </span>

      {/* Icon box */}
      <div
        className="w-11 h-11 sm:w-12 sm:h-12 bg-white/8 border border-white/10
          rounded-sm flex items-center justify-center text-xl sm:text-2xl mb-5 sm:mb-6"
      >
        {icon}
      </div>

      <h3
        className="font-playfair text-[1rem] sm:text-[1.05rem] font-bold
          text-white mb-2 sm:mb-2.5"
      >
        {title}
      </h3>

      <p className="text-white/55 text-[0.8rem] sm:text-[0.83rem] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}