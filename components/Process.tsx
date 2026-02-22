"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface Step {
  num: string;
  title: string;
  badge: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery & Strategy",
    badge: "Free · No Obligation",
    desc: "A free 30-minute consultation to understand your business, goals, and audience. We then build a clear project plan before writing a single line of code.",
  },
  {
    num: "02",
    title: "Design & Development",
    badge: "Days 1–5",
    desc: "Our team designs and builds your custom site. We share preview links throughout so you're always in the loop and can give early feedback.",
  },
  {
    num: "03",
    title: "Review & Refinement",
    badge: "Days 5–7",
    desc: "You review the full build and request changes. We refine until every detail is exactly right — included revisions at no extra cost.",
  },
  {
    num: "04",
    title: "Launch & Handover",
    badge: "Day 7 · Go Live",
    desc: "We deploy your site, configure analytics and SEO, and walk you through everything you need. Your site is live and ready to generate business.",
  },
];

export default function Process() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="process"
      className="bg-navy-mid border-y border-gold/20
        px-4 sm:px-8 md:px-14 lg:px-20
        py-16 sm:py-20 lg:py-24"
    >
      {/*
        Mobile  : single column, heading above steps
        lg+     : two-column, heading left / steps right
      */}
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-10 sm:gap-14 lg:gap-24 items-start">

        {/* ── Left — heading ── */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-7 h-px bg-gold flex-shrink-0" />
            <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
              Our Process
            </span>
          </div>

          <h2
            className="font-playfair font-bold leading-tight tracking-tight mb-4 text-white"
            style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
          >
            From Brief to{" "}
            <em className="font-light not-italic text-gold">Live Site</em>
            <br />in Days, Not Months
          </h2>

          <p className="text-white/50 text-[0.88rem] sm:text-[0.93rem] leading-relaxed max-w-[400px]">
            Simple, structured, and transparent. You&apos;ll always know exactly
            where your project stands — and when you&apos;ll be live.
          </p>
        </div>

        {/* ── Right — steps ── */}
        <div
          ref={ref}
          className={`flex flex-col reveal ${inView ? "reveal-in" : ""}`}
        >
          {steps.map((step, i) => (
            <ProcessStep
              key={step.num}
              step={step}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  isLast,
}: {
  step: Step;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`grid gap-4 sm:gap-6 py-6 sm:py-8
        grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr]
        ${isLast ? "" : "border-b border-white/7"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number circle + vertical connector */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center
            justify-center font-playfair text-xs sm:text-sm font-bold
            transition-all duration-300 flex-shrink-0
            ${hovered
              ? "bg-gold border-gold text-navy scale-110"
              : "border-gold/20 text-gold"
            }`}
        >
          {step.num}
        </div>

        {/* Vertical line connecting to next step */}
        {!isLast && (
          <div className="flex-1 w-px bg-white/7 mt-1.5" />
        )}
      </div>

      {/* Step content */}
      <div className="pt-1.5 sm:pt-2">
        <h4
          className={`font-playfair font-semibold mb-2 transition-colors duration-300
            text-[0.95rem] sm:text-base
            ${hovered ? "text-gold" : "text-white"}`}
        >
          {step.title}
        </h4>

        <p className="text-white/50 text-[0.8rem] sm:text-[0.83rem] leading-relaxed mb-3">
          {step.desc}
        </p>

        <span
          className="inline-block bg-[rgba(201,168,76,0.12)] border border-gold/20
            text-gold text-[0.62rem] sm:text-[0.67rem] uppercase tracking-widest
            px-2.5 sm:px-3 py-1 rounded-sm"
        >
          {step.badge}
        </span>
      </div>
    </div>
  );
}