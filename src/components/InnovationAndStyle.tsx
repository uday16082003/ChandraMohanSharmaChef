"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Eye, Flame, Handshake, Sparkles, ArrowUpRight, CheckCircle2, Rocket } from "lucide-react";

export const InnovationAndStyle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "concepts",
      badge: "Culinary Innovator",
      title: "Signature Concepts",
      subtitle: "Innovative projects combining fresh perspectives, thoughtful design & emotional impact.",
      icon: Compass,
      description:
        "Every menu concept is an exploration of cultural storytelling and sensory balance. By marrying authentic regional Indian recipes with contemporary gastronomic techniques, Chef Chandra crafts immersive culinary journeys that leave a lasting emotional impression.",
      slideImage: "/images/slides/slide-signature-concepts.png",
      keyPoints: [
        "Innovative projects combining fresh perspectives & thoughtful culinary design",
        "Harmonious fusion of Awadhi, Mughlai, and South Indian heritage",
        "Engineered for luxury hotel outlets, state banquets, and high-profile tastings"
      ]
    },
    {
      id: "presentation",
      badge: "Visual & Sensory",
      title: "Presentation Style",
      subtitle: "Unforgettable moments crafted with visual balance, texture & composition.",
      icon: Eye,
      description:
        "Food is experienced through all five senses before the first bite. Chef Chandra places immense emphasis on color harmony, natural tableware (such as charred coconut shells, stone platters, and gold bowls), delicate micro-herbs, and precise plating geometry.",
      slideImage: "/images/slides/slide-presentation-style.png",
      keyPoints: [
        "Engaging experiences creating unforgettable moments & positive guest memories",
        "Strong emphasis on visual aesthetics, color harmony, and multi-textural appeal",
        "Meticulous attention to balance, plating composition, and natural earthware vessels"
      ]
    },
    {
      id: "behind-the-scenes",
      badge: "Kitchen Mastery",
      title: "Behind the Scenes",
      subtitle: "Collaboration & research drive each creation, ensuring quality & precision.",
      icon: Flame,
      description:
        "Behind every Michelin-standard banquet is rigorous research, ingredient provenance, temperature control, and synchronized teamwork. Chef Chandra leads from the front lines in high-tempo commercial kitchens with uncompromising standards.",
      slideImage: "/images/slides/slide-behind-the-scenes.png",
      keyPoints: [
        "Rigorous culinary research, recipe development, and ingredient provenance",
        "Total brigade discipline ensuring consistency under high-volume pressure",
        "Continuous artistic growth grounded in authentic taste profiles and HACCP hygiene"
      ]
    },
    {
      id: "collaborations",
      badge: "Hotel Partnerships",
      title: "Collaborations & Pop-ups",
      subtitle: "Collaborating with luxury hotel teams on limited-edition culinary experiences.",
      icon: Handshake,
      description:
        "Chef Chandra collaborates with premier international hotel brands, executive chefs, and luxury event producers on limited-edition pop-ups, tableside sensory cooking demonstrations, and comprehensive menu engineering.",
      slideImage: "/images/slides/slide-collaborations.png",
      keyPoints: [
        "Strategic collaboration with international 5-star hotel kitchen teams",
        "Limited-edition pop-up dining projects showcasing cutting-edge culinary innovation",
        "Opportunities to share expertise through masterclasses, menu consulting & live tableside theatrics"
      ]
    },
    {
      id: "future",
      badge: "Vision & Horizons",
      title: "Future Directions",
      subtitle: "Expanding creativity, exploring new mediums & inspiring global audiences.",
      icon: Rocket,
      description:
        "Committed to pioneering the next wave of Indian gastronomy across global dining capitals. Exploring healthy Ayurvedic principles, botanical infusions, modern pastry crossovers, and inspiring audiences across evolving hospitality platforms.",
      slideImage: "/images/slides/slide-future-directions.png",
      keyPoints: [
        "Committed to expanding culinary creativity across evolving global platforms",
        "Exploring innovative mediums, plant-forward Ayurvedic wellness & modern plating",
        "Inspiring new generations of chefs and cross-cultural gastronomic enthusiasts"
      ]
    }
  ];

  return (
    <section id="innovations" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FAF7F2] relative border-b border-[#E8DFD3] parchment-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A4736]/10 border border-[#2A4736]/20 text-[#2A4736] text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
            <span>Chef &amp; Culinary Innovator</span>
          </div>
          
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Shaping Experiences Through <span className="text-[#D95D26]">Imaginative Ideas</span>
          </h2>
          
          <p className="font-serif italic text-base sm:text-xl text-stone-600">
            &ldquo;A creative explorer dedicated to shaping unique experiences and meaningful connections through thoughtful culinary design.&rdquo;
          </p>
        </div>

        {/* Mobile Swipeable Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer flex-shrink-0 ${
                  isActive
                    ? "bg-[#D95D26] text-white shadow-saffron scale-102"
                    : "bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 border border-[#E8DFD3] shadow-soft-sm"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-white" : "text-[#D95D26]"}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white border border-[#E8DFD3] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-soft-lg"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="inline-block bg-[#D95D26]/10 text-[#D95D26] border border-[#D95D26]/20 text-[11px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider font-bold">
                {pillars[activeTab].badge}
              </span>

              <h3 className="font-cinzel text-xl sm:text-3xl lg:text-4xl font-bold text-[#18181B] leading-tight">
                {pillars[activeTab].title}
              </h3>

              <p className="text-[#2A4736] font-serif italic text-sm sm:text-lg font-semibold">
                {pillars[activeTab].subtitle}
              </p>

              <p className="text-stone-600 text-xs sm:text-base leading-relaxed font-normal">
                {pillars[activeTab].description}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-2.5 pt-1">
                {pillars[activeTab].keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D95D26] mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 sm:pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#D95D26] hover:text-[#B84714] transition-colors group"
                >
                  <span>Inquire for Concept Collaboration</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Slide Graphic Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-soft-md bg-stone-100 group aspect-[16/10]">
                <Image
                  src={pillars[activeTab].slideImage}
                  alt={pillars[activeTab].title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
