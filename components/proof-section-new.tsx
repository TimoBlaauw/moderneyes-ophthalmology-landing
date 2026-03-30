'use client';

import { Card } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle2, Sparkles, Shield, Clock, Heart, Award } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const doctors = [
  {
    name: "Perry S. Mollick, MD",
    role: "Founder — Cataract Surgery & Laser Vision",
    image: "/images/dr-mollick.jpg"
  },
  {
    name: "Andrew P. Greenberg, MD",
    role: "Ophthalmologist & Glaucoma Specialist",
    image: "/images/dr-greenberg.jpg"
  },
  {
    name: "Jamie Nord, MD",
    role: "Corneal & Cataract Specialist",
    image: "/images/dr-nord.jpg"
  },
  {
    name: "Rodney P. Coe, MD",
    role: "Retinal Specialist",
    image: "/images/dr-coe.jpg"
  },
];

const whyChooseFeatures = [
  {
    icon: Award,
    title: "Comprehensive Eye Care",
    description: "Full-spectrum ophthalmology from routine vision screenings to advanced surgical procedures, all under one roof",
    stat: "11+ Services"
  },
  {
    icon: Sparkles,
    title: "Advanced Laser Cataract Surgery",
    description: "State-of-the-art laser cataract surgery with multifocal and astigmatism-correcting intraocular lenses",
    stat: "Since 1984"
  },
  {
    icon: Shield,
    title: "Bladeless LASIK & PRK",
    description: "Cutting-edge bladeless LASIK and PRK procedures with complimentary evaluations to determine candidacy",
    stat: "Free Consults"
  },
  {
    icon: Heart,
    title: "Personalized & Compassionate Care",
    description: "Doctors who take a personal and caring interest in every patient with tailored treatment plans",
    stat: "5-Star Reviews"
  },
  {
    icon: Clock,
    title: "Glaucoma Specialists",
    description: "Fellowship-trained glaucoma specialist offering minimally-invasive glaucoma surgery (MIGS) and advanced treatments",
    stat: "Fellowship-trained"
  },
  {
    icon: CheckCircle2,
    title: "Premier Surgical Facility",
    description: "Surgeries performed at Island Eye Surgery Center — the most advanced ambulatory surgery center on Long Island",
    stat: "Most Advanced"
  },
]

