"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Flame, MapPin, ChefHat } from "lucide-react";
import { FlagIcon } from "./FlagIcon";

interface NetflixIntroProps {
  onEnter: () => void;
}

export const NetflixIntro: React.FC<NetflixIntroProps> = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundDishes = [
    {
      src: "/images/dishes/signature-lobster-moilee.jpg",
      title: "Signature Lobster in Saffron Moilee",
      category: "5-Star Haute Seafood",
      technique: "Coconut Milk Poach & Saffron Foam",
      origin: "Malabar Coast"
    },
    {
      src: "/images/dishes/tandoori-lobster-tail.jpg",
      title: "Charred Tandoori Lobster Tail",
      category: "Royal Tandoor",
      technique: "High-Heat Charcoal Char-Roast",
      origin: "North-West Frontier"
    },
    {
      src: "/images/dishes/royal-dum-biryani.jpg",
      title: "Royal Awadhi Dum Biryani",
      category: "Grand Banquet Heritage",
      technique: "Dough-Sealed Purdah Steam",
      origin: "Awadhi Imperial Court"
    },
    {
      src: "/images/dishes/artisanal-butter-gravy.jpg",
      title: "Artisanal Velvet Butter Gravy",
      category: "Imperial Simmer",
      technique: "Triple-Strained Butter Emulsion",
      origin: "Old Delhi Heritage"
    },
    {
      src: "/images/dishes/artisanal-kulfi-dessert.jpg",
      title: "Sculpted Saffron Kulfi & Berries",
      category: "ITDC Confectionery Craft",
      technique: "Slow-Reduced Rabri Spiral",
      origin: "Royal Mughlai & ITDC"
    },
    {
      src: "/images/dishes/banquet-tasting-spread.jpg",
      title: "Grand Tasting Feast",
      category: "Contemporary Haute Plating",
      technique: "Michelin-Style Course Plating",
      origin: "Modern Indian Gastronomy"
    }
  ];

  // Rotate every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundDishes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [backgroundDishes.length]);

  const handleEnter = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsVisible(false);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { once: true });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 h-[100dvh] max-h-[100dvh] bg-[#0c0c0e] z-[99999] flex flex-col justify-between p-4 sm:p-6 lg:p-10 select-none overflow-hidden"
        >
          {/* Ambient Background Gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#181310] via-[#0c0c0e] to-[#0a0a0c] pointer-events-none" />
          <div className="fixed top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#D95D26]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Header Bar */}
          <div className="relative z-10 flex items-center justify-between w-full border-b border-white/10 pb-2.5 sm:pb-3 flex-shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-[#D95D26]/20 border border-[#D95D26]/40 flex items-center justify-center text-[#D95D26] flex-shrink-0">
                <ChefHat className="w-4 h-4" />
              </div>
              <span className="text-xs font-cinzel font-bold text-white tracking-wider uppercase truncate">
                CHANDRA M. SHARMA
              </span>
            </div>

            <div className="text-[10px] sm:text-[11px] text-stone-300 uppercase tracking-widest font-semibold flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
              <span className="inline-flex items-center gap-1.5 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                <FlagIcon country="thailand" size="sm" />
                <span>Bangkok</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                <FlagIcon country="uae" size="sm" />
                <span>Dubai</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                <FlagIcon country="india" size="sm" />
                <span>India</span>
              </span>
            </div>
          </div>

          {/* Central Showcase Layout - Naturally Fills Screen */}
          <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center justify-evenly py-2 sm:py-4">
            
            {/* Left Column / Mobile Top: Chef Introduction */}
            <div className="w-full lg:col-span-6 space-y-2 sm:space-y-4 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D95D26]/20 border border-[#D95D26]/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#D95D26] flex-shrink-0" />
                <span>The Quartier Hotel Bangkok</span>
              </div>

              {/* Title */}
              <div>
                <h1 className="font-cinzel text-2xl sm:text-4xl xl:text-6xl font-black text-white tracking-tight leading-tight">
                  Chandramohan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8542] via-[#FFAA6B] to-amber-300">Sharma</span>
                </h1>
                <p className="font-serif italic text-xs sm:text-lg md:text-xl text-amber-200/90 font-medium mt-0.5">
                  Executive Chef | Indian &amp; International Cuisine | Luxury Hospitality
                </p>
              </div>

              {/* Quote - Visible on all devices */}
              <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-none">
                &ldquo;A creative explorer dedicated to shaping unique culinary experiences, authentic regional mastery, and meaningful guest connections.&rdquo;
              </p>

              {/* Enter Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleEnter}
                  onTouchEnd={handleEnter}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#D95D26] hover:bg-[#FF7839] text-white px-7 sm:px-10 py-3 sm:py-3.5 rounded-full font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.18em] shadow-[0_10px_30px_rgba(217,93,38,0.5)] hover:shadow-[0_15px_40px_rgba(255,120,57,0.7)] active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span>ENTER SHOWCASE</span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column / Mobile Bottom: Rich Dish Spotlight Card */}
            <div className="w-full lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">
                
                {/* Dish Photo - Generous Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1.0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={backgroundDishes[currentSlide].src}
                        alt={backgroundDishes[currentSlide].title}
                        fill
                        className="object-cover object-center filter contrast-105 brightness-105"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md border border-white/20 text-[#FF8542] text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    {backgroundDishes[currentSlide].category}
                  </div>

                  {/* Bottom Dish Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 sm:p-4 text-left">
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white leading-tight truncate">
                      {backgroundDishes[currentSlide].title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-stone-300 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
                      <span className="truncate">{backgroundDishes[currentSlide].technique}</span>
                    </div>
                  </div>
                </div>

                {/* Sub-bar with Controls */}
                <div className="mt-2 sm:mt-2.5 flex items-center justify-between px-1">
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-stone-400 font-medium truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#2A4736] flex-shrink-0" />
                    <span className="truncate">{backgroundDishes[currentSlide].origin}</span>
                  </div>

                  {/* Next / Prev Controls */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => setCurrentSlide((currentSlide - 1 + backgroundDishes.length) % backgroundDishes.length)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Previous Dish"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] sm:text-xs text-stone-300 font-bold px-1.5">
                      {currentSlide + 1}/{backgroundDishes.length}
                    </span>
                    <button
                      onClick={() => setCurrentSlide((currentSlide + 1) % backgroundDishes.length)}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label="Next Dish"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="relative z-10 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between gap-2 flex-shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x w-full sm:w-auto">
              {backgroundDishes.map((dish, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative h-10 w-14 sm:h-12 sm:w-18 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    currentSlide === idx ? "border-[#FF8542] scale-105 shadow-[0_0_12px_rgba(255,133,66,0.6)]" : "border-white/30 opacity-50 hover:opacity-100"
                  }`}
                  title={dish.title}
                >
                  <Image
                    src={dish.src}
                    alt={dish.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="text-[11px] text-stone-400 font-medium tracking-wider text-right hidden lg:block flex-shrink-0">
              Click any thumbnail to explore dish
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
