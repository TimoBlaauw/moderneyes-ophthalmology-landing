"use client"

import type React from "react"
import Image from "next/image"
import { Play, Shield, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type HeroSectionProps = {
  onOpenBooking: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <>
    <section
      className="relative overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background-woman.jpg"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />

        {/* Light gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.88) 30%, rgba(255,255,255,0.45) 65%, rgba(255,255,255,0.1) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(232,244,250,0.95) 100%)",
          }}
        />
      </div>

      {/* Content — fills exactly 100vh, with header space at top */}
      <div
        className="relative z-10 flex flex-col justify-center h-full pt-16 pb-4 md:pt-20 md:pb-6"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-2 md:gap-4"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mt-2 md:mt-0">
              <span
                className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide"
                style={{
                  backgroundColor: "rgba(2, 157, 218, 0.1)",
                  color: "#0B4F8A",
                  border: "1px solid rgba(2, 157, 218, 0.3)",
                }}
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#029DDA] animate-pulse" />
                VISION CORRECTION SPECIALISTS
              </span>
            </motion.div>

            {/* Headline — scales with viewport height to keep CTA above fold */}
            <motion.h1
              variants={itemVariants}
              className="font-bold text-balance leading-[1.1]"
              style={{
                color: "#003775",
                fontSize: "clamp(1.5rem, min(4vw, 5vh), 3.25rem)",
              }}
            >
              See what&apos;s possible for your vision — with a{" "}
              <span
                className="relative inline-block"
                style={{ color: "#0B4F8A" }}
              >
                specialist evaluation
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  style={{ height: "12px" }}
                >
                  <path
                    d="M2 8 C50 2, 100 12, 150 6 C200 0, 250 10, 298 4"
                    stroke="#029DDA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              you can trust.
            </motion.h1>

            {/* Desktop subheadline */}
            <motion.p
              variants={itemVariants}
              className="leading-relaxed max-w-3xl mx-auto text-pretty text-base md:text-xl hidden sm:block"
              style={{ color: "#424342" }}
            >
              From laser vision correction to cataract and lens-based procedures,
              our specialists offer advanced eye care, careful guidance, and
              treatment recommendations based on your eyes, goals, and
              measurements.
            </motion.p>

            {/* Mobile subheadline */}
            <motion.p
              variants={itemVariants}
              className="leading-relaxed max-w-3xl mx-auto text-pretty text-base sm:hidden"
              style={{ color: "#424342" }}
            >
              Advanced eye care with personalized treatment recommendations based
              on your eyes and goals.
            </motion.p>

            {/* Video Card */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-3xl flex justify-center"
            >
              <div
                className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-premium-lg group cursor-pointer"
                style={{ aspectRatio: "16/9" }}
              >
                {/* Video placeholder gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #003775 0%, #0B4F8A 50%, #0D5F95 100%)",
                  }}
                />

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23029DDA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <Image
                    src="/images/logo-moderneyes.png"
                    alt="ModernEyes Ophthalmology"
                    width={600}
                    height={240}
                    className="mb-4 md:mb-8 brightness-0 invert opacity-90 max-h-16 md:max-h-24 w-auto"
                  />

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-[#029DDA] blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                    </div>
                  </motion.div>

                  <p className="mt-3 md:mt-6 text-sm md:text-lg font-medium text-white/80">
                    Your doctor&apos;s explainer video will appear here
                  </p>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#029DDA]/40 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#029DDA]/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#029DDA]/40 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#029DDA]/40 rounded-br-lg" />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Button
                size="lg"
                onClick={onOpenBooking}
                className="btn-premium font-semibold text-white rounded-full px-10 py-7 text-lg shadow-glow hover:shadow-glow-strong"
                style={{ backgroundColor: "#029DDA" }}
              >
                Schedule a Free Consultation
              </Button>

              <p className="text-base" style={{ color: "#5A7A8F" }}>
                Get clear answers, a personalized plan, and time to ask every
                question — with no pressure.
              </p>
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #E8F4FA)",
        }}
      />

    </section>

    {/* Trust Badges - below the hero section */}
    <div className="pt-0 pb-0 md:pb-14" style={{ backgroundColor: '#E8F4FA' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: Shield, label: "Advanced Technology" },
            { icon: Award, label: "Expert Surgeons" },
            { icon: Users, label: "75,000+ Procedures" },
          ].map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-premium border border-[#C0D8E8]"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(2, 157, 218, 0.15)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#0B4F8A" }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: "#0B4F8A" }}>
                  {badge.label}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
    </>
  )
}