const testimonials = [
  {
    quote: "I felt informed at every step and never pressured into making a decision. The team took time to explain everything clearly.",
    name: "Sarah M.",
    procedure: "LASIK Patient"
  },
  {
    quote: "The consultation was thorough, and I appreciated how clearly my options were explained. They really listened to my concerns.",
    name: "Michael R.",
    procedure: "Cataract Surgery"
  },
  {
    quote: "I came in with a lot of questions and left feeling like I had a plan that fit me. Highly recommend this practice.",
    name: "David K.",
    procedure: "PRK Patient"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const GAP = 16;

export function ProofSectionNew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure the container and derive card width so 4 fit exactly (desktop) or 2 (mobile)
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const containerW = trackRef.current.offsetWidth;
      const isMobile = window.innerWidth < 768;
      const visible = isMobile ? 2 : 4;
      setCardWidth((containerW - GAP * (visible - 1)) / visible);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const visibleCards = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4;
  const maxIndex = Math.max(0, doctors.length - visibleCards);

  const scrollLeft = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const scrollRight = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  return (
    <section className="relative overflow-hidden">
      {/* Why Choose Us Section - Premium Redesign with Parallax */}
      <div
        id="why-choose-us"
        className="relative py-28 md:py-36"
        style={{
          backgroundImage: 'url("/images/refractive-lens-exchange.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Multi-layer gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 42, 94, 0.95) 0%, rgba(3, 50, 105, 0.92) 50%, rgba(5, 65, 120, 0.9) 100%)',
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#029DDA]/8 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#029DDA]/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#029DDA]/5 blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide mb-6 bg-[#029DDA]/15 text-[#029DDA] border border-[#029DDA]/20">
              <Sparkles className="w-4 h-4" />
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why patients choose <br className="hidden md:block" />
              <span className="text-[#029DDA]">our practice</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Excellence in eye care backed by innovation, experience, and a commitment to personalized treatment
            </p>
          </motion.div>

          {/* Premium Feature Cards - Bento Grid Style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative"
                >
                  <div 
                    className="relative p-8 rounded-3xl h-full overflow-hidden transition-all duration-500 hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(2, 157, 218, 0.15)',
                    }}
                  >
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(2, 157, 218, 0.1) 0%, transparent 70%)',
                      }}
                    />

                    {/* Stat badge - top right */}
                    <div className="absolute top-6 right-6">
                      <span 
                        className="text-xs font-bold tracking-wider px-3 py-1.5 rounded-full"
                        style={{ 
                          backgroundColor: 'rgba(2, 157, 218, 0.2)',
                          color: '#029DDA',
                        }}
                      >
                        {feature.stat}
                      </span>
                    </div>

                    {/* Icon with layered glow */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-[#029DDA] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div
                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: 'linear-gradient(135deg, #029DDA 0%, #0280B5 100%)',
                        }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#029DDA] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <div 
                      className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: '#029DDA' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Doctors Section - Smaller Cards that fit 4 centered */}
      <div id="meet-the-doctors" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4"
              style={{ backgroundColor: 'rgba(2, 157, 218, 0.1)', color: '#0B4F8A' }}
            >
              OUR TEAM
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#003775" }}>
              Meet the doctors
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5A7A8F" }}>
              Our team of ophthalmologists provides personalized care based on your unique evaluation.
            </p>
          </motion.div>

          {/* Doctor carousel — exactly 4 cards on desktop, 2 on mobile */}
          <div className="relative">
            {/* Outer container — ref used to measure available width */}
            <div className="overflow-hidden" ref={trackRef}>
              <motion.div
                className="flex"
                style={{ gap: GAP }}
                animate={{ x: cardWidth > 0 ? -(currentIndex * (cardWidth + GAP)) : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {doctors.map((doctor, index) => (
  <div
    key={index}
    className="flex-shrink-0"
    style={{ width: cardWidth > 0 ? cardWidth : "25%" }}
  >
    <Card
      className="p-0 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-premium-lg group"
      style={{ border: "1px solid #C0D8E8" }}
    >
      {/* Image flush to card top */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(0,55,117,0.9) 100%)",
          }}
        />
      </div>

      {/* Info */}
      <div className="p-3 md:p-4">
        <h4
          className="text-xs md:text-sm font-bold mb-1 leading-tight"
          style={{ color: "#003775" }}
        >
          {doctor.name}
        </h4>
        <p
          className="text-xs font-medium leading-snug"
          style={{ color: "#029DDA" }}
        >
          {doctor.role}
        </p>
      </div>
    </Card>
  </div>
))}
              </motion.div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-10">
              <Button
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="rounded-full w-11 h-11 bg-white disabled:opacity-30 transition-all hover:shadow-md"
                style={{ borderColor: "#029DDA", color: "#0B4F8A" }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={scrollRight}
                disabled={currentIndex >= maxIndex}
                variant="outline"
                size="icon"
                className="rounded-full w-11 h-11 bg-white disabled:opacity-30 transition-all hover:shadow-md"
                style={{ borderColor: "#029DDA", color: "#0B4F8A" }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Clean Design */}
      <div 
        id="ervaringen" 
        className="py-24 md:py-32"
        style={{ backgroundColor: '#E8F4FA' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4"
              style={{ backgroundColor: 'rgba(2, 157, 218, 0.15)', color: '#0B4F8A' }}
            >
              PATIENT STORIES
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#003775" }}>
              What patients say
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5A7A8F" }}>
              Real experiences from patients who trusted us with their vision care
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card
                  className="p-8 rounded-3xl h-full flex flex-col bg-white transition-all hover:shadow-premium-lg relative overflow-hidden group"
                  style={{ border: '1px solid #C0D8E8' }}
                >
                  {/* Decorative quote background */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote className="w-20 h-20" style={{ color: '#029DDA' }} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-current" 
                        style={{ color: '#029DDA' }} 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote 
                    className="flex-1 text-base md:text-lg leading-relaxed mb-6 quote-serif"
                    style={{ color: "#424342" }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="pt-5 border-t" style={{ borderColor: '#C0D8E8' }}>
                    <p className="font-bold text-sm" style={{ color: '#003775' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: '#5A7A8F' }}>
                      {testimonial.procedure}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
