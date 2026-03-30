"use client"

import { Award, MapPin, Stethoscope, Star, Eye, CalendarCheck, Users, GraduationCap, Clock, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { icon: CalendarCheck, label: "Serving Long Island since 1984", highlight: "Since 1984" },
  { icon: Users, label: "4 board-certified ophthalmologists", highlight: "4 doctors" },
  { icon: Building2, label: "Island Eye Surgery Center", highlight: "Advanced facility" },
  { icon: GraduationCap, label: "3 of 4 physicians Cornell-trained", highlight: "Cornell-trained" },
  { icon: Clock, label: "Evening & Saturday appointments", highlight: "Flexible hours" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function TrustBar() {
  return (
    <section
      className="relative py-12 md:py-16"
      style={{
        backgroundImage: 'url("/images/lasik-surgery.jpg")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 42, 94, 0.92) 0%, rgba(5, 65, 120, 0.88) 50%, rgba(10, 80, 140, 0.85) 100%)',
        }}
      />

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23029DDA' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#029DDA]/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#029DDA]/10 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#029DDA] font-semibold tracking-wide text-sm uppercase mb-3">
            Trusted Excellence
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Comprehensive eye care on Long Island since 1984
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div 
                  className="relative p-6 md:p-8 rounded-2xl text-center h-full flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(2, 157, 218, 0.25)',
                  }}
                >
                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#029DDA] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#029DDA" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base font-medium text-white leading-snug">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
