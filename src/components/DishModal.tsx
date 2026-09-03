"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageCircle, Flame, MapPin, ChefHat, Sparkles } from "lucide-react";
import { Dish } from "@/data/dishes";

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (dish) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white border border-[#E8DFD3] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 hover:bg-white text-stone-800 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-[#E8DFD3] shadow-md transition-all z-20 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] sm:max-h-[88vh] overflow-y-auto">
            {/* Left Image */}
            <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[480px] bg-stone-100">
              <Image
                src={dish.image}
                alt={dish.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="bg-[#D95D26] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {dish.badge}
                </span>
              </div>
            </div>

            {/* Right Story Details */}
            <div className="lg:col-span-7 p-5 sm:p-8 space-y-4 sm:space-y-5 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2A4736] block mb-0.5">
                    Signature Culinary Creation
                  </span>
                  <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#18181B] leading-snug">
                    {dish.title}
                  </h2>
                  <p className="text-[#D95D26] text-xs sm:text-sm font-semibold mt-0.5">
                    {dish.subtitle}
                  </p>
                </div>

                <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                  {dish.description}
                </p>

                {/* Attributes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 bg-[#FAF7F2] p-3.5 sm:p-4 rounded-2xl border border-[#E8DFD3] text-xs">
                  <div>
                    <span className="text-stone-500 block uppercase tracking-wider font-semibold flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-[#D95D26]" /> Heritage &amp; Origin
                    </span>
                    <span className="text-[#18181B] font-bold">{dish.origin}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block uppercase tracking-wider font-semibold flex items-center gap-1 mb-0.5">
                      <ChefHat className="w-3 h-3 text-[#2A4736]" /> Technique
                    </span>
                    <span className="text-[#18181B] font-bold">{dish.technique}</span>
                  </div>

                  <div>
                    <span className="text-stone-500 block uppercase tracking-wider font-semibold flex items-center gap-1 mb-0.5">
                      <Flame className="w-3 h-3 text-[#D95D26]" /> Spice Meter
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#D95D26] font-bold">{dish.spiceLevel}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < dish.spiceCount ? "bg-[#D95D26]" : "bg-stone-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-stone-500 block uppercase tracking-wider font-semibold flex items-center gap-1 mb-0.5">
                      <Sparkles className="w-3 h-3 text-[#C99224]" /> Execution Status
                    </span>
                    <span className="text-[#2A4736] font-bold">5-Star Executive Recipe</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#18181B] mb-1.5">
                    Culinary Highlights
                  </h4>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {dish.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-xs text-stone-700 gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4736] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-3.5 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <a
                  href={`https://wa.me/66617376179?text=${encodeURIComponent(
                    `Hello Chef Chandra Mohan Sharma, I would like to inquire regarding tasting/menu consulting for: ${dish.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D95D26] hover:bg-[#B84714] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-saffron transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire with Chef</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
