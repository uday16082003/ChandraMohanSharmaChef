"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";
import { executiveReferences } from "@/data/references";

export const Endorsements: React.FC = () => {
  return (
    <section id="endorsements" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FAF7F2] border-b border-[#E8DFD3] relative parchment-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold">Executive Verification</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Professional <span className="text-[#D95D26]">References</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-base">
            Direct professional references and contact credentials from seasoned hospitality executives and culinary directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {executiveReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8DFD3] hover:border-[#D95D26] shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D95D26]/10 border border-[#D95D26]/30 flex items-center justify-center text-[#D95D26] text-base sm:text-lg font-cinzel font-bold flex-shrink-0">
                    {ref.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181B] leading-tight">
                      {ref.name}
                    </h3>
                    <p className="text-xs text-[#D95D26] font-bold mt-0.5">{ref.title}</p>
                    <p className="text-[11px] text-stone-500 font-medium">{ref.organization}</p>
                  </div>
                </div>

                {/* Quote / Endorsement note */}
                <p className="text-stone-600 text-xs sm:text-sm italic mb-5 sm:mb-6 leading-relaxed">
                  &ldquo;{ref.quote}&rdquo;
                </p>
              </div>

              {/* Direct Verification Links */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#E8DFD3] space-y-2 text-xs text-stone-600 font-medium">
                <a
                  href={`tel:${ref.phone.replace(/[\s,]/g, "")}`}
                  className="flex items-center gap-2 hover:text-[#D95D26] transition-colors py-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
                  <span className="truncate">{ref.phone}</span>
                </a>
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 hover:text-[#D95D26] transition-colors py-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2A4736] flex-shrink-0" />
                  <span className="truncate">{ref.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
