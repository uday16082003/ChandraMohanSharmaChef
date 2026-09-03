"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    date: "",
    guests: "",
    eventType: "Private Dining",
    notes: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `*Culinary Booking Inquiry - Chef Chandra Mohan Sharma*%0A%0A*Name:* ${encodeURIComponent(
      bookingData.name
    )}%0A*Event Type:* ${encodeURIComponent(
      bookingData.eventType
    )}%0A*Preferred Date:* ${encodeURIComponent(
      bookingData.date
    )}%0A*Guests:* ${encodeURIComponent(
      bookingData.guests
    )}%0A*Special Notes:* ${encodeURIComponent(bookingData.notes)}`;

    window.open(`https://wa.me/66617376179?text=${whatsappText}`, "_blank");
    onClose();
  };

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
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-[#E8DFD3] rounded-3xl p-5 sm:p-8 shadow-2xl z-10 my-auto"
        >
          <div className="flex items-center justify-between pb-3.5 border-b border-[#E8DFD3]">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D95D26] font-bold">Reserve Experience</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#18181B]">Private Dining &amp; Event Booking</h2>
            </div>
            <button
              onClick={onClose}
              className="text-stone-500 hover:text-stone-800 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 mt-5">
            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name / Organization"
                value={bookingData.name}
                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26]"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                  Guest Count
                </label>
                <input
                  type="number"
                  min="2"
                  max="2000"
                  placeholder="e.g. 12 or 300"
                  value={bookingData.guests}
                  onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                Event Format
              </label>
              <select
                value={bookingData.eventType}
                onChange={(e) => setBookingData({ ...bookingData, eventType: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26]"
              >
                <option value="Private Dining">Exclusive Private Dining at Villa / Residence</option>
                <option value="Luxury Wedding / Grand Banquet">Luxury Wedding / Grand Hotel Banquet Catering</option>
                <option value="Restaurant Menu & Operational Consulting">Restaurant Menu &amp; Operational Consulting</option>
                <option value="Executive Masterclass & Live Kitchen">Executive Masterclass &amp; Live Kitchen Demonstration</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 mb-1 font-bold">
                Special Requests &amp; Dietary Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Specify cuisines, dietary needs, venue details, or favorite dishes..."
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-[#E8DFD3] rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-stone-900 text-sm focus:outline-none focus:border-[#D95D26]"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3.5 border-t border-[#E8DFD3]">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#D95D26] hover:bg-[#B84714] text-white px-6 py-3 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-saffron cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm via WhatsApp</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
