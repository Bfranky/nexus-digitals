"use client";
import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

interface Plan {
  tier: string;
  title: string;
  featured: boolean;
  badge?: string;
  desc: string;
  price: number | null;
  priceDisplay: string;
  sub: string;
  note: string;
  cta: string;
  features: string[];
}

const plans: Plan[] = [
  {
    tier: "Starter",
    title: "Essential Presence",
    featured: false,
    desc: "Perfect for new businesses that need a professional online presence up and running fast.",
    price: 50000,
    priceDisplay: "₦50,000",
    sub: "one-time",
    note: "+ optional ₦15,000/mo hosting & support",
    cta: "Get Started →",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Google Maps embed",
      "Basic SEO setup",
      "Delivered in 5–7 days",
    ],
  },
  {
    tier: "Growth",
    title: "Business Accelerator",
    featured: true,
    badge: "Most Popular",
    desc: "The complete package for businesses serious about generating leads and growing revenue online.",
    price: 300000,
    priceDisplay: "₦300,000",
    sub: "one-time",
    note: "+ optional ₦25,000/mo hosting, support & updates",
    cta: "Get Started →",
    features: [
      "Up to 10 custom pages",
      "Booking or lead capture system",
      "Photo/video gallery section",
      "Advanced local SEO setup",
      "Google Analytics & Search Console",
      "Reviews integration",
      "2 rounds of revisions included",
      "Delivered in 7 days",
    ],
  },
  {
    tier: "Enterprise",
    title: "Full Digital Solution",
    featured: false,
    desc: "For businesses needing a powerful custom platform — e-commerce, booking engines, or complex functionality.",
    price: null,
    priceDisplay: "Custom",
    sub: "quote",
    note: "Based on scope & requirements",
    cta: "Request a Quote →",
    features: [
      "Unlimited pages & sections",
      "E-commerce / full online store",
      "Custom booking engine",
      "Third-party integrations",
      "Advanced analytics & reporting",
      "Priority support & SLA agreement",
      "Dedicated project manager",
    ],
  },
];

/* ── Animated counter hook ── */
function useCountUp(
  target: number | null,
  duration: number,
  trigger: boolean
): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger || target === null) return;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target!));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target, duration]);

  return count;
}

function formatNaira(n: number): string {
  return "₦" + n.toLocaleString("en-NG");
}

