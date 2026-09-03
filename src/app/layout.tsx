import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chef Chandra Mohan Sharma | Executive Chef Portfolio",
  description:
    "Official Portfolio of Executive Chef Chandra Mohan Sharma. Over 20 years of international 5-star hotel leadership across Bangkok, Dubai, and New Delhi. Specialized in Royal Tandoor, Artisanal Curries, and Luxury Banqueting.",
  keywords: [
    "Chef Chandra Mohan Sharma",
    "Executive Chef Bangkok",
    "The Quartier Hotel Bangkok",
    "Lebua Hotels and Resorts",
    "Amari Watergate",
    "NH Collection Dubai Palm",
    "Hyatt Regency Delhi",
    "Indian Fine Dining",
    "Royal Tandoor",
    "Luxury Banquet Chef"
  ],
  authors: [{ name: "Chef Chandra Mohan Sharma" }],
  openGraph: {
    title: "Chef Chandra Mohan Sharma | Executive Chef",
    description: "20+ Years of 5-Star International Culinary Mastery in Bangkok, Dubai & India.",
    type: "website",
    locale: "en_US",
  }
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${plusJakarta.variable} font-sans bg-[#FAF7F2] text-[#18181B] antialiased selection:bg-[#D95D26] selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
