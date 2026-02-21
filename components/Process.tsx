"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "01", title: "Discovery & Strategy",   badge: "Free · No Obligation", desc: "A free 30-minute consultation to understand your business, goals, and audience. We then build a clear project plan before writing a single line of code." },
  { num: "02", title: "Design & Development",   badge: "Days 1–5",             desc: "Our team designs and builds your custom site. We share preview links throughout so you're always in the loop and can give early feedback." },
  { num: "03", title: "Review & Refinement",    badge: "Days 5–7",             desc: "You review the full build and request changes. We refine until every detail is exactly right — included revisions at no extra cost." },
  { num: "04", title: "Launch & Handover",      badge: "Day 7 · Go Live",      desc: "We deploy your site, configure analytics and SEO, and walk you through everything you need. Your site is live and ready to generate business." },
];

export default function Process() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="process"
      className="bg-navy-mid border-y border-gold/20 px-20 py-24"
    >
      <div className="grid lg:grid-cols-[1fr_2fr] gap-24 items-start">
        {/* Left */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-7 h-px bg-gold" />
            <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
              Our Process
            </span>
          </div>
          <h2 className="font-playfair text-[clamp(1.9rem,3.5vw,3rem)] font-bold
            leading-tight tracking-tight mb-4">
            From Brief to{" "}
            <em className="font-light not-italic text-gold">Live Site</em>
            <br />in Days, Not Months
          </h2>
          <p className="text-white/50 text-[0.93rem] leading-relaxed max-w-[400px]">
            Simple, structured, and transparent. You&apos;ll always know exactly
            where your project stands — and when you&apos;ll be live.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className={`flex flex-col reveal ${inView ? "reveal-in" : ""}`}>
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} isLast={i === steps.length - 1} />
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
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`grid grid-cols-[56px_1fr] gap-6 py-8
        ${isLast ? "" : "border-b border-white/7"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number + connector */}
      <div className="flex flex-col items-center">
        <div
          className={`w-11 h-11 rounded-full border flex items-center justify-center
            font-playfair text-sm font-bold transition-all duration-300 flex-shrink-0
            ${hovered ? "bg-gold border-gold text-navy" : "border-gold/20 text-gold"}`}
        >
          {step.num}
        </div>
        {!isLast && (
          <div className="flex-1 w-px bg-white/7 mt-1.5" />
        )}
      </div>

      {/* Content */}
      <div className="pt-2">
        <h4 className="font-playfair text-base font-semibold mb-2">{step.title}</h4>
        <p className="text-white/50 text-[0.83rem] leading-relaxed mb-3">{step.desc}</p>
        <span className="inline-block bg-[rgba(201,168,76,0.12)] border border-gold/20
          text-gold text-[0.67rem] uppercase tracking-widest px-3 py-1 rounded-sm">
          {step.badge}
        </span>
      </div>
    </div>
  );
}