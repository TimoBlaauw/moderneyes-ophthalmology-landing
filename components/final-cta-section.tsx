"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, ArrowUp, ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

type FinalCtaSectionProps = {
  onOpenBooking: () => void
}

const checklist = [
  "Thorough measurement and evaluation of your eyes",
  "Personalized advice tailored to your situation",
  "Clear answers to all your questions — no pressure",
]

export function FinalCtaSection({ onOpenBooking }: FinalCtaSectionProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#E8F4FA" }}
    >
      {/* Background decorative elements */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Headline & Description */}
            <div className="space-y-4">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide"
                style={{
                  backgroundColor: "rgba(2, 157, 218, 0.15)",
                  color: "#0B4F8A",
                }}
              >
                GET STARTED
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: "#003775" }}
              >
                Schedule Your Free Consultation
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: "#5A7A8F" }}
              >
                See what&apos;s possible for your vision — with a specialist
                evaluation you can trust.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: "#029DDA" }}
                  >
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <p
                    className="text-base md:text-lg pt-2"
                    style={{ color: "#424342" }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Card A - Primary (Schedule) */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 shadow-premium-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #003775 0%, #0B4F8A 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-full blur-lg"
                  style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
                />

                <div className="relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white/80 mb-2">
                    Ready for the next step?
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Book your free consultation today
                  </p>
                  <Button
                    onClick={onOpenBooking}
                    className="w-full rounded-full font-semibold text-[#003775] text-base py-6 btn-premium group"
                    style={{ backgroundColor: "#029DDA" }}
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              {/* Card B - Secondary (Brochure) */}
              <Dialog>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-3xl p-6 bg-white shadow-premium"
                  style={{ border: "1px solid #C0D8E8" }}
                >
                  <div>
                    <h3
                      className="text-sm font-bold uppercase tracking-wide mb-2"
                      style={{ color: "#003775" }}
                    >
                      Want to learn more first?
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "#5A7A8F" }}
                    >
                      Get our free information guide
                    </p>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full rounded-full font-semibold text-base py-6 border-2 transition-all hover:shadow-md bg-transparent group"
                        style={{
                          color: "#0B4F8A",
                          borderColor: "#029DDA",
                        }}
                      >
                        Download Brochure
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </motion.div>

                {/* Brochure Modal */}
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle style={{ color: "#003775" }}>
                      Download the Free Information Brochure
                    </DialogTitle>
                    <DialogDescription style={{ color: "#5A7A8F" }}>
                      A clear explanation in plain language, so you know exactly
                      what questions to ask.
                    </DialogDescription>
                  </DialogHeader>

                  {!submitted ? (
                    <form
                      onSubmit={handleBrochureSubmit}
                      className="space-y-4"
                    >
                      <div
                        className="p-4 rounded-xl"
                        style={{ backgroundColor: "#E8F4FA" }}
                      >
                        <p
                          className="text-sm font-semibold mb-2"
                          style={{ color: "#003775" }}
                        >
                          What you&apos;ll receive:
                        </p>
                        <ul
                          className="text-sm space-y-1"
                          style={{ color: "#5A7A8F" }}
                        >
                          <li>Explanation of treatment options</li>
                          <li>What you can and cannot expect</li>
                          <li>Recovery & aftercare</li>
                          <li>Cost overview</li>
                          <li>Consultation checklist</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          style={{ color: "#003775" }}
                        >
                          First Name *
                        </Label>
                        <Input id="firstName" required className="rounded-xl" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" style={{ color: "#003775" }}>
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="rounded-xl"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="consent" required />
                        <label
                          htmlFor="consent"
                          className="text-sm leading-none"
                          style={{ color: "#5A7A8F" }}
                        >
                          I agree to receive the guide via email
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full font-semibold text-white rounded-full py-6"
                        style={{ backgroundColor: "#029DDA" }}
                      >
                        Send the Guide
                      </Button>

                      <p
                        className="text-xs text-center"
                        style={{ color: "#5A7A8F" }}
                      >
                        We only use your information to process your request. You
                        can unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{
                          backgroundColor: "rgba(2, 157, 218, 0.15)",
                        }}
                      >
                        <Check
                          className="w-8 h-8"
                          style={{ color: "#029DDA" }}
                        />
                      </div>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "#003775" }}
                      >
                        Check your email for the information brochure!
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div
                className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 rounded-full blur-lg"
                style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(2, 157, 218, 0.15)" }}
              />

              {/* Image */}
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-premium-lg img-zoom">
                <Image
                  src="/images/woman-eye-test-final-cta.jpg"
                  alt="Eye examination consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 70%, rgba(0, 55, 117, 0.2) 100%)",
                  }}
                />
              </div>

              {/* Back to Top Link */}
              <a
                href="#top"
                className="relative z-20 inline-flex items-center gap-2 text-sm mt-6 transition-colors cursor-pointer"
                style={{ color: "#5A7A8F" }}
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
