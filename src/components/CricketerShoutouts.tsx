"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Trophy, Video, Star, CheckCircle2 } from "lucide-react";
import { FlagIcon } from "./FlagIcon";

export const CricketerShoutouts: React.FC = () => {
  return (
    <section id="cricketer-shoutouts" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white relative border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D95D26]/10 border border-[#D95D26]/30 text-[#D95D26] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" />
            <span>VIP &amp; Sports Endorsements</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#18181B]">
            Celebrity &amp; Cricketer <span className="text-[#D95D26]">Shoutouts</span>
          </h2>
          
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            International cricket stars and sports icons celebrating Chef Chandra Mohan Sharma&apos;s culinary mastery, customized athlete nutrition, and warm 5-star hospitality.
          </p>
        </div>

        {/* Top Feature: Ashutosh Sharma Special Video Spotlight */}
        <div className="mb-10 sm:mb-14">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#18181B] via-[#241E1A] to-[#12100E] p-4 sm:p-8 lg:p-10 border-2 border-[#D95D26]/60 shadow-[0_20px_50px_rgba(217,93,38,0.15)] overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D95D26]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
              
              {/* Left Video Player Container */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] sm:aspect-[9/14] rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl">
                  
                  {/* Cloudinary Video Embed */}
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dztbjd12n&public_id=WhatsApp_Video_2026-09-03_at_10.39.37_AM_hf4uzv"
                    title="Ashutosh Sharma Cricketer Shoutout for Chef Chandra Mohan Sharma"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />

                  {/* Top Floating Badge on Video */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 pointer-events-none">
                    <Video className="w-3.5 h-3.5 text-[#D95D26] animate-pulse" />
                    <span>Exclusive Video Shoutout</span>
                  </div>
                </div>
              </div>

              {/* Right Description & Player Bio */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
                
                {/* Cricketer Title & Country Flag */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D95D26]/20 border border-[#D95D26]/50 text-amber-300 text-xs font-bold tracking-wider">
                    <FlagIcon country="india" size="sm" />
                    <span>INDIA • IPL Star Batter</span>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white leading-tight">
                    Ashutosh <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8542] via-[#FFAA6B] to-amber-300">Sharma</span>
                  </h3>

                  <p className="text-amber-200/90 font-serif italic text-base sm:text-lg font-medium">
                    Indian Cricketer (Punjab Kings / Delhi Capitals sensation)
                  </p>
                </div>

                {/* Quote Box */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-sans">
                    &ldquo;Special shoutout to Chef Chandra Mohan Sharma for creating such remarkable dining experiences and flavorful authentic dishes with extraordinary dedication!&rdquo;
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D95D26] mt-0.5 flex-shrink-0" />
                    <span>Personalized high-performance culinary curation for elite athletes</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D95D26] mt-0.5 flex-shrink-0" />
                    <span>Authentic Indian heritage flavors with healthy Ayurvedic balance</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D95D26] mt-0.5 flex-shrink-0" />
                    <span>Celebrated by IPL and International sports champions</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 2 Complementary Cricketer Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Mohit Sharma (India) */}
          <div className="group rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#D95D26] p-4 sm:p-6 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center">
            
            <div className="relative w-full sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0 border border-[#E8DFD3]">
              <Image
                src="/images/celebrities/chef-with-mohit-sharma.jpg"
                alt="Chef Chandra Mohan Sharma with Indian Cricketer Mohit Sharma"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 200px"
              />
              <div className="absolute top-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm flex items-center gap-1.5">
                <FlagIcon country="india" size="sm" />
                <span>India</span>
              </div>
            </div>

            <div className="space-y-2 text-left flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D95D26] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D95D26]" />
                <span>Team India &amp; IPL Star</span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#18181B]">
                Mohit Sharma
              </h3>

              <p className="text-xs font-semibold text-[#2A4736]">
                Indian International Cricketer &amp; Fast Bowler
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Featured alongside Executive Chef Chandra Mohan Sharma following an exclusive luxury dining experience showcasing authentic regional delicacies.
              </p>
            </div>

          </div>

          {/* Card 2: Dushmantha Chameera (Sri Lanka) */}
          <div className="group rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#2A4736] p-4 sm:p-6 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center">
            
            <div className="relative w-full sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 flex-shrink-0 border border-[#E8DFD3]">
              <Image
                src="/images/celebrities/chef-with-dushmantha-chameera.jpg"
                alt="Chef Chandra Mohan Sharma with Sri Lankan Cricketer Dushmantha Chameera"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 200px"
              />
              <div className="absolute top-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm flex items-center gap-1.5">
                <FlagIcon country="srilanka" size="sm" />
                <span>Sri Lanka</span>
              </div>
            </div>

            <div className="space-y-2 text-left flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A4736] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2A4736]" />
                <span>Sri Lanka National Team</span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#18181B]">
                Dushmantha Chameera
              </h3>

              <p className="text-xs font-semibold text-[#2A4736]">
                Sri Lankan International Fast Bowler
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Connecting with Chef Chandra Mohan Sharma during his luxury stay &amp; bespoke dining session, celebrating wholesome nutrition and fine hospitality.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
