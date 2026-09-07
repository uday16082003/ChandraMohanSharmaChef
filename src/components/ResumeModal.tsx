"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, FileText, CheckCircle2, Phone, Mail, MapPin, Award, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const resumeRef = useRef<HTMLDivElement | null>(null);

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

  const handleDirectDownloadPDF = async () => {
    if (!resumeRef.current || isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    try {
      const element = resumeRef.current;
      
      // Render the resume element to high-res canvas (scale: 2 for crisp 300 DPI equivalent)
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#FAF7F2"
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      
      // Standard A4 dimensions in mm: 210 x 297
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pdfWidth = 210;
      const pdfHeight = 297;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pdfHeight;
      }

      // Directly trigger file download in browser
      pdf.save("Chef_Chandra_Mohan_Sharma_Executive_Resume.pdf");
    } catch (err) {
      console.error("Failed to generate direct PDF, using print fallback:", err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleDownloadDoc = () => {
    const resumeText = `EXECUTIVE RESUME: CHEF CHANDRA MOHAN SHARMA
=====================================================
Designation: Executive Chef | Indian & International Cuisine | Luxury Hospitality
Location: 191/19 Soi Phuttha Osot, Si Phraya, Bang Rak, Bangkok 10500
Phone / WhatsApp: +66 61 737 6179
Email: cmboss@rediffmail.com
Honors: Tatler Best Thailand 2025 Recommended Chef

CAREER OBJECTIVE & LEADERSHIP VISION:
To utilize attained skills and strategic culinary management leadership to elevate 5-star hotel food operations. Experienced Indian chef skilled in Indian and South Indian cuisines, adhering to international standards in cooking while giving every meal an exciting and unique spin that consistently impresses guests and drives profitability.

PROFESSIONAL EXPERIENCE:
1. The Quartier Hotel Bangkok — Executive Chef (Oct 2025 – Present)
   Top culinary leadership directing all hotel kitchen operations, multi-outlet menus, cost controls, staffing schedules, and strategic food vision.

2. Amari Watergate Bangkok — Chef De Cuisine (Tatler Best 2025) (Apr 2025 – Oct 2025)
   Directed Indian Food and Grand Banquet operations, authentic flavor development, daily briefings, direct food purchasing, and HACCP compliance.

3. Maiora Restaurant (NH Collection Dubai Palm) — Head Chef (Dec 2024 – Feb 2025)
   Managed specialized tandoor, delicate curries, and Southern Indian regional specialties in a premier Palm Jumeirah luxury resort.

4. Lebua Hotels & Resorts Bangkok — Outlet Chef (Dec 2014 – Feb 2024, 10 Years)
   A decade of luxury outlet operations at State Tower Bangkok, banquet planning, VIP dining, portion control, and waste minimization.

5. Hyatt Regency Delhi — Chef De Partie / Commis (Oct 2005 – Nov 2014, 9 Years)
   Ballroom banquets, Indian curry and tandoor bulk production, junior training, hygiene compliance, awarded Hystar Gold & Diamond honors.

HONORS & AWARDS:
- Tatler BEST Thailand 2025 Recommended
- Hystar Gold & Diamond Employee of the Quarter (2006) - Hyatt Regency Delhi
- Best Employee of the Month (Jan 2010) - Hyatt Regency Delhi
- Best Employee of the Month (Apr 2011) - Hyatt Regency Delhi

TECHNICAL & ACADEMIC QUALIFICATIONS:
- 2-Year Bakery & Confectionery — I.T.D.C. Delhi
- 2-Year Culinary Apprenticeship (1998–2001) — Hyatt Regency Delhi
- Diploma in Yoga & Naturopathy — L.B. University
- Graduation — Nagpur University

EXECUTIVE ENDORSEMENTS:
- Khun Deepak Ohri (Ex-CEO, Lebua Hotels & Resorts: +66 994419999)
- Chef Vikas Shrivastava (Executive Pastry Chef: +91 9811550564)
- Romano Kreutz (Director of Culinary, IHG Hotels & Resorts / Ex-Executive Chef Amari Bangkok: +66 (0) 633 258 381, romanokreutz@aol.com)
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Chef_Chandra_Mohan_Sharma_Executive_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto resume-modal-overlay">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm cursor-pointer no-print"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#E8DFD3] rounded-3xl p-5 sm:p-10 shadow-2xl z-10 my-auto resume-modal-sheet"
        >
          {/* Top Bar (Hidden on print) */}
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E8DFD3] mb-5 sm:mb-6 gap-3 no-print">
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
              {/* Direct PDF File Download */}
              <button
                onClick={handleDirectDownloadPDF}
                disabled={isGeneratingPdf}
                className="bg-[#D95D26] hover:bg-[#B84714] disabled:opacity-75 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
                title="Directly download PDF file to your device"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              {/* Text File Download */}
              <button
                onClick={handleDownloadDoc}
                className="border border-[#E8DFD3] hover:border-[#D95D26] bg-[#FAF7F2] hover:bg-white text-stone-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                title="Download plain text / doc format"
              >
                <FileText className="w-3.5 h-3.5 text-[#D95D26]" />
                <span>.DOC</span>
              </button>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                className="border border-[#E8DFD3] hover:border-stone-400 bg-white text-stone-700 p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                title="Print CV via Printer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Print</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-stone-800 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Printable Sheet Content (Captured by html2canvas for Direct PDF) */}
          <div
            ref={resumeRef}
            id="printable-resume-card"
            className="bg-[#FAF7F2] border border-[#E8DFD3] rounded-2xl p-4 sm:p-8 space-y-5 sm:space-y-6 text-sm text-stone-700 resume-inner-card"
          >
            
            {/* Header with Chef Portrait Photo */}
            <div className="border-b border-[#E8DFD3] pb-4 sm:pb-5 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left flex-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D95D26]/10 border border-[#D95D26]/30 text-[#D95D26] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#D95D26]" />
                  <span>Tatler Best Thailand 2025 Recommended Chef</span>
                </div>

                <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                  CHANDRA MOHAN SHARMA
                </h1>
                
                <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D95D26] font-bold">
                  Executive Chef • Chef De Cuisine • Indian &amp; South Asian Master
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 text-xs text-stone-600 pt-1 font-medium">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#D95D26]" /> +66 61 737 6179</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#2A4736]" /> cmboss@rediffmail.com</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C99224]" /> 191/19 Soi Phuttha Osot, Si Phraya, Bang Rak, Bangkok 10500</span>
                </div>
              </div>

              {/* Chef Photo Frame */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#D95D26]/30 shadow-md bg-stone-100 flex-shrink-0">
                <Image
                  src="/images/chef-chandra.png"
                  alt="Executive Chef Chandra Mohan Sharma Portrait"
                  fill
                  className="object-cover"
                  priority
                />
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
                <strong>Khun Deepak Ohri</strong> (Ex-CEO, Lebua Hotels &amp; Resorts: +66 994419999) | <strong>Chef Vikas Shrivastava</strong> (Executive Pastry Chef: +91 9811550564) | <strong>Romano Kreutz</strong> (Director of Culinary, IHG Hotels &amp; Resorts / Ex-Executive Chef Amari Bangkok: +66 (0) 633 258 381)
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
