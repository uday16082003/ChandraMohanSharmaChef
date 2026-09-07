"use client";

import React from "react";
import { ArrowUp, Utensils } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-8 md:px-12 bg-[#F3EDE2] border-t border-[#E8DFD3] text-xs text-stone-600">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D95D26]/10 flex items-center justify-center text-[#D95D26] flex-shrink-0">
            <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <span className="font-cinzel text-xs sm:text-sm font-bold text-[#18181B] block sm:inline">
              CHANDRA MOHAN SHARMA
            </span>
            <span className="text-[#D95D26] font-bold hidden sm:inline mx-1.5">•</span>
            <span className="text-stone-500 font-medium block sm:inline text-[11px] sm:text-xs">Executive Chef</span>
          </div>
        </div>
        
        <p className="font-medium text-[11px] sm:text-xs text-stone-500">
          © 2026 Executive Chef Chandra Mohan Sharma. All Rights Reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-stone-700 hover:text-[#D95D26] font-bold transition-colors cursor-pointer py-1"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
