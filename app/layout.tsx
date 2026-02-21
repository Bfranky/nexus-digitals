import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NexusDigital — Professional Web Solutions for Every Business",
  description:
    "Custom, high-converting websites for restaurants, salons, contractors, e-commerce, healthcare & more. Fast delivery. Affordable pricing. Real results.",
  keywords: "web design, web development, business websites, local SEO",
  openGraph: {
    title: "NexusDigital — Professional Web Solutions",
    description: "80+ clients launched. 7-day delivery. 100% satisfaction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable}`}
    >
      <body className="bg-blue-950 text-white font-outfit font-light overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}