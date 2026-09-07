"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, CalendarCheck, FileText, Menu, X, Trophy, Flame } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3] py-2 sm:py-3 shadow-soft-sm"
          : "bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#E8DFD3]/60 py-2.5 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#D95D26]/30 flex items-center justify-center bg-[#D95D26]/10 group-hover:bg-[#D95D26] transition-all duration-300 flex-shrink-0">
            <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D95D26] group-hover:text-white transition-colors" />
          </div>
          <div className="min-w-0">
            <span className="font-cinzel text-xs sm:text-base font-bold tracking-wider text-[#18181B] block leading-tight group-hover:text-[#D95D26] transition-colors truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
              CHANDRA MOHAN SHARMA
            </span>
            <span className="text-[9px] sm:text-[10px] text-stone-500 tracking-widest uppercase block font-semibold truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
              Executive Chef • Bangkok • Dubai • India
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs tracking-wider uppercase font-bold text-stone-700 whitespace-nowrap">
          <a
            href="#cricketer-shoutouts"
            className="text-[#D95D26] hover:text-[#B84714] font-black transition-colors py-1 inline-flex items-center gap-1.5"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>VIP Shoutouts</span>
          </a>
          <a href="#innovations" className="hover:text-[#D95D26] transition-colors py-1">
            Concepts
          </a>
          <a href="#showcase" className="hover:text-[#D95D26] transition-colors py-1">
            Creations
          </a>
          <a href="#journey" className="hover:text-[#D95D26] transition-colors py-1">
            Journey
          </a>
          <a href="#credentials" className="hover:text-[#D95D26] transition-colors py-1">
            Accolades
          </a>
          <a href="#endorsements" className="hover:text-[#D95D26] transition-colors py-1">
            References
          </a>
          <a href="#contact" className="hover:text-[#D95D26] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* Action CTAs & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-[#D95D26] hover:bg-[#B84714] text-white text-[10px] sm:text-xs uppercase tracking-wider font-bold py-2 px-2.5 sm:py-2.5 sm:px-5 rounded-full inline-flex items-center gap-1.5 sm:gap-2 shadow-saffron transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <CalendarCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Consult / Reserve</span>
            <span className="sm:hidden">Book</span>
          </button>

          <button
            onClick={onOpenResume}
            className="border border-[#D95D26]/30 hover:border-[#D95D26] bg-white hover:bg-[#D95D26]/5 text-[#D95D26] text-[10px] sm:text-xs uppercase tracking-wider font-bold py-2 px-2 sm:py-2.5 sm:px-4 rounded-full inline-flex items-center gap-1 transition-all shadow-soft-sm cursor-pointer whitespace-nowrap active:scale-95"
            title="View Executive Resume"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D95D26]" />
            <span className="hidden sm:inline">CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#18181B] hover:text-[#D95D26] p-1.5 sm:p-2 rounded-xl bg-white border border-[#E8DFD3] shadow-soft-sm cursor-pointer transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#D95D26]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Drawer Modal & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 top-[52px] sm:top-[60px] bg-black/40 backdrop-blur-xs z-40"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden relative z-50 px-4 pt-3 pb-6 border-t border-[#E8DFD3] bg-white/98 backdrop-blur-2xl shadow-2xl max-h-[calc(100dvh-60px)] overflow-y-auto space-y-1 text-xs uppercase tracking-wider font-bold text-stone-800"
            >
              <a
                href="#cricketer-shoutouts"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-[#D95D26] font-black border-b border-stone-100 flex items-center gap-2 active:bg-orange-50 px-2 rounded-lg"
              >
                <Trophy className="w-4 h-4 text-[#D95D26]" />
                <span>🏏 Cricketer &amp; VIP Shoutouts</span>
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                The Culinary Creed &amp; Philosophy
              </a>

              <a
                href="#innovations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Concepts &amp; Presentation Style
              </a>

              <a
                href="#tandoor-specialist"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[#D95D26] font-bold border-b border-stone-100 flex items-center gap-2 px-2 rounded-lg active:bg-orange-50"
              >
                <Flame className="w-4 h-4" />
                <span>The Indian Cuisine &amp; Tandoor Specialist</span>
              </a>

              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Culinary Creations (12 Dishes)
              </a>

              <a
                href="#journey"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Career Journey (25+ Years)
              </a>

              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Accolades &amp; Tatler Award 2025
              </a>

              <a
                href="#kitchen-brigade"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Kitchen Brigade Culture &amp; Mentorship
              </a>

              <a
                href="#endorsements"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] border-b border-stone-100 block px-2 rounded-lg active:bg-stone-50"
              >
                Professional References
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#D95D26] block px-2 rounded-lg active:bg-stone-50"
              >
                Direct Contact &amp; Inquiry
              </a>

              <div className="pt-3 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-[#D95D26] hover:bg-[#B84714] text-white py-3.5 rounded-xl text-center font-bold shadow-saffron flex items-center justify-center gap-2 uppercase tracking-wider text-xs active:scale-98"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Private Dining / Consultation</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full border border-[#D95D26]/40 hover:border-[#D95D26] bg-white text-[#D95D26] py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-soft-sm active:scale-98"
                >
                  <FileText className="w-4 h-4 text-[#D95D26]" />
                  <span>View &amp; Download Executive CV</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
