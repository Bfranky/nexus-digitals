const footerCols = [
  {
    heading: "Services",
    links: [
      { label: "Custom Web Design",    href: "#value" },
      { label: "E-Commerce Stores",    href: "#value" },
      { label: "Booking Systems",      href: "#value" },
      { label: "Local SEO",            href: "#value" },
      { label: "Support & Maintenance",href: "#value" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Restaurants & Food",    href: "#industries" },
      { label: "Salons & Beauty",       href: "#industries" },
      { label: "Contractors",           href: "#industries" },
      { label: "Healthcare",            href: "#industries" },
      { label: "Professional Services", href: "#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Portfolio",          href: "#portfolio" },
      { label: "Our Process",        href: "#process" },
      { label: "Pricing",            href: "#pricing" },
      { label: "Contact Us",         href: "#contact" },
      { label: "Free Consultation",  href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#060e1c] border-t border-gold/20
        px-20 py-12 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div>
          <div className="flex flex-col gap-px mb-4">
            <span className="font-playfair text-xl font-bold tracking-wide">
              Nexus<span className="text-gold">Digital</span>
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-gold opacity-65">
              Web Solutions Studio
            </span>
          </div>
          <p className="text-white/40 text-[0.78rem] leading-relaxed max-w-[210px]">
            Professional web development studio specializing in business-focused
            websites that generate real, measurable results.
          </p>
        </div>

        {/* Columns */}
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h5 className="text-gold text-[0.67rem] uppercase tracking-[0.2em]
              font-semibold mb-5">
              {col.heading}
            </h5>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-[0.8rem] hover:text-white
                      transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      {/* Bottom bar */}
      <div className="bg-[#060e1c] border-t border-white/7 px-20 py-5
        flex justify-between items-center flex-wrap gap-3
        text-white/30 text-[0.73rem]">
        <span>© 2026 NexusDigital Studio. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/60 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white/60 transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
}