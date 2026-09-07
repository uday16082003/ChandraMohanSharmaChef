"use client";

import React from "react";
import { Crown, Utensils, Award, Star, Globe, Medal } from "lucide-react";
import { FlagIcon } from "./FlagIcon";
import { careerTimeline } from "@/data/timeline";

export const CareerTimeline: React.FC = () => {
  const getIcon = (role: string, isCurrent?: boolean, isMilestone?: boolean) => {
    if (isCurrent) return Crown;
    if (isMilestone) return Star;
    if (role.toLowerCase().includes("de cuisine")) return Utensils;
    if (role.toLowerCase().includes("chef de partie") || role.toLowerCase().includes("commis")) return Medal;
    if (role.toLowerCase().includes("global") || role.toLowerCase().includes("kyrgyzstan")) return Globe;
    return Award;
  };

  return (
    <section id="journey" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FAF7F2] border-b border-[#E8DFD3] relative parchment-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-2.5 sm:space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold">Distinguished Trajectory</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            25+ Years Across <span className="text-[#D95D26]">World-Class Properties</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-base">
            A proven record of executive leadership, culinary innovation, and multi-million revenue kitchen management across Thailand, the UAE, India, and Central Asia.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line: Left-aligned on mobile, center on desktop */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-[#D95D26] via-[#2A4736]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {careerTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = getIcon(item.role, item.isCurrent, item.isMilestone);

              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D95D26] border-2 sm:border-4 border-white shadow-md z-10" />

                  {/* Left Column (Desktop) */}
                  <div
                    className={`pl-10 sm:pl-14 md:pl-0 ${
                      isEven
                        ? "md:text-right md:pr-10"
                        : "md:order-2 md:text-left md:pl-10"
                    }`}
                  >
                    <span className="text-xs font-bold text-[#D95D26] uppercase tracking-wider sm:tracking-widest block">
                      {item.period}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#18181B] mt-0.5">
                      {item.hotel}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 font-medium flex items-center md:justify-end gap-1.5 flex-wrap">
                      {item.location.toLowerCase().includes("thailand") || item.location.toLowerCase().includes("bangkok") ? (
                        <FlagIcon country="thailand" size="sm" />
                      ) : item.location.toLowerCase().includes("dubai") || item.location.toLowerCase().includes("uae") ? (
                        <FlagIcon country="uae" size="sm" />
                      ) : item.location.toLowerCase().includes("india") || item.location.toLowerCase().includes("delhi") ? (
                        <FlagIcon country="india" size="sm" />
                      ) : null}
                      <span>{item.location}</span>
                    </p>
                  </div>

                  {/* Right Column (Card) */}
                  <div
                    className={`pl-10 sm:pl-14 md:pl-0 ${
                      isEven
                        ? "md:pl-10"
                        : "md:order-1 md:pr-10"
                    }`}
                  >
                    <div
                      className={`p-5 sm:p-7 rounded-2xl bg-white border ${
                        item.isCurrent || item.isMilestone
                          ? "border-[#D95D26]/40 shadow-soft-md"
                          : "border-[#E8DFD3] shadow-soft-sm"
                      } hover:border-[#D95D26] transition-all duration-300`}
                    >
                      {/* Role Badge */}
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#D95D26]/10 border border-[#D95D26]/20 text-[#D95D26] text-[11px] sm:text-xs font-bold mb-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
                        <span>{item.role}</span>
                      </div>

                      <ul className="text-stone-700 text-xs sm:text-sm space-y-1.5 sm:space-y-2 mt-1 leading-relaxed">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-[#D95D26] font-bold mt-0.5 flex-shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
