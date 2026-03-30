"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function AuthorityQuoteSection() {
  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white relative overflow-hidden">
      {/* Background subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(2, 157, 218, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          {/* Pre-heading */}
          <p
            className="text-center text-xs md:text-sm font-semibold tracking-wide uppercase mb-5 md:mb-6"
            style={{ color: "#029DDA" }}
          >
            A careful recommendation starts with the right measurements.
          </p>

          {/* Card */}
          <div
            className="relative mx-auto max-w-[720px] p-6 md:p-8 rounded-[24px] shadow-premium-lg overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #003775 0%, #0B4F8A 60%, #0D5F95 100%)",
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-xl"
              style={{ backgroundColor: "rgba(2, 157, 218, 0.1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-36 h-36 rounded-full blur-lg"
              style={{ backgroundColor: "rgba(2, 157, 218, 0.08)" }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-5 md:mb-6"
                style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
              >
                <Quote className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#029DDA" }} />
              </div>

              <blockquote className="text-base md:text-lg lg:text-[1.35rem] leading-[1.7] text-white quote-serif max-w-[620px] mx-auto">
                &ldquo;The right procedure depends on careful measurements, your visual goals, and a
                full eye evaluation — not a one-size-fits-all recommendation.&rdquo;
              </blockquote>

              {/* Decorative line */}
              <div
                className="w-16 md:w-20 h-1 mx-auto mt-5 md:mt-6 rounded-full"
                style={{ backgroundColor: "#029DDA" }}
              />

              <p className="mt-4 md:mt-5 text-white/70 text-xs md:text-sm font-medium">
                (clinic name placeholder) care team
              </p>

              <p className="mt-2 text-white/50 text-[11px] md:text-xs max-w-[560px] mx-auto leading-relaxed">
                Suitability for LASIK, cataract surgery, premium lens options, or other treatments
                depends on your eye health, measurements, and goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
