"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FlagIcon } from "./FlagIcon";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Executive Hotel Chef Consultation",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `*New Inquiry for Chef Chandra Mohan Sharma*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Service:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/66617376179?text=${whatsappText}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D95D26] font-bold block mb-1.5">Connect Directly</span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#18181B]">
                Engage Chef <span className="text-[#D95D26]">Chandramohan</span>
              </h2>
              <p className="text-stone-600 text-xs sm:text-base mt-2.5 leading-relaxed">
                Available for Executive Hotel Menu Consultation, Private Luxury Dining, Banquet Direction, Pop-Up Masterclasses, and Hospitality Speaking.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Mobile */}
              <a
                href="tel:+66617376179"
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#D95D26] transition-all flex items-center gap-3.5 sm:gap-4 block group shadow-soft-sm"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#D95D26]/10 border border-[#D95D26]/20 flex items-center justify-center text-[#D95D26] group-hover:bg-[#D95D26] group-hover:text-white transition-all flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block font-bold">Direct Mobile &amp; WhatsApp</span>
                  <span className="text-sm sm:text-base font-bold text-[#18181B] group-hover:text-[#D95D26] transition-colors">+66 61 737 6179</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:cmboss@rediffmail.com"
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] hover:border-[#D95D26] transition-all flex items-center gap-3.5 sm:gap-4 block group shadow-soft-sm"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2A4736]/10 border border-[#2A4736]/20 flex items-center justify-center text-[#2A4736] group-hover:bg-[#2A4736] group-hover:text-white transition-all flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block font-bold">Official Email</span>
                  <span className="text-sm sm:text-base font-bold text-[#18181B] group-hover:text-[#2A4736] transition-colors break-all">cmboss@rediffmail.com</span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD3] flex items-center gap-3.5 sm:gap-4 shadow-soft-sm">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#C99224]/10 border border-[#C99224]/20 flex items-center justify-center text-[#C99224] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block font-bold">Culinary Base</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#18181B] flex items-center gap-1.5 flex-wrap">
                    <FlagIcon country="thailand" size="sm" />
                    <span>191/19 Soi Phuttha Osot, Si Phraya, Bang Rak, Bangkok 10500</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Direct CTA */}
            <a
              href="https://wa.me/66617376179?text=Hello%20Chef%20Chandra,%20I%20would%20like%20to%20inquire%20about%20a%20culinary%20event/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A4736] hover:bg-[#1C3325] text-white w-full py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Chat on WhatsApp (+66 617376179)</span>
            </a>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#FAF7F2] border border-[#E8DFD3] shadow-soft-md">
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#18181B] mb-1">
                Send an Executive Inquiry
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mb-5 sm:mb-6">
                Fill out the form below to receive a proposal, tasting menu, or hotel consulting quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sir / Madame / Director"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                    Inquiry Type / Service Scope
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26] transition-colors"
                  >
                    <option value="Executive Hotel Chef Consultation">Executive Hotel Chef Consultation / Menu Engineering</option>
                    <option value="Private Luxury Dining & VIP Catering">Private Luxury Dining &amp; VIP Banquet Catering</option>
                    <option value="Restaurant Concept & Tandoor Masterclass">Restaurant Concept &amp; Tandoor Masterclass</option>
                    <option value="Corporate Hospitality Speaking / Demo">Corporate Hospitality Speaking / Live Demo</option>
                    <option value="Media & Press Inquiry">Media &amp; Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                    Message &amp; Event Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding date, location, guest count, or culinary concept..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#D95D26] hover:bg-[#B84714] text-white w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-saffron transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
