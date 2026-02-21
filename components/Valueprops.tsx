"use client";
import { useReveal } from "@/hooks/useReveal";

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
      className="relative text-white px-20 py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]" />

      {/* All content sits above the overlay */}
      <div className="relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-7 h-px bg-gold" />
              <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.9rem,3.5vw,3rem)] font-bold
              leading-tight tracking-tight text-white">
              Everything Your Business<br />
              Needs to{" "}
              <em className="font-light not-italic text-gold">Succeed Online</em>
            </h2>
          </div>
          <p className="text-white/60 text-[0.93rem] leading-relaxed max-w-[490px]">
            We combine speed, affordability, and world-class design to deliver websites
            that don&apos;t just look great — they convert visitors into paying customers.
          </p>
        </div>

        {/* Card grid — gap-6 gives spacing between every card */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
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

function ValueCard({
  num, icon, title, desc,
}: {
  num: string; icon: string; title: string; desc: string;
}) {
  return (
    <div
      className="group relative p-8 rounded-sm overflow-hidden transition-all duration-300
        bg-white/5 border border-white/10 backdrop-blur-sm
        hover:bg-white/10 hover:border-gold/40
        hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
    >
      {/* Gold bottom bar slides in on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0
        group-hover:w-full transition-all duration-500" />

      {/* Faint step number */}
      <span className="absolute top-5 right-5 font-playfair text-[0.72rem]
        text-white/15 font-bold select-none">
        {num}
      </span>

      {/* Icon box */}
      <div className="w-12 h-12 bg-white/8 border border-white/10 rounded-sm
        flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>

      <h3 className="font-playfair text-[1.05rem] font-bold text-white mb-2.5">
        {title}
      </h3>
      <p className="text-white/55 text-[0.83rem] leading-relaxed">{desc}</p>
    </div>
  );
}