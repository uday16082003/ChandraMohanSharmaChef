"use client";

import React from "react";
import Image from "next/image";
import { Flame, Sparkles, ChefHat, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FlagIcon } from "./FlagIcon";

export const TandoorSpecialist: React.FC = () => {
  const tandoorPillars = [
    {
      title: "480°C Clay Oven Thermodynamics",
      desc: "Harnessing extreme charcoal radiance inside earthen clay tandoors to lock in moisture, create succulent tenderness, and impart signature wood-smoke aromatics.",
      badge: "Heat Dynamics"
    },
    {
      title: "24-Hour Artisanal Marinades",
      desc: "Hand-pounded garam masala, cold-pressed mustard oil, degi chili, and hung yogurt emulsions calibrated for delicate seafood, royal poultry, and rich paneer.",
      badge: "Spice Formulation"
    },
    {
      title: "Wall-Slapped Imperial Breads",
      desc: "Naturally fermented sourdough, flaky Amritsari kulchas, za'atar-infused naans, and roomali flatbreads baked directly on glowing tandoor walls.",
      badge: "Bread Craft"
    },
    {
      title: "Regional Awadhi & Frontier Mastery",
      desc: "Over 20 years perfecting clay-oven recipes across Hyatt Regency Delhi, Lebua Bangkok, NH Collection Dubai, and Amari Watergate.",
      badge: "Heritage Legacy"
    }
  ];

  return (
    <section id="tandoor-specialist" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#12100E] text-white relative overflow-hidden border-b border-[#D95D26]/30">
      {/* Cinematic Background Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D95D26]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D95D26]/20 border border-[#D95D26]/50 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Flame className="w-4 h-4 text-[#FF8542] animate-pulse" />
            <span>Master of Clay Oven &amp; Fire</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Indian Cuisine &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8542] via-[#FFAA6B] to-amber-300">Tandoor Specialist</span>
          </h2>
          
          <p className="text-stone-300 text-xs sm:text-base leading-relaxed font-sans">
            Two decades of uncompromised mastery in live charcoal heat dynamics, ancient clay-oven baking, and signature Awadhi &amp; Frontier marinades across premier 5-star hotels.
          </p>

          {/* Real Country Flags Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-2 text-xs font-bold tracking-wider uppercase text-stone-300">
            <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <FlagIcon country="india" size="sm" />
              <span>India</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <FlagIcon country="uae" size="sm" />
              <span>Dubai (UAE)</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <FlagIcon country="thailand" size="sm" />
              <span>Thailand</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <FlagIcon country="srilanka" size="sm" />
              <span>Sri Lanka</span>
            </span>
          </div>
        </div>

        {/* Live Sensory Showcase: Animated Tandoor GIF + Live Chef Clay Oven Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Box 1: Live Animated Food GIF (Cloudinary) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#D95D26]/50 shadow-[0_15px_45px_rgba(217,93,38,0.25)] relative bg-black flex flex-col group">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
              {/* Animated GIF Image */}
              <img
                src="https://res.cloudinary.com/dztbjd12n/image/upload/v1788431511/Bay_Area_Eating_GIF_by_SwarajRestaurant_pdar7f.gif"
                alt="Live Indian Cuisine & Tandoor Specialist in Action"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-[#D95D26] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 animate-bounce" />
                <span>Live Sizzling Tandoor</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-gradient-to-b from-[#1E1916] to-[#141210] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                  Live Clay-Oven Charcoal Fire &amp; Smoke
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  The quintessential alchemy of searing spice marinades over white-hot charcoal. High radiant heat caramelizes the outer glaze while locking in succulent juiciness.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-bold">
                <span>AUTHENTIC LIVE CHEF STATIONS</span>
                <span>480°C CHARCOAL</span>
              </div>
            </div>
          </div>

          {/* Box 2: Chef Chandra Live at the Tandoor */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-white/20 shadow-xl relative bg-black flex flex-col group">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-stone-900">
              <Image
                src="/images/chef-live-tandoor-action.jpg"
                alt="Executive Chef Chandra Mohan Sharma Live at Commercial Clay Tandoor Oven"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <ChefHat className="w-3.5 h-3.5 text-[#D95D26]" />
                <span>Executive Chef in Action</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-gradient-to-b from-[#1E1916] to-[#141210] flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                  Chef Chandra Mohan Sharma at the Tandoor
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  Precision temperature control, steel skewer handling, and handcrafted basting at live 5-star hotel banquet stations, serving royalty, diplomats, and international athletes.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-bold">
                <span>HOTEL BANQUET EXCELLENCE</span>
                <span>20+ YEARS CRAFT</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Tandoor Mastery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {tandoorPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D95D26]/70 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF8542] block mb-1.5">
                {pillar.badge}
              </span>
              <h4 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                {pillar.title}
              </h4>
              <p className="text-stone-300 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Tandoor Dishes Gallery: Skewers, Kulchas & Seared Delicacies */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-left mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF8542] font-bold block">
                Signature Clay-Oven Repertoire
              </span>
              <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-white mt-0.5">
                Artisanal Skewers, Breads &amp; Curries
              </h3>
            </div>
            
            <a
              href="#showcase"
              className="bg-[#D95D26] hover:bg-[#FF7839] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-saffron transition-all self-start sm:self-auto"
            >
              <span>View Full 12-Dish Menu</span>
              <Flame className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Dish 1: Live Sizzling Skewers */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src="/images/dishes/live-tandoori-skewers-fire.jpg"
                  alt="Live Charcoal Sizzling Tandoor Skewers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-base">
                  Charcoal Sizzling Skewers
                </span>
              </div>
              <div className="p-4 text-left">
                <p className="text-stone-300 text-xs">
                  Seared over 480°C glowing embers with hand-ground spices and pure ghee glaze.
                </p>
              </div>
            </div>

            {/* Dish 2: Artisanal Tandoori Kulcha */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src="/images/dishes/artisanal-tandoori-kulcha.jpg"
                  alt="Artisanal Stuffed Tandoori Kulcha Flatbread"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-base">
                  Stuffed Tandoori Kulcha
                </span>
              </div>
              <div className="p-4 text-left">
                <p className="text-stone-300 text-xs">
                  Clay-oven slapped sourdough flatbread with crushed spices, coriander &amp; white butter.
                </p>
              </div>
            </div>

            {/* Dish 3: Charred Tandoori Lobster Tail */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 group">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src="/images/dishes/tandoori-lobster-tail.jpg"
                  alt="Charred Tandoori Lobster Tail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-base">
                  Charred Tandoori Lobster Tail
                </span>
              </div>
              <div className="p-4 text-left">
                <p className="text-stone-300 text-xs">
                  Fast-roasted lobster tail in Kashmiri chili glaze with pickled shallots.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
