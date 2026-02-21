const items = [
  { icon: "⚡", text: "Delivered in 7 Days or Less" },
  { icon: "💰", text: "Competitive & Transparent Pricing" },
  { icon: "🎨", text: "100% Custom Design" },
  { icon: "📈", text: "Proven Business Growth Results" },
  { icon: "🔒", text: "Ongoing Support & Maintenance" },
  { icon: "🌍", text: "Serving Clients Worldwide" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/7 bg-[rgba(17,32,64,0.3)]
      flex flex-wrap items-center">
      {items.map((item) => (
        <div
          key={item.text}
          className="flex items-center gap-3 px-8 py-5 flex-1 min-w-[160px]"
        >
          <span className="text-gold text-base">{item.icon}</span>
          <span className="text-white/70 text-[0.77rem]">{item.text}</span>
        </div>
      ))}
    </div>
  );
}