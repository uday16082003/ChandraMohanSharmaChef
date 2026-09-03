"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { NetflixIntro } from "@/components/NetflixIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CricketerShoutouts } from "@/components/CricketerShoutouts";
import { Philosophy } from "@/components/Philosophy";
import { InnovationAndStyle } from "@/components/InnovationAndStyle";
import { TandoorSpecialist } from "@/components/TandoorSpecialist";
import { CulinaryShowcase } from "@/components/CulinaryShowcase";
import { DishModal } from "@/components/DishModal";
import { CareerTimeline } from "@/components/CareerTimeline";
import { Accolades } from "@/components/Accolades";
import { KitchenBrigade } from "@/components/KitchenBrigade";
import { Endorsements } from "@/components/Endorsements";
import { ContactSection } from "@/components/ContactSection";
import { ResumeModal } from "@/components/ResumeModal";
import { BookingModal } from "@/components/BookingModal";
import { Footer } from "@/components/Footer";
import { Dish } from "@/data/dishes";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#18181B] overflow-x-hidden font-sans">
      {/* Cinematic Intro Portal */}
      {!hasEntered && (
        <NetflixIntro onEnter={() => setHasEntered(true)} />
      )}

      {/* Main Website (Revealed once user clicks Enter) */}
      <AnimatePresence>
        {hasEntered && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full"
          >
            {/* Floating Saffron Ember & Botanical Dust Canvas */}
            <ParticleCanvas />

            {/* Master Navigation */}
            <Navbar
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Hero Spotlight */}
            <Hero onOpenBooking={() => setIsBookingOpen(true)} />

            {/* 1. Famous Cricketers & Celebrity Video / Photo Shoutouts (Immediately following Hero) */}
            <CricketerShoutouts />

            {/* 2. The Culinary Creed: Tradition Elevated by Modern Mastery (Philosophy) */}
            <Philosophy />

            {/* 3. Signature Concepts, Presentation Style & Collaborations */}
            <InnovationAndStyle />

            {/* 4. The Indian Cuisine & Tandoor Specialist (Live GIF + Clay Oven Fire) */}
            <TandoorSpecialist />

            {/* 5. Signature Culinary Showcase & Menu */}
            <CulinaryShowcase onSelectDish={(dish) => setSelectedDish(dish)} />

            {/* 6. 20+ Years Executive Career Journey Timeline */}
            <CareerTimeline />

            {/* 7. Accolades, Credentials & Academics */}
            <Accolades />

            {/* 8. Inspiring High-Performance Kitchen Teams & Brigade Mentorship */}
            <KitchenBrigade />

            {/* 9. Industry Executive References & Endorsements */}
            <Endorsements />

            {/* 10. Contact & Private Dining / Consultation Booking */}
            <ContactSection />

            {/* Footer */}
            <Footer />

            {/* Interactive Modals */}
            <DishModal
              dish={selectedDish}
              onClose={() => setSelectedDish(null)}
            />

            <ResumeModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
            />

            <BookingModal
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
