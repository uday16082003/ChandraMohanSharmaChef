"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, ArrowDown, Calendar, RefreshCw, ChefHat, Trophy, Sparkles, MapPin } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const chefPhotos = [
    {
      src: "/images/chef-chandra-tatler-award.jpg",
      alt: "Chef Chandra Mohan Sharma holding Tatler Best Thailand 2025 Award at Amari Bangkok",
      caption: "Tatler Best Thailand 2025 Award Winner • Nila Bangkok"
    },
    {
      src: "/images/chef-kitchen-action.png",
      alt: "Chef Chandra Mohan Sharma in Chef Hat Cooking on Range",
      caption: "Live Commercial Kitchen Leadership"
    },
    {
      src: "/images/chef-chandra.png",
      alt: "Executive Chef Chandra Mohan Sharma Plating Fine Dining",
      caption: "Fine-Dining Plating & Craft"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden parchment-pattern">
      {/* Background Soft Glows */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D95D26]/10 rounded-full blur-[80px] pointer-events-none top-1/4 right-5 sm:right-10" />
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#2A4736]/10 rounded-full blur-[70px] pointer-events-none bottom-10 left-5 sm:left-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D95D26]/10 border border-[#D95D26]/30 text-[#D95D26] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
            <ChefHat className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
            <span>Executive Chef | Indian &amp; International Cuisine | Luxury Hospitality</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-3xl sm:text-5xl xl:text-6xl font-black text-[#18181B] tracking-tight leading-[1.12]">
            Mastering the <span className="text-[#D95D26]">Alchemy of Fire</span>, Spices &amp; Fine Dining.
          </h1>

          {/* Tagline / Philosophy Quote */}
          <div className="border-l-2 border-[#D95D26]/50 pl-4 py-1 max-w-2xl mx-auto lg:mx-0 text-left">
            <p className="font-serif text-lg sm:text-2xl text-[#2A4736] font-semibold italic leading-snug sm:leading-relaxed">
              &ldquo;A creative explorer dedicated to shaping unique experiences and meaningful connections through imaginative culinary ideas.&rdquo;
            </p>
          </div>

          {/* Career Summary Line */}
          <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            Over two decades spearheading premier 5-star kitchen operations at <strong className="text-[#18181B] font-bold">The Quartier Hotel Bangkok</strong>, <strong className="text-[#18181B] font-bold">Amari Watergate (Tatler Best 2025)</strong>, <strong className="text-[#18181B] font-bold">NH Collection Dubai Palm</strong>, <strong className="text-[#18181B] font-bold">Lebua Hotels &amp; Resorts</strong>, and <strong className="text-[#18181B] font-bold">Hyatt Regency Delhi</strong>.
          </p>

          {/* Enhanced Action CTAs: Perfectly Aligned with Authentic WhatsApp Icon */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2">
            
            {/* CTA 1: Explore Creations */}
            <a
              href="#showcase"
              className="bg-[#D95D26] hover:bg-[#B84714] text-white px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 shadow-saffron transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <span>Explore Creations</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            {/* CTA 2: Official WhatsApp Direct */}
            <a
              href="https://wa.me/66617376179?text=Hello%20Chef%20Chandra%20Mohan%20Sharma,%20I%20would%20like%20to%20connect%20with%20you%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366]/40 hover:border-[#25D366] bg-white hover:bg-[#25D366]/5 text-stone-900 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 shadow-soft-sm cursor-pointer whitespace-nowrap"
            >
              {/* Authentic WhatsApp Icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] flex-shrink-0">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Direct</span>
            </a>

            {/* CTA 3: Book Consultation */}
            <button
              onClick={onOpenBooking}
              className="border border-[#E8DFD3] hover:border-[#D95D26] bg-[#FAF7F2] hover:bg-white text-stone-800 px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-soft-sm cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D95D26]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Redesigned Metric Cards with High-End Alignment */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 max-w-xl mx-auto lg:mx-0 border-t border-[#E8DFD3]">
            
            {/* Metric 1 */}
            <div className="bg-white/80 border border-[#E8DFD3] rounded-2xl p-2.5 sm:p-4 text-center sm:text-left shadow-soft-sm hover:border-[#D95D26]/50 transition-colors">
              <span className="font-cinzel text-lg sm:text-3xl font-black text-[#D95D26] block leading-none mb-1">
                20+
              </span>
              <span className="text-[9px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-bold block leading-tight">
                Years Mastery
              </span>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/80 border border-[#E8DFD3] rounded-2xl p-2.5 sm:p-4 text-center sm:text-left shadow-soft-sm hover:border-[#2A4736]/50 transition-colors">
              <span className="font-serif text-lg sm:text-3xl font-black text-[#2A4736] block leading-none mb-1">
                Tatler
              </span>
              <span className="text-[9px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-bold block leading-tight">
                Best Thailand
              </span>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/80 border border-[#E8DFD3] rounded-2xl p-2.5 sm:p-4 text-center sm:text-left shadow-soft-sm hover:border-[#18181B]/50 transition-colors">
              <span className="font-cinzel text-lg sm:text-3xl font-black text-[#18181B] block leading-none mb-1">
                100K+
              </span>
              <span className="text-[9px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-bold block leading-tight">
                Guests Served
              </span>
            </div>

          </div>
        </motion.div>

        {/* Right Column: Chef Chandra Tatler Award Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center w-full"
        >
          <div className="relative w-full max-w-xs sm:max-w-md">
            {/* Clean Frame Container */}
            <div className="relative rounded-3xl p-2.5 sm:p-3 bg-white shadow-soft-lg border border-[#E8DFD3] group">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src={chefPhotos[photoIndex].src}
                  alt={chefPhotos[photoIndex].alt}
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                />

                {/* Photo Switcher Button */}
                <button
                  onClick={() => setPhotoIndex((photoIndex + 1) % chefPhotos.length)}
                  className="absolute bottom-2.5 right-2.5 bg-white/95 hover:bg-white text-stone-800 border border-[#E8DFD3] px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                  title="Switch View"
                >
                  <RefreshCw className="w-3 h-3 text-[#D95D26]" />
                  <span>Switch Shot ({photoIndex + 1}/{chefPhotos.length})</span>
                </button>
              </div>

              {/* Caption pill */}
              <div className="mt-2.5 text-center text-[11px] sm:text-xs font-bold text-stone-700">
                {chefPhotos[photoIndex].caption}
              </div>
            </div>

            {/* Floating Badge 1: Tatler Best Thailand 2025 */}
            <div className="absolute -top-3.5 -right-1 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#D95D26]/40 rounded-2xl p-2.5 sm:p-3.5 shadow-md max-w-[170px] sm:max-w-none">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#D95D26]/10 flex items-center justify-center text-[#D95D26] flex-shrink-0">
                  <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D95D26] font-bold">Tatler Best 2025</p>
                  <p className="text-[11px] sm:text-xs font-bold text-[#18181B] leading-tight">Thailand Winner</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Current Executive Chef */}
            <div className="absolute -bottom-3.5 -left-1 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#2A4736]/40 rounded-2xl p-2.5 sm:p-3.5 shadow-md max-w-[170px] sm:max-w-none">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#2A4736]/10 flex items-center justify-center text-[#2A4736] flex-shrink-0">
                  <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 font-bold">Executive Chef</p>
                  <p className="text-[11px] sm:text-xs font-bold text-[#18181B] leading-tight">The Quartier</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
