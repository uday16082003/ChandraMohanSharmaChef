"use client";

import React from "react";
import Image from "next/image";
import { Flame, Sprout, ShieldCheck, Users, Eye } from "lucide-react";

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      color: "text-[#D95D26]",
      bgColor: "bg-[#D95D26]/10",
      title: "Royal Tandoor & Spices",
      description: "Deep foundational mastery of clay-oven heat dynamics, smoking techniques, and authentic stone-ground spice alchemy across Awadhi, Mughlai, and Southern traditions."
    },
    {
      icon: Sprout,
      color: "text-[#2A4736]",
      bgColor: "bg-[#2A4736]/10",
      title: "Ayurveda & Naturopathy",
      description: "Backed by a Diploma in Yoga & Naturopathy from L.B. University, dishes balance digestive harmony, vitality, and nutrient preservation without sacrificing royal decadence."
    },
    {
      icon: ShieldCheck,
      color: "text-[#C99224]",
      bgColor: "bg-[#C99224]/10",
      title: "5-Star Food Governance",
      description: "Non-negotiable HACCP hygiene protocols, rigorous ingredient sourcing, menu engineering, and strict food cost optimization across multi-outlet hotel operations."
    },
    {
      icon: Users,
      color: "text-[#D95D26]",
      bgColor: "bg-[#D95D26]/10",
      title: "Brigade Mentorship",
      description: "Leading by example with high stamina and unwavering will power. Inspiring and training multicultural kitchen brigades to perform at their absolute peak."
    }
  ];

  const featuredCreations = [
    {
      title: "Signature Lobster in Saffron Moilee",
      subtitle: "Whole Lobster & Coconut Foam",
      image: "/images/dishes/signature-lobster-moilee.jpg"
    },
    {
      title: "Live Sizzling Charcoal Skewers",
      subtitle: "480°C Clay Oven Char & Ghee Glaze",
      image: "/images/dishes/live-tandoori-skewers-fire.jpg"
    },
    {
      title: "Royal Awadhi Dum Biryani",
      subtitle: "Aged Basmati & Roasted Cashews",
      image: "/images/dishes/royal-dum-biryani.jpg"
    },
    {
      title: "Sculpted Saffron Kulfi & Berries",
      subtitle: "ITDC Bakery & Confectionery Art",
      image: "/images/dishes/artisanal-kulfi-dessert.jpg"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white relative border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold inline-block">The Culinary Creed</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Tradition Elevated by <span className="text-[#D95D26]">Modern Mastery</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            From clay-oven heat mastery to directing high-tempo hotel banquet operations, Chef Chandra brings disciplined leadership, deep Ayurvedic holistic nutrition, and fine-dining excellence.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#D95D26]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p.bgColor} flex items-center justify-center ${p.color} mb-5 sm:mb-6 transition-all duration-300 transform group-hover:scale-110`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181B] mb-2 group-hover:text-[#D95D26] transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Real Food Gallery Reel */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8DFD3]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D95D26] block">
                Visual Artistry
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#18181B] mt-0.5">
                Authentic Craftsmanship &amp; Haute Plating
              </h3>
            </div>
            <a
              href="#showcase"
              className="text-xs uppercase tracking-wider text-[#D95D26] hover:text-[#B84714] font-bold flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Dishes</span>
              <Eye className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredCreations.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-100 border border-[#E8DFD3] hover:border-[#D95D26]/50 shadow-soft-md transition-all duration-500 hover:-translate-y-1"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold block mb-1">
                    Signature Creation
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-stone-300 text-xs mt-0.5 font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
