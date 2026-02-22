interface TrustItem {
  icon: string;
  text: string;
}

const items: TrustItem[] = [
  { icon: "⚡", text: "Delivered in 7 Days or Less" },
  { icon: "💰", text: "Competitive & Transparent Pricing" },
  { icon: "🎨", text: "100% Custom Design" },
  { icon: "📈", text: "Proven Business Growth Results" },
  { icon: "🔒", text: "Ongoing Support & Maintenance" },
  { icon: "🌍", text: "Serving Clients Worldwide" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/7 bg-[rgba(17,32,64,0.3)] overflow-hidden">
      {/*
        Layout breakpoints:
        mobile  (default) : 2 columns, 3 rows
        sm  (640px+)      : 3 columns, 2 rows
        lg  (1024px+)     : 6 columns, 1 row
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <TrustItem key={item.text} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function TrustItem({ item, index }: { item: TrustItem; index: number }) {
  // Border logic per breakpoint — computed as static classes so Tailwind picks them up
  const isLastInRow2Col  = index % 2 === 1;   // right edge on 2-col grid
  const isLastInRow3Col  = index % 3 === 2;   // right edge on 3-col grid
  const isBottomRow2Col  = index >= 4;         // bottom row on 2-col (rows 0-1 of 3)
  const isBottomRow3Col  = index >= 3;         // bottom row on 3-col (rows 0 of 2)

  return (
    <div
      className={[
        "flex items-center gap-3 px-5 py-4 sm:px-6 sm:py-5",
        "transition-colors duration-200 hover:bg-white/[0.03]",
        // right border: always show except last in each row
        !isLastInRow2Col ? "border-r border-white/7" : "",
        // bottom border: show except bottom row
        !isBottomRow2Col ? "border-b border-white/7" : "",
        // override right border at sm: hide if last in 3-col row
        isLastInRow3Col ? "sm:border-r-0" : "sm:border-r sm:border-white/7",
        // override bottom border at sm
        isBottomRow3Col ? "sm:border-b-0" : "sm:border-b sm:border-white/7",
        // override everything at lg: always right border, no bottom border
        "lg:border-r lg:border-white/7 lg:border-b-0 lg:last:border-r-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-gold text-base flex-shrink-0" aria-hidden="true">
        {item.icon}
      </span>
      <span className="text-white/70 text-[0.73rem] sm:text-[0.77rem] leading-snug">
        {item.text}
      </span>
    </div>
  );
}