"use client";

import React from "react";
import Image from "next/image";
import { Users, Sparkles, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export const KitchenBrigade: React.FC = () => {
  return (
    <section id="kitchen-brigade" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white relative border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A4736]/10 border border-[#2A4736]/30 text-[#2A4736] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
            <Users className="w-3.5 h-3.5 text-[#2A4736] flex-shrink-0" />
            <span>People, Culture &amp; Leadership</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Inspiring High-Performance <span className="text-[#D95D26]">Kitchen Teams</span>
          </h2>
          
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            Leading multicultural 5-star hotel kitchen brigades with disciplined empathy, continuous culinary mentorship, and joyful teamwork.
          </p>
        </div>

        {/* Feature Box */}
        <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] p-5 sm:p-8 lg:p-12 shadow-soft-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Image: Festive Kitchen Brigade Photo */}
          <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-soft-md bg-stone-100 group">
            <Image
              src="/images/chef-kitchen-team-festive.jpg"
              alt="Chef Chandra Mohan Sharma with his Hotel Kitchen Brigade Team"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#D95D26] text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D95D26]" />
              <span>Multicultural Brigade Mentorship</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2A4736] block">
              Hotel Kitchen Morale &amp; Mentorship
            </span>
            
            <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-[#18181B] leading-tight">
              Leading From The Front Lines With Stamina &amp; Heart
            </h3>
            
            <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
              Chef Chandra believes great gastronomic hospitality stems from deep team camaraderie, mutual respect, and clear standards. Directing large commercial kitchen brigades across Bangkok, Dubai, and New Delhi, he creates an environment where young line cooks and senior sous chefs alike grow their craft while executing flawlessly under banquet pressure.
            </p>

            {/* Key Culture Badges */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <HeartHandshake className="w-4 h-4 text-[#D95D26] mt-0.5 flex-shrink-0" />
                <span>Empowering junior apprentices and line cooks into confident culinary craftsmen</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2A4736] mt-0.5 flex-shrink-0" />
                <span>Non-negotiable HACCP kitchen hygiene, sanitation, and safety governance</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-medium">
                <Award className="w-4 h-4 text-[#C99224] mt-0.5 flex-shrink-0" />
                <span>Consistently recognized for top staff retention, low turnover &amp; high kitchen morale</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-bold text-stone-700">
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E8DFD3] shadow-soft-sm">🌟 Positive Kitchen Morale</span>
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E8DFD3] shadow-soft-sm">🤝 Cross-Cultural Mentorship</span>
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E8DFD3] shadow-soft-sm">⚡ High-Volume Execution</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
