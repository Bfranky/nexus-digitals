"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
}

interface Reassurance {
  icon: string;
  text: string;
}

const contactDetails: ContactDetail[] = [
  { icon: "📧", label: "Email",         value: "blessedogobor@gmail.com" },
  { icon: "📞", label: "Phone",         value: "+234 (704) 639-7765" },
  { icon: "⏱️", label: "Response Time", value: "Within 24 business hours" },
  { icon: "🌍", label: "Location",      value: "Serving clients worldwide" },
];

const industries: string[] = [
  "Restaurant / Food & Beverage",
  "Salon / Beauty / Spa",
  "Contractor / Home Services",
  "E-Commerce / Retail",
  "Healthcare / Medical",
  "Legal / Financial Services",
  "Real Estate",
  "Fitness / Wellness",
  "Education / Training",
  "Other",
];

const reassurances: Reassurance[] = [
  { icon: "✓", text: "Free consultation" },
  { icon: "✓", text: "No obligation" },
  { icon: "✓", text: "Reply in 24hrs" },
  { icon: "✓", text: "100% satisfaction" },
];

/* ─────────────────────────────────────────────
   KEY FIX for select option readability:
   Options inherit the browser's native dropdown
   styling. Setting a solid dark bg + light text
   on the <select> itself makes options readable
   on every OS/browser.
───────────────────────────────────────────── */
const selectClass = [
  "w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm font-outfit",
  "text-[0.82rem] sm:text-[0.87rem] text-white",
  "outline-none transition-all duration-200 border border-white/10",
  "bg-[#0d1a30]",               // solid dark background — options inherit this
  "focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]",
  "appearance-none cursor-pointer",
].join(" ");

