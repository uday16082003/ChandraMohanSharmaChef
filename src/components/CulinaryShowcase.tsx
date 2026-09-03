"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, MapPin, ArrowRight } from "lucide-react";
import { culinaryDishes, Dish } from "@/data/dishes";

interface CulinaryShowcaseProps {
  onSelectDish: (dish: Dish) => void;
}

export const CulinaryShowcase: React.FC<CulinaryShowcaseProps> = ({ onSelectDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Specialties" },
    { id: "south-indian", label: "Seafood & South Indian" },
    { id: "tandoor", label: "Royal Tandoor" },
    { id: "curries", label: "Artisanal Curries" },
    { id: "banqueting", label: "Banquets & Desserts" },
  ];

  const filteredDishes = activeCategory === "all"
    ? culinaryDishes
    : culinaryDishes.filter(d => d.category === activeCategory);

  return (
    <section id="showcase" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 relative bg-white border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold inline-block mb-1.5">Gastronomic Portfolio</span>
            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
              Signature <span className="text-[#D95D26]">Creations</span>
            </h2>
            <p className="text-stone-600 text-xs sm:text-base mt-1.5 max-w-xl">
              Explore authentic regional Indian specialties, live tandoori seafood, delicate slow-simmer curries, and modern banquet plating.
            </p>
          </div>

          {/* Filter Tabs - Touch Swipeable on Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-all cursor-pointer flex-shrink-0 ${
                  activeCategory === tab.id
                    ? "bg-[#D95D26] text-white shadow-saffron"
                    : "bg-[#FAF7F2] hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-[#E8DFD3]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredDishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={dish.id}
                onClick={() => onSelectDish(dish)}
                className="group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#D95D26] cursor-pointer shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Dish Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-3 right-3 bg-white/95 text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#E8DFD3]">
                    {dish.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5 font-medium">
                      <span className="flex items-center gap-1 text-[#D95D26] font-semibold">
                        <Flame className="w-3.5 h-3.5" />
                        <span>{dish.spiceLevel}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#2A4736]" />
                        <span>{dish.origin.split("/")[0]}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18181B] group-hover:text-[#D95D26] transition-colors duration-300">
                      {dish.title}
                    </h3>

                    <p className="text-stone-600 text-xs mt-1 line-clamp-2 leading-relaxed">
                      {dish.subtitle}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-[#E8DFD3] flex items-center justify-between text-xs font-bold text-[#D95D26]">
                    <span>DISCOVER DISH STORY</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
