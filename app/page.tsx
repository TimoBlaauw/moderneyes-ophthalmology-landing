"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProblemSection } from "@/components/problem-section"
import { AuthorityQuoteSection } from "@/components/authority-quote-section"
import { SolutionSectionNew } from "@/components/solution-section-new"
import { ProofSectionNew } from "@/components/proof-section-new"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { BookingPopup } from "@/components/booking-popup"

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    const handleOpenBooking = () => setBookingOpen(true)
    window.addEventListener("openBooking", handleOpenBooking)
    return () => window.removeEventListener("openBooking", handleOpenBooking)
  }, [])

  return (
    <main id="top" className="min-h-screen bg-white overflow-x-hidden">
      <Header onOpenBooking={() => setBookingOpen(true)} />

      <HeroSection onOpenBooking={() => setBookingOpen(true)} />

      <TrustBar />

      <ProblemSection />

      <AuthorityQuoteSection />

      <SolutionSectionNew />

      <ProofSectionNew />

      <FaqSection />

      <FinalCtaSection onOpenBooking={() => setBookingOpen(true)} />

      <Footer />

      <BookingPopup open={bookingOpen} onOpenChange={setBookingOpen} />
    </main>
  )
}
