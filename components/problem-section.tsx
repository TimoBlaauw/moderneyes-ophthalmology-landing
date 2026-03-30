"use client"

import { Check } from "lucide-react"
import { LasikCalculatorBatigoz } from "./lasik-calculator-batigoz"
import Image from "next/image"
import { motion } from "framer-motion"

const experiencingIssues = [
  "Relying on glasses or contacts every day",
  "Blurry distance or near vision affecting work, driving, or daily life",
  "Not knowing whether LASIK, EVO ICL, RLE, or cataract surgery may fit your needs",
  "Getting broad answers instead of advice based on detailed testing",
  "Wondering how age, dry eye, corneal shape, or prescription strength affect your options",
  "Delaying a decision because you want clear, calm information first",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, #f8fbfd 0%, white 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-5"
              style={{
                backgroundColor: "rgba(2, 157, 218, 0.1)",
                color: "#0B4F8A",
                border: "1px solid rgba(2, 157, 218, 0.3)",
              }}
            >
              COMMON CONCERNS
            </span>
            <h2
              className="text-2xl md:text-[2.1rem] lg:text-[2.55rem] font-bold text-balance"
              style={{ color: "#003775" }}
            >
              You may be here because you&apos;re tired of:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center mb-14">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-8"
            >
              <ul className="space-y-0.5">
                {experiencingIssues.map((issue, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-2.5 rounded-2xl transition-all hover:bg-[#f8fbfd] group"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:shadow-glow transition-shadow"
                      style={{ backgroundColor: "#029DDA" }}
                    >
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>

                    <span
                      className="text-[15px] md:text-base leading-[1.55]"
                      style={{ color: "#424342" }}
                    >
                      {issue}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="relative max-w-[260px] mx-auto lg:ml-auto">
                <div
                  className="absolute -top-3 -right-3 w-16 h-16 rounded-full blur-lg"
                  style={{ backgroundColor: "rgba(2, 157, 218, 0.2)" }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full blur-xl"
                  style={{ backgroundColor: "rgba(2, 157, 218, 0.15)" }}
                />

                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium-lg img-zoom">
                  <Image
                    src="/images/hero-woman-eye-specialists.jpg"
                    alt="Patient receiving eye care consultation"
                    fill
                    className="object-cover object-[80%_center]"
                    sizes="(max-width: 1024px) 100vw, 260px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(0, 55, 117, 0.1) 100%)",
                    }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-full bg-white shadow-premium border border-[#C0D8E8]"
                >
                  <p
                    className="text-[11px] font-semibold text-center leading-tight whitespace-nowrap"
                    style={{ color: "#0B4F8A" }}
                  >
                    Personalized care for every patient
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div id="tarieven" className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-[34px] opacity-50 blur-lg"
              style={{ backgroundColor: "rgba(2, 157, 218, 0.1)" }}
            />

            <div
              className="relative p-6 md:p-8 rounded-[28px] shadow-premium-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f8fbfd 0%, #E8F4FA 100%)",
                border: "1px solid rgba(2, 157, 218, 0.2)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-56 h-56 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(2, 157, 218, 0.3), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide mb-4"
                    style={{
                      backgroundColor: "rgba(2, 157, 218, 0.15)",
                      color: "#0B4F8A",
                    }}
                  >
                    SAVINGS CALCULATOR
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: "#003775" }}
                  >
                    Concerned about cost?
                  </h3>
                  <p className="text-base md:text-lg mb-2" style={{ color: "#424342" }}>
                    How much could you save over a lifetime?
                  </p>
                  <p className="text-sm md:text-base max-w-3xl mx-auto" style={{ color: "#5A7A8F" }}>
                    Glasses, contacts, solutions, prescription sunglasses, and replacement costs can
                    add up over time. A consultation can help you understand your options and what may
                    make sense financially and clinically.
                  </p>
                </div>

                <LasikCalculatorBatigoz />

                <p className="text-center text-sm mt-7" style={{ color: "#5A7A8F" }}>
                  This is an estimate. Your personal situation will always be discussed during the
                  consultation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
