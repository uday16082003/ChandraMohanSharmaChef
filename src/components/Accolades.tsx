"use client";

import React from "react";
import { Trophy, Gem, Cake, Sprout, GraduationCap, Zap } from "lucide-react";

export const Accolades: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white relative border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold">Honors &amp; Qualifications</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Accolades &amp; <span className="text-[#D95D26]">Credentials</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-base">
            Recognized by world-renowned culinary guides and 5-star hotel groups for distinguished execution, brigade leadership, and technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          
          {/* Card 1: Tatler Best Thailand 2025 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border-2 border-[#D95D26] shadow-soft-md group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D95D26] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-bl-xl">
              Latest 2025 Honor
            </div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D95D26]/10 border border-[#D95D26]/30 flex items-center justify-center text-[#D95D26] mb-5 sm:mb-6">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#D95D26] tracking-wider uppercase">Tatler Guide Thailand</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181B] mt-0.5 mb-2">Tatler BEST Thailand 2025</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              <strong>Nila at Amari Bangkok</strong> officially awarded as a <strong>Recommended Restaurant</strong> in the prestigious Tatler Best Thailand 2025 culinary guide under Chef Chandra&apos;s leadership.
            </p>
          </div>

          {/* Card 2: Hystar Diamond & Gold */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#2A4736]/30 shadow-soft-sm group hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#2A4736]/10 border border-[#2A4736]/30 flex items-center justify-center text-[#2A4736] mb-5 sm:mb-6">
              <Gem className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#2A4736] tracking-wider uppercase">Hyatt Regency Delhi</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181B] mt-0.5 mb-2">Hystar Diamond &amp; Gold</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Awarded <strong>Employee of the Quarter (2006)</strong> for benchmark culinary execution and dedication during high-pressure banquet operations.
            </p>
          </div>

          {/* Card 3: Best Employee of the Month */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#C99224]/30 shadow-soft-sm group hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#C99224]/10 border border-[#C99224]/30 flex items-center justify-center text-[#C99224] mb-5 sm:mb-6">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#C99224] tracking-wider uppercase">Hyatt Regency Delhi</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#18181B] mt-0.5 mb-2">Employee of the Month</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Honored as <strong>Best Employee of the Month</strong> in <strong>January 2010</strong> and <strong>April 2011</strong> for outstanding brigade leadership and guest satisfaction.
            </p>
          </div>

          {/* Card 4: ITDC & Hyatt Apprenticeship */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-soft-sm hover:border-[#D95D26] transition-all duration-300">
            <div className="flex items-center gap-3 text-[#D95D26] mb-2.5">
              <Cake className="w-5 h-5 text-[#D95D26]" />
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#18181B]">ITDC Bakery &amp; Hyatt Apprenticeship</h4>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider mb-2 font-bold">Culinary Certification</p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              <strong>2-Year Bakery &amp; Confectionery Certification</strong> from <em>I.T.D.C. Delhi</em> + <strong>2-Year Culinary Apprenticeship (1998–2001)</strong> from <em>Hyatt Regency Delhi</em>.
            </p>
          </div>

          {/* Card 5: Yoga & Naturopathy */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-soft-sm hover:border-[#2A4736] transition-all duration-300">
            <div className="flex items-center gap-3 text-[#2A4736] mb-2.5">
              <Sprout className="w-5 h-5 text-[#2A4736]" />
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#18181B]">Yoga &amp; Naturopathy</h4>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider mb-2 font-bold">Diploma • L.B. University</p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Integrated holistic dietary knowledge and Ayurvedic natural nutrition principles into modern fine dining.
            </p>
          </div>

          {/* Card 6: Higher Education */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD3] shadow-soft-sm hover:border-[#C99224] transition-all duration-300">
            <div className="flex items-center gap-3 text-[#C99224] mb-2.5">
              <GraduationCap className="w-5 h-5 text-[#C99224]" />
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#18181B]">Higher Education</h4>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider mb-2 font-bold">Graduation • Nagpur University</p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Strong academic foundation combined with secondary education from N.O.S (1997) &amp; CBSE (1995).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