export default function Pricing() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden
        px-4 sm:px-8 md:px-14 lg:px-20
        py-16 sm:py-20 lg:py-24"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1800&q=80"
        alt=""
        fill
        className="object-cover object-center"
        unoptimized
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(6,10,20,0.97) 0%, rgba(9,15,30,0.94) 40%, rgba(11,18,36,0.88) 100%)",
        }}
      />

      {/* Gold radial bloom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
          w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] lg:w-[800px] lg:h-[400px]
          pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top rule — inset matches padding */}
      <div
        className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 lg:left-20 lg:right-20 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.35) 30%, rgba(201,168,76,0.35) 70%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-2">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="w-5 sm:w-7 h-px bg-gold" />
            <span className="text-gold text-[0.65rem] sm:text-[0.68rem] uppercase tracking-[0.2em] font-medium">
              Transparent Pricing
            </span>
            <div className="w-5 sm:w-7 h-px bg-gold" />
          </div>
          <h2
            className="font-playfair font-bold leading-tight tracking-tight text-white mb-3"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
          >
            Affordable Plans for{" "}
            <em className="not-italic font-light text-gold">Every Business Stage</em>
          </h2>
          <p className="text-white/45 text-[0.85rem] sm:text-[0.93rem] leading-relaxed">
            No hidden costs. No confusing packages. Clear, honest pricing that delivers real value.
          </p>
        </div>

        {/* Cards
            mobile  : 1 column (full width)
            md      : 2 columns (Starter + Growth / Enterprise below)
            lg      : 3 columns                                          */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6
            reveal ${inView ? "reveal-in" : ""}`}
        >
          {plans.map((plan) => (
            <PriceCard key={plan.tier} plan={plan} triggered={inView} />
          ))}
        </div>
      </div>

      {/* Pulse keyframe — defined once at section level */}
      <style>{`
        @keyframes pricePulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.15); }
        }
      `}</style>
    </section>
  );
}

function PriceCard({
  plan,
  triggered,
}: {
  plan: Plan;
  triggered: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const count = useCountUp(plan.price, 1600, triggered);

  return (
    <div
      className={`group relative rounded-sm overflow-hidden flex flex-col
        transition-all duration-300 border cursor-default
        ${plan.featured ? "border-gold/60" : "border-white/10"}
        ${hovered ? "-translate-y-1 sm:-translate-y-2 shadow-[0_28px_64px_rgba(0,0,0,0.6)]" : ""}`}
      style={{
        background: plan.featured
          ? "linear-gradient(160deg, rgba(201,168,76,0.1) 0%, rgba(17,30,56,0.92) 35%, rgba(13,22,44,0.95) 100%)"
          : "rgba(12,20,40,0.75)",
        backdropFilter: "blur(20px)",
        boxShadow: plan.featured
          ? "0 0 60px rgba(201,168,76,0.12), inset 0 1px 0 rgba(201,168,76,0.2)"
          : "inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: plan.featured
            ? "linear-gradient(90deg, transparent, #e8c96a 35%, #c9a84c 65%, transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)",
          opacity: hovered || plan.featured ? 1 : 0.5,
          transition: "opacity 0.3s",
        }}
      />

      {/* Featured pulse glow */}
      {plan.featured && (
        <div
          className="absolute -top-24 left-1/2 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
            animation: "pricePulse 3s ease-in-out infinite",
          }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
          <span className="text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-wider
            px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-gold text-navy
            shadow-[0_4px_16px_rgba(201,168,76,0.4)]">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Card body */}
      <div className="relative z-10 p-6 sm:p-7 lg:p-8 flex flex-col flex-1">

        {/* Tier */}
        <p className="text-gold text-[0.63rem] sm:text-[0.65rem] uppercase tracking-[0.22em] font-semibold mb-2 sm:mb-3">
          {plan.tier}
        </p>

        {/* Title */}
        <h3 className="font-playfair text-[1.1rem] sm:text-[1.2rem] font-bold text-white mb-2">
          {plan.title}
        </h3>

        {/* Description */}
        <p className="text-white/45 text-[0.78rem] sm:text-[0.8rem] leading-relaxed mb-5 sm:mb-7">
          {plan.desc}
        </p>

        {/* Animated price */}
        <div className="mb-1">
          {plan.price !== null ? (
            <div className="flex items-end gap-1 flex-wrap">
              <span
                className="font-playfair font-bold leading-none transition-all duration-300"
                style={{
                  fontSize: triggered ? "clamp(1.8rem, 5vw, 2.8rem)" : "1.4rem",
                  color: plan.featured ? "#e8c96a" : "#ffffff",
                  textShadow: plan.featured
                    ? "0 0 40px rgba(201,168,76,0.5)"
                    : "none",
                }}
              >
                {triggered ? formatNaira(count) : "₦0"}
              </span>
              <span className="text-white/40 text-[0.8rem] sm:text-[0.85rem] mb-1 ml-1">
                {plan.sub}
              </span>
            </div>
          ) : (
            <span
              className="font-playfair font-bold leading-none"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                color: plan.featured ? "#e8c96a" : "#ffffff",
              }}
            >
              Custom
            </span>
          )}
        </div>

        {/* Note */}
        <p className="text-white/35 text-[0.68rem] sm:text-[0.72rem] mb-5 sm:mb-7">
          {plan.note}
        </p>

        {/* Divider */}
        <div
          className="h-px mb-5 sm:mb-6 transition-all duration-500"
          style={{
            background: hovered
              ? "linear-gradient(90deg, rgba(201,168,76,0.4), rgba(255,255,255,0.05))"
              : "rgba(255,255,255,0.07)",
          }}
        />

        {/* Features */}
        <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 flex-1">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 sm:gap-3 text-[0.76rem] sm:text-[0.8rem] text-white/60 leading-snug"
            >
              <span
                className="w-4 h-4 rounded-sm flex items-center justify-center
                  flex-shrink-0 mt-0.5 border"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  borderColor: "rgba(201,168,76,0.25)",
                }}
              >
                <svg className="w-2.5 h-2.5 text-gold" viewBox="0 0 10 10" fill="none">
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

        {/* CTA button */}
        <a
          href="#contact"
          className={`block w-full py-3 sm:py-3.5 text-center
            text-[0.74rem] sm:text-[0.78rem] font-bold uppercase tracking-widest
            rounded-sm transition-all duration-300
            ${plan.featured
              ? "bg-gold text-navy hover:bg-gold-light hover:shadow-[0_12px_32px_rgba(201,168,76,0.4)] hover:-translate-y-0.5"
              : "border border-white/12 text-white/55 hover:border-gold/50 hover:text-gold hover:bg-gold/5"
            }`}
        >
          {plan.cta}
        </a>
      </div>

      {/* Hover ambient glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500
          ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}