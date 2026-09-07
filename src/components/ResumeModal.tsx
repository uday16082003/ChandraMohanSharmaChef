"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, FileText, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#E8DFD3] rounded-3xl p-5 sm:p-10 shadow-2xl z-10 my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E8DFD3] mb-5 sm:mb-6 gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D95D26]/10 border border-[#D95D26]/20 flex items-center justify-center text-[#D95D26] flex-shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="font-cinzel text-base sm:text-xl font-bold text-[#18181B] truncate">Executive Resume</h2>
                <p className="text-[11px] sm:text-xs text-stone-500 font-medium truncate">Chef Chandra Mohan Sharma</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={() => window.print()}
                className="bg-[#D95D26] hover:bg-[#B84714] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
                <span className="sm:hidden">Print</span>
              </button>
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-stone-800 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Printable Sheet Content */}
          <div className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-2xl p-4 sm:p-8 space-y-5 sm:space-y-6 text-sm text-stone-700">
            
            {/* Header */}
            <div className="border-b border-[#E8DFD3] pb-3.5 sm:pb-4">
              <h1 className="font-cinzel text-xl sm:text-3xl font-bold text-[#18181B]">
                CHANDRA MOHAN SHARMA
              </h1>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D95D26] font-bold mt-1">
                Executive Chef • Chef De Cuisine • Indian &amp; South Asian Master
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs text-stone-600 mt-2.5 font-medium">
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#D95D26]" /> +66 61 737 6179</span>
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#2A4736]" /> cmboss@rediffmail.com</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C99224]" /> 191/19 Soi Phuttha Osot, Si Phraya, Bang Rak, Bangkok 10500</span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h3 className="font-bold text-[#18181B] uppercase text-[11px] sm:text-xs tracking-wider mb-1">
                Career Objective &amp; Leadership Vision
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                To utilize attained skills and strategic culinary management leadership to elevate 5-star hotel food operations. Experienced Indian chef skilled in Indian and South Indian cuisines, adhering to international standards in cooking while giving every meal an exciting and unique spin that consistently impresses guests and drives profitability.
              </p>
            </div>

            {/* Work Experiences */}
            <div>
              <h3 className="font-bold text-[#18181B] uppercase text-[11px] sm:text-xs tracking-wider mb-3">
                Professional Experience
              </h3>
              <div className="space-y-3.5 sm:space-y-4">
                
                <div className="border-l-2 border-[#D95D26] pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-xs sm:text-sm text-[#18181B]">
                    <span>The Quartier Hotel Bangkok — Executive Chef</span>
                    <span className="text-[11px] sm:text-xs text-[#D95D26]">Oct 2025 – Present</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Top culinary leadership directing all hotel kitchen operations, multi-outlet menus, cost controls, staffing schedules, and strategic food vision.
                  </p>
                </div>

                <div className="border-l-2 border-[#2A4736] pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-xs sm:text-sm text-[#18181B]">
                    <span>Amari Watergate Bangkok — Chef De Cuisine (Tatler Best 2025)</span>
                    <span className="text-[11px] sm:text-xs text-[#2A4736]">Apr 2025 – Oct 2025</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Directed Indian Food and Grand Banquet operations, authentic flavor development, daily briefings, direct food purchasing, and HACCP compliance.
                  </p>
                </div>

                <div className="border-l-2 border-[#C99224] pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-xs sm:text-sm text-[#18181B]">
                    <span>Maiora Restaurant (NH Collection Dubai Palm) — Head Chef</span>
                    <span className="text-[11px] sm:text-xs text-[#C99224]">Dec 2024 – Feb 2025</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Managed specialized tandoor, delicate curries, and Southern Indian regional specialties in a premier Palm Jumeirah luxury resort.
                  </p>
                </div>

                <div className="border-l-2 border-stone-400 pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-xs sm:text-sm text-[#18181B]">
                    <span>Lebua Hotels &amp; Resorts Bangkok — Outlet Chef (10 Years)</span>
                    <span className="text-[11px] sm:text-xs text-stone-500">Dec 2014 – Feb 2024</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    A decade of luxury outlet operations at State Tower Bangkok, banquet planning, VIP dining, portion control, and waste minimization.
                  </p>
                </div>

                <div className="border-l-2 border-stone-400 pl-3 sm:pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-xs sm:text-sm text-[#18181B]">
                    <span>Hyatt Regency Delhi — Chef De Partie / Commis (9 Years)</span>
                    <span className="text-[11px] sm:text-xs text-stone-500">Oct 2005 – Nov 2014</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Ballroom banquets, Indian curry and tandoor bulk production, junior training, hygiene compliance, awarded Hystar Gold &amp; Diamond honors.
                  </p>
                </div>

              </div>
            </div>

            {/* Accolades & Education Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-[#E8DFD3]">
              <div>
                <h3 className="font-bold text-[#18181B] uppercase text-[11px] sm:text-xs tracking-wider mb-2">
                  Honors &amp; Awards
                </h3>
                <ul className="text-xs space-y-1.5 text-stone-600">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" /> Tatler BEST Thailand 2025 Recommended</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" /> Hystar Gold &amp; Diamond Employee of Quarter (2006)</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" /> Best Employee of the Month (Jan 2010) - Hyatt</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#D95D26] flex-shrink-0" /> Best Employee of the Month (Apr 2011) - Hyatt</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#18181B] uppercase text-[11px] sm:text-xs tracking-wider mb-2">
                  Technical &amp; Academic Qualifications
                </h3>
                <ul className="text-xs space-y-1.5 text-stone-600">
                  <li>• 2-Year Bakery &amp; Confectionery — I.T.D.C. Delhi</li>
                  <li>• 2-Year Culinary Apprenticeship (1998–2001) — Hyatt Regency</li>
                  <li>• Diploma in Yoga &amp; Naturopathy — L.B. University</li>
                  <li>• Graduation — Nagpur University</li>
                </ul>
              </div>
            </div>

            {/* References */}
            <div className="pt-2 border-t border-[#E8DFD3]">
              <h3 className="font-bold text-[#18181B] uppercase text-[11px] sm:text-xs tracking-wider mb-1.5">
                Executive Endorsements
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Khun Deepak Ohri</strong> (Ex-CEO, Lebua Hotels &amp; Resorts: +66 994419999) | <strong>Chef Vikas Shrivastava</strong> (Executive Pastry Chef: +91 9811550564) | <strong>Chef Mehbub Alam</strong> (Executive Sous Chef, Amari Watergate Bangkok: +66 988034461)
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
