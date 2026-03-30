'use client';

import { ArrowRight, Calendar, Microscope, MessageCircle, ClipboardCheck, Clock, CheckCircle2, Users } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

const treatments = [
  {
    name: "LASIK / PRK",
    description: "Laser vision correction may help reduce dependence on glasses or contacts for selected patients. The clinic offers WaveLight PLUS technology as part of its refractive surgery offering.",
    image: "/images/smile-lasik.jpg"
  },
  {
    name: "EVO ICL",
    description: "EVO ICL is a lens-based vision correction option for some patients with myopia and astigmatism, including some who may not be ideal LASIK candidates.",
    image: "/images/evo-icl.jpg"
  },
  {
    name: "Refractive Lens Exchange",
    description: "RLE replaces the eye's natural lens with an intraocular lens and may be discussed for adults with age-related visual changes or certain refractive goals.",
    image: "/images/refractive-lens-exchange.jpg"
  },
];

const cataractTreatment = {
  name: "Cataract Surgery",
  description: "Cataract surgery removes the cloudy natural lens and replaces it with an intraocular lens. The clinic offers advanced cataract care and discusses lens choices based on vision needs, astigmatism, and daily activities.",
  image: "/images/lasik-background-picture.png"
};

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Schedule your visit",
    shortDesc: "Book a free consultation for vision correction or request a cataract evaluation based on your needs.",
    expandedTitle: "Your journey starts with a simple call",
    expandedDesc: "Whether you're exploring LASIK, considering cataract surgery, or just want to understand your options, we make scheduling easy. Choose a time that works for you at either our Fairfax or Gainesville location.",
    details: [
      "Free initial consultation for refractive surgery candidates",
      "Flexible scheduling including select evening appointments",
      "Virtual pre-screening available for some evaluations",
      "No referral needed for most consultations"
    ],
    duration: "5 min to schedule",
    image: "/images/lasik-surgery.jpg"
  },
  {
    number: "02",
    icon: Microscope,
    title: "Get detailed measurements",
    shortDesc: "Your prescription, eye health, and medical history are reviewed to understand which options may be appropriate.",
    expandedTitle: "Comprehensive diagnostic testing",
    expandedDesc: "Using advanced diagnostic equipment, we map your cornea, measure your eye's unique characteristics, and assess your overall eye health. These precise measurements help determine which procedures may be right for you.",
    details: [
      "Corneal topography and thickness mapping",
      "Wavefront aberrometry for precision analysis",
      "Tear film and dry eye evaluation",
      "Complete dilated eye examination"
    ],
    duration: "60-90 minutes",
    image: "/images/refractive-lens-exchange.jpg"
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Review your options",
    shortDesc: "Your specialist explains possible treatments, trade-offs, and whether you may be a candidate.",
    expandedTitle: "A personalized discussion with your doctor",
    expandedDesc: "Based on your test results and lifestyle goals, your ophthalmologist will walk you through which procedures could work for you — and which might not. This is your time to ask questions and understand the pros and cons of each approach.",
    details: [
      "Side-by-side comparison of suitable procedures",
      "Honest assessment of expected outcomes",
      "Discussion of risks and recovery timeline",
      "Cost transparency and financing options"
    ],
    duration: "30-45 minutes",
    image: "/images/evo-icl.jpg"
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Move forward with a plan",
    shortDesc: "If treatment makes sense for you, you'll receive next steps, timing guidance, and time to ask questions.",
    expandedTitle: "Clear next steps, no pressure",
    expandedDesc: "If you decide to proceed, we'll schedule your procedure and give you everything you need to prepare. If you'd like more time to think, that's perfectly fine too. We're here whenever you're ready.",
    details: [
      "Pre-operative instructions and preparation guide",
      "Surgery date scheduling at your convenience",
      "Direct line to your care coordinator",
      "Post-operative care plan overview"
    ],
    duration: "Your timeline",
    image: "/images/smile-lasik.jpg"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function SolutionSectionNew() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="behandeling" className="relative overflow-hidden">
      {/* Treatment Options Section - Dark background */}
      <div 
        className="py-24 md:py-32"
        style={{
          background: 'linear-gradient(135deg, #003775 0%, #0B4F8A 50%, #0D5F95 100%)',
        }}
      >
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23029DDA' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4 bg-[#029DDA]/20 text-[#029DDA]">
              TREATMENT OPTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Vision Correction Procedures
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Advanced treatments tailored to your unique vision needs and lifestyle
            </p>
          </motion.div>

          {/* Treatment Cards - Premium Cinematic Design */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={treatment.image || "/placeholder.svg"}
                    alt={treatment.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 55, 117, 0.3) 0%, rgba(0, 55, 117, 0.6) 50%, rgba(0, 55, 117, 0.95) 100%)',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {treatment.name}
                  </h3>
                  
                  {/* Description - reveals on hover */}
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-4 opacity-80 group-hover:opacity-100">
                    {treatment.description}
                  </p>

                  {/* CTA */}
                  
                </div>

                {/* Border glow on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 0 2px rgba(2, 157, 218, 0.5)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cataract Section - Light background */}
      <div id="cataract" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4"
              style={{ backgroundColor: 'rgba(2, 157, 218, 0.1)', color: '#0B4F8A' }}
            >
              CATARACT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#003775" }}>
              Cataract Surgery
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            {/* Mobile: stacked image + text. Desktop: wide cinematic card */}
            <div className="rounded-3xl overflow-hidden group cursor-pointer shadow-premium-lg">
              {/* Desktop layout — wide aspect ratio with text overlaid */}
              <div
                className="relative hidden md:block"
                style={{ aspectRatio: '16/7' }}
              >
                <Image
                  src={cataractTreatment.image || "/placeholder.svg"}
                  alt={cataractTreatment.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, rgba(0,55,117,0.95) 0%, rgba(0,55,117,0.7) 50%, rgba(0,55,117,0.3) 100%)' }}
                />
                <div className="absolute inset-0 flex items-center p-12">
                  <div className="max-w-lg">
                    <h3 className="text-4xl font-bold text-white mb-4">{cataractTreatment.name}</h3>
                    <p className="text-white/80 text-lg leading-relaxed">{cataractTreatment.description}</p>
                  </div>
                </div>
              </div>

              {/* Mobile layout — image on top, text below */}
              <div className="md:hidden">
                <div className="relative" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={cataractTreatment.image || "/placeholder.svg"}
                    alt={cataractTreatment.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(0,55,117,0.2) 0%, rgba(0,55,117,0.7) 100%)' }}
                  />
                </div>
                <div className="p-6" style={{ backgroundColor: '#003775' }}>
                  <h3 className="text-2xl font-bold text-white mb-3">{cataractTreatment.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{cataractTreatment.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How it works - Premium Interactive Timeline with Expanded Detail Panel */}
      <div 
        id="how-it-works" 
        className="py-28 md:py-36 relative overflow-hidden"
        style={{ backgroundColor: '#f8fbfd' }}
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <div 
            className="absolute top-20 right-20 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(2, 157, 218, 0.15) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-20 right-40 w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(2, 157, 218, 0.1) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span 
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-5"
              style={{ backgroundColor: 'rgba(2, 157, 218, 0.15)', color: '#0B4F8A' }}
            >
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5" style={{ color: "#003775" }}>
              How your consultation works
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#5A7A8F' }}>
              A clear, guided process from first contact to personalized care
            </p>
          </motion.div>

          {/* Premium Timeline Layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left side - Interactive steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index
                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ x: 4 }}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'bg-white shadow-premium-lg border-l-4' 
                        : 'bg-white/50 hover:bg-white hover:shadow-md border-l-4 border-transparent'
                    }`}
                    style={{ 
                      borderLeftColor: isActive ? '#029DDA' : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step number */}
                      <div 
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          isActive ? 'shadow-lg' : ''
                        }`}
                        style={{ 
                          backgroundColor: isActive ? '#029DDA' : 'rgba(2, 157, 218, 0.15)',
                          color: isActive ? 'white' : '#0B4F8A',
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 
                          className="text-lg font-bold mb-0.5 transition-colors duration-300"
                          style={{ color: isActive ? '#003775' : '#424342' }}
                        >
                          {step.title}
                        </h4>
                        <p 
                          className="text-sm leading-relaxed line-clamp-1"
                          style={{ color: "#5A7A8F" }}
                        >
                          {step.shortDesc}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <ArrowRight 
                        className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                        style={{ color: '#029DDA' }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Right side - Expanded detail card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden shadow-premium-lg bg-white"
                >
                  {/* Image header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      fill
                      className="object-cover"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 55, 117, 0.4) 0%, rgba(0, 55, 117, 0.8) 100%)',
                      }}
                    />
                    
                    {/* Step badge */}
                    <div className="absolute top-6 left-6">
                      <span 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                        style={{ backgroundColor: 'rgba(2, 157, 218, 0.9)', color: '#003775' }}
                      >
                        Step {steps[activeStep].number}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-6 right-6">
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white"
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {steps[activeStep].duration}
                      </span>
                    </div>

                    {/* Title on image */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {steps[activeStep].expandedTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-8">
                    {/* Description */}
                    <p 
                      className="text-base md:text-lg leading-relaxed mb-8"
                      style={{ color: '#424342' }}
                    >
                      {steps[activeStep].expandedDesc}
                    </p>

                    {/* Details list */}
                    <div className="space-y-3 mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: '#5A7A8F' }}>
                        What to expect
                      </h4>
                      {steps[activeStep].details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 
                            className="w-5 h-5 flex-shrink-0 mt-0.5" 
                            style={{ color: '#029DDA' }} 
                          />
                          <span className="text-sm" style={{ color: '#424342' }}>
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: '#C0D8E8' }}>
                      <div className="flex gap-2">
                        {steps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                            style={{ 
                              backgroundColor: index === activeStep ? '#029DDA' : '#C0D8E8',
                              transform: index === activeStep ? 'scale(1.3)' : 'scale(1)',
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs" style={{ color: '#5A7A8F' }}>
                        Step {activeStep + 1} of {steps.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
