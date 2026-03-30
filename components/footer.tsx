"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer 
      id="contact" 
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #003775 0%, #0B4F8A 50%, #0D5F95 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#029DDA]/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#029DDA]/5 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            ModernEyes Ophthalmology
          </h3>
          <p className="text-white/70 text-lg">
            Professional, personalized, and compassionate eye care on Long Island.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Levittown Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(2, 157, 218, 0.15)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(2, 157, 218, 0.2)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#029DDA' }} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Levittown, NY</h4>
                <p className="text-sm text-white/70">
                  3509 Hempstead Turnpike
                  <br />
                  Full-service ophthalmology practice
                </p>
              </div>
            </div>
          </motion.div>

          {/* Surgery Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(2, 157, 218, 0.15)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(2, 157, 218, 0.2)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#029DDA' }} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Island Eye Surgery Center</h4>
                <p className="text-sm text-white/70">
                  Carle Place, Long Island
                  <br />
                  Most advanced ambulatory surgery center on LI
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(2, 157, 218, 0.15)',
            }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#behandeling", label: "Procedures" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#why-choose-us", label: "Why Choose Us" },
                { href: "#meet-the-doctors", label: "Our Doctors" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-[#029DDA] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8"
          style={{ borderTop: '1px solid rgba(2, 157, 218, 0.15)' }}
        >
          <h4 className="font-semibold text-white/80 mb-3 text-sm">Disclaimer</h4>
          <p className="text-xs text-white/50 leading-relaxed max-w-4xl">
            This page is for informational purposes only and does not provide medical advice or a diagnosis. All procedures require an appropriate examination, and candidacy, risks, benefits, and expected outcomes vary from person to person. Results are not guaranteed.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