export default function Contact() {
  const { ref, inView } = useReveal();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden
        px-4 sm:px-8 md:px-14 lg:px-20
        py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(150deg, #07101f 0%, #0b1628 30%, #0e1d36 65%, #080e1c 100%)",
      }}
    >
      {/* Gold glow — left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2
          w-48 h-80 sm:w-80 sm:h-[500px] lg:w-[500px] lg:h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 0% 50%, rgba(201,168,76,0.11) 0%, transparent 65%)",
        }}
      />

      {/* Blue glow — top right */}
      <div
        className="absolute top-0 right-0
          w-48 h-40 sm:w-72 sm:h-64 lg:w-[500px] lg:h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 100% 0%, rgba(30,70,160,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Top rule — inset matches section padding */}
      <div
        className="absolute top-0 left-4 right-4 sm:left-8 sm:right-8 lg:left-20 lg:right-20 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)",
        }}
      />

      <div className="relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-7 h-px bg-gold flex-shrink-0" />
          <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
            Let&apos;s Talk
          </span>
        </div>
        <h2
          className="font-playfair font-bold leading-tight tracking-tight text-white
            mb-10 sm:mb-12 lg:mb-14"
          style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)" }}
        >
          Start Your Project{" "}
          <em className="not-italic font-light text-gold">Today</em>
        </h2>

        {/* Two-column layout — stacks on mobile */}
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 sm:gap-12 lg:gap-16
            items-start reveal ${inView ? "reveal-in" : ""}`}
        >
          {/* ── LEFT info panel ── */}
          <div>
            <h3 className="font-playfair text-[1.2rem] sm:text-[1.4rem] font-bold text-white mb-3">
              Get a free quote<br />within 24 hours
            </h3>
            <p className="text-white/50 text-[0.83rem] sm:text-[0.87rem] leading-relaxed
              mb-7 sm:mb-10">
              Tell us about your business and goals. We&apos;ll come back with a
              clear proposal, timeline, and price — no surprises, no pressure.
            </p>

            {/* Contact details */}
            <div className="space-y-3 sm:space-y-4 mb-7 sm:mb-10">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-center gap-3 sm:gap-4 group">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm flex items-center
                      justify-center text-base sm:text-lg flex-shrink-0
                      border border-white/8 transition-all duration-300
                      group-hover:border-gold/30"
                    style={{ background: "rgba(201,168,76,0.08)" }}
                  >
                    {d.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.18em]
                      text-gold/70 mb-0.5">
                      {d.label}
                    </p>
                    <p className="text-white text-[0.82rem] sm:text-[0.87rem] font-medium truncate">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance pills */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {reassurances.map((r) => (
                <div
                  key={r.text}
                  className="flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5
                    rounded-sm border border-white/7"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span className="text-gold text-xs font-bold flex-shrink-0">{r.icon}</span>
                  <span className="text-white/55 text-[0.68rem] sm:text-[0.75rem]">{r.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT form card ── */}
          <div
            className="relative rounded-sm overflow-hidden border border-white/10"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(24px)",
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Gold shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #c9a84c 35%, #e8c96a 65%, transparent 100%)",
              }}
            />
            {/* Corner glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 p-5 sm:p-7 lg:p-10">
              <h4 className="font-playfair text-[1.05rem] sm:text-[1.15rem] font-bold text-white mb-1">
                Request a Free Quote
              </h4>
              <p className="text-white/40 text-[0.75rem] sm:text-[0.79rem] mb-6 sm:mb-8">
                Fill in the details — we&apos;ll reply within 24 hours with a custom plan.
              </p>

              {submitted ? (
                <div
                  className="text-center py-12 sm:py-16 rounded-sm border border-green-500/20"
                  style={{ background: "rgba(34,197,94,0.06)" }}
                >
                  <div className="text-4xl sm:text-5xl mb-4">✅</div>
                  <h4 className="font-playfair text-[1rem] sm:text-[1.1rem] font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/50 text-[0.83rem] sm:text-[0.87rem]">
                    We&apos;ll reply within 24 hours with a custom plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                  {/* Row 1: Name + Business — stacks on mobile */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <Field label="Full Name" required>
                      <Input type="text" placeholder="John Smith" required />
                    </Field>
                    <Field label="Business Name">
                      <Input type="text" placeholder="My Business LLC" />
                    </Field>
                  </div>

                  {/* Row 2: Email + Phone — stacks on mobile */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <Field label="Email Address" required>
                      <Input type="email" placeholder="you@business.com" required />
                    </Field>
                    <Field label="Phone Number">
                      <Input type="tel" placeholder="+234 (704) 639-0000" />
                    </Field>
                  </div>

                  {/* Industry */}
                  <Field label="Industry / Business Type" required>
                    <div className="relative">
                      <select required className={selectClass} defaultValue="">
                        <option value="" disabled>Select your industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {/* Custom chevron */}
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                        ▾
                      </span>
                    </div>
                  </Field>

                  {/* Row 3: Budget + Timeline — stacks on mobile */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    <Field label="Budget Range">
                      <div className="relative">
                        <select className={selectClass}>
                          <option>Under ₦100,000</option>
                          <option>₦100,000 – ₦250,000</option>
                          <option>₦250,000 – ₦500,000</option>
                          <option>₦500,000+</option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                          ▾
                        </span>
                      </div>
                    </Field>
                    <Field label="Timeline">
                      <div className="relative">
                        <select className={selectClass}>
                          <option>ASAP (under 7 days)</option>
                          <option>Within 2 weeks</option>
                          <option>Within a month</option>
                          <option>Flexible</option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                          ▾
                        </span>
                      </div>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field label="Tell Us About Your Project" required>
                    <textarea
                      required
                      rows={4}
                      placeholder="What does your business do? Do you have an existing website? What are your main goals?"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm font-outfit
                        text-[0.82rem] sm:text-[0.87rem] outline-none transition-all duration-200
                        border border-white/10 resize-none
                        text-white/80 placeholder:text-white/25
                        bg-[#0d1a30]
                        focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]"
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 mt-1 rounded-sm
                      text-[0.78rem] sm:text-[0.82rem] font-bold uppercase tracking-[0.15em]
                      transition-all duration-300 bg-gold text-navy
                      hover:bg-gold-light hover:-translate-y-0.5
                      hover:shadow-[0_16px_40px_rgba(201,168,76,0.35)]"
                  >
                    Send Request — It&apos;s Free →
                  </button>

                  <p className="text-center text-white/25 text-[0.68rem] sm:text-[0.72rem]">
                    No spam. No commitment. Just a conversation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Field label wrapper ── */
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[0.65rem] sm:text-[0.68rem] uppercase tracking-[0.14em]
        text-white/40 font-medium mb-1.5">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

/* ── Dark input — solid bg so browser autofill doesn't wash it out ── */
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm font-outfit
        text-[0.82rem] sm:text-[0.87rem] outline-none transition-all duration-200 border
        text-white/80 placeholder:text-white/25
        bg-[#0d1a30] border-white/10
        focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)]"
    />
  );
}