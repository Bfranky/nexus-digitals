"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

type Project = {
  id: number;
  wide: boolean;
  industry: string;
  title: string;
  desc: string;
  tags: string[];
  category: string;
  screenshot: string; // real Unsplash image URL
  url: string;        // fake display URL in browser bar
};

const projects: Project[] = [
  {
    id: 1, wide: true, category: "Restaurant",
    industry: "Restaurant & Dining",
    title: "Fine Dining — La Maison",
    desc: "Sophisticated site with online menu, table reservations, event gallery, chef profiles, and full Google integration.",
    tags: ["Reservation Widget", "Digital Menu", "Photo Gallery", "Local SEO"],
    screenshot: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    url: "lamaison.com",
  },
  {
    id: 2, wide: false, category: "Salon",
    industry: "Salon & Beauty",
    title: "Gloss Beauty Studio",
    desc: "Elegant site with 24/7 booking, service menu, staff profiles, and before/after gallery to fill your calendar.",
    tags: ["Booking System", "Staff Profiles", "Gallery"],
    screenshot: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80",
    url: "glossbeauty.studio",
  },
  {
    id: 3, wide: false, category: "Services",
    industry: "Contractors & Trades",
    title: "Turner Roofing Co.",
    desc: "Lead-generating site with quote forms, service areas, project portfolio, and verified reviews integration.",
    tags: ["Lead Forms", "Service Areas", "Reviews"],
    screenshot: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    url: "turnerroofing.com",
  },
  {
    id: 4, wide: false, category: "E-Commerce",
    industry: "E-Commerce & Retail",
    title: "Silk & Stone Boutique",
    desc: "Full e-commerce solution with product catalog, secure checkout, inventory tracking, and mobile-optimized UX.",
    tags: ["Shopping Cart", "Secure Checkout", "Inventory"],
    screenshot: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
    url: "silkandstone.shop",
  },
  {
    id: 5, wide: true, category: "Services",
    industry: "Healthcare & Wellness",
    title: "Alves Family Clinic",
    desc: "Professional medical site with appointment scheduling, practitioner profiles, insurance info, and patient resources.",
    tags: ["Appointment Booking", "Provider Profiles", "Patient Portal", "Trust Signals"],
    screenshot: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80",
    url: "alvesfamilyclinic.com",
  },
  {
    id: 6, wide: false, category: "Services",
    industry: "Professional Services",
    title: "Chen & Associates Law",
    desc: "Authority site for firms with credentials showcase, service pages, team bios, and consultation booking.",
    tags: ["Consultation Booking", "Team Pages", "Credibility"],
    screenshot: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80",
    url: "chenassociates.law",
  },
];

const TABS = ["All", "Restaurant", "Salon", "Services", "E-Commerce"];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const { ref, inView } = useReveal();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="relative px-20 py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)," +
          "linear-gradient(180deg, #0d1f3c 0%, #0b1628 40%, #080f1e 100%)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        {/* ── Header ── */}
        <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-7 h-px bg-gold" />
              <span className="text-gold text-[0.68rem] uppercase tracking-[0.22em] font-medium">
                Our Work
              </span>
            </div>
            <h2
              className="font-playfair font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
            >
              Solutions Built for{" "}
              <em className="font-light not-italic text-gold">Real Businesses</em>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex border border-gold/20 rounded-sm overflow-hidden">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2.5 text-[0.73rem] uppercase tracking-widest
                  border-r border-gold/20 last:border-r-0 transition-all duration-200
                  font-outfit cursor-pointer ${
                    active === tab
                      ? "bg-gold text-navy font-semibold"
                      : "bg-transparent text-white/40 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          ref={ref}
          className={`grid grid-cols-12 gap-6 reveal ${inView ? "reveal-in" : ""}`}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Browser Mockup with real screenshot ── */
function BrowserMock({
  screenshot,
  url,
  tall,
}: {
  screenshot: string;
  url: string;
  tall: boolean;
}) {
  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a2e] rounded-t-sm overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#12122a] border-b border-white/5 flex-shrink-0">
        {/* Traffic lights */}
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] flex-shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] flex-shrink-0" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] flex-shrink-0" />
        {/* Address bar */}
        <div className="flex-1 mx-3 bg-[#0f0f20] border border-white/8 rounded-sm
          flex items-center px-2.5 gap-1.5 h-5">
          <svg className="w-2.5 h-2.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-white/40 text-[0.58rem] tracking-wide truncate">{url}</span>
        </div>
      </div>

      {/* Screenshot */}
      <div className={`relative w-full flex-1 overflow-hidden ${tall ? "min-h-[220px]" : "min-h-[170px]"}`}>
        <Image
          src={screenshot}
          alt={url}
          fill
          className="object-cover object-top transition-transform duration-700
            group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12
          bg-gradient-to-t from-[#0b1628]/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ project: p }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-sm overflow-hidden transition-all duration-350
        border cursor-default flex flex-col
        ${p.wide ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-4"}
        ${
          hovered
            ? "border-gold/50 -translate-y-2 shadow-[0_32px_72px_rgba(0,0,0,0.55)]"
            : "border-white/8 bg-[rgba(13,24,48,0.7)]"
        }`}
      style={{
        background: hovered
          ? "rgba(17,32,64,0.9)"
          : "rgba(13,24,48,0.7)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gold accent line on hover */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gold transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      {/* Browser mockup */}
      <div className={p.wide ? "h-64" : "h-52"}>
        <BrowserMock
          screenshot={p.screenshot}
          url={p.url}
          tall={p.wide}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-[0.67rem] uppercase
          tracking-[0.15em] text-gold">
          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
          {p.industry}
        </div>

        <h3 className="font-playfair text-[1rem] font-semibold text-white leading-snug">
          {p.title}
        </h3>

        <p className="text-white/45 text-[0.81rem] leading-relaxed flex-1">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[0.65rem] px-2.5 py-0.5 rounded-sm
                border border-gold/15 text-gold/60 bg-gold/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}