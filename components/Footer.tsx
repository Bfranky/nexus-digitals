interface FooterLink {
  label: string;
  href: string;
}

interface FooterCol {
  heading: string;
  links: FooterLink[];
}

const footerCols: FooterCol[] = [
  {
    heading: "Services",
    links: [
      { label: "Custom Web Design",     href: "#value" },
      { label: "E-Commerce Stores",     href: "#value" },
      { label: "Booking Systems",       href: "#value" },
      { label: "Local SEO",             href: "#value" },
      { label: "Support & Maintenance", href: "#value" },
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
      { label: "Portfolio",           href: "#portfolio" },
      { label: "Our Process",         href: "#process" },
      { label: "Pricing",             href: "#pricing" },
      { label: "Contact Us",          href: "#contact" },
      { label: "Free Consultation",   href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      {/*
        Layout:
        mobile  : 1 column (brand full-width, then cols stack)
        sm      : 2 columns (brand + first col | remaining cols)
        lg      : 4 columns [1.6fr 1fr 1fr 1fr]
      */}
      <footer
        className="bg-[#060e1c] border-t border-gold/20
          px-4 sm:px-8 lg:px-20 py-10 sm:py-12"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]
            gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-px mb-4">
              <span className="font-playfair text-xl font-bold tracking-wide">
                Nexus<span className="text-gold">Digital</span>
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-gold opacity-65">
                Web Solutions Studio
              </span>
            </div>
            <p className="text-white/40 text-[0.78rem] leading-relaxed max-w-[300px] sm:max-w-[260px] lg:max-w-[210px]">
              Professional web development studio specializing in business-focused
              websites that generate real, measurable results.
            </p>

            {/* Social links — only show on mobile where space exists */}
            <div className="flex gap-3 mt-6 sm:mt-0 lg:mt-6">
              {["𝕏", "in", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-sm border border-white/10 flex items-center
                    justify-center text-white/40 text-[0.68rem] font-bold
                    hover:border-gold/30 hover:text-gold transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — on sm they sit in the remaining column space */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <h5 className="text-gold text-[0.67rem] uppercase tracking-[0.2em]
                font-semibold mb-4 sm:mb-5">
                {col.heading}
              </h5>
              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-[0.78rem] sm:text-[0.8rem]
                        hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Bottom bar */}
      <div
        className="bg-[#060e1c] border-t border-white/7
          px-4 sm:px-8 lg:px-20 py-4 sm:py-5
          flex flex-col sm:flex-row sm:justify-between sm:items-center
          gap-2.5 sm:gap-3 text-white/30 text-[0.7rem] sm:text-[0.73rem]"
      >
        <span>© 2026 NexusDigital Studio. All rights reserved.</span>
        <div className="flex gap-4 sm:gap-6">
          <a
            href="#"
            className="hover:text-white/60 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white/60 transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
}