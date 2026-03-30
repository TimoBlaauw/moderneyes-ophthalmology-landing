"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type HeaderProps = {
  onOpenBooking: () => void
}

const navLinks = [
  { href: "#behandeling", label: "Procedures" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#meet-the-doctors", label: "Our Doctors" },
  { href: "#faq", label: "FAQ" },
]

export function Header({ onOpenBooking }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-4 inset-x-0 z-50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="w-full flex items-center justify-between px-4 sm:px-8 py-3 rounded-full shadow-lg"
          style={{
            background: "linear-gradient(135deg, #002A5E 0%, #0D5F95 50%, #1575AB 100%)",
            border: "1px solid rgba(2, 157, 218, 0.2)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-moderneyes.png"
              alt="ModernEyes Ophthalmology"
              width={300}
              height={120}
              className="h-9 sm:h-10 w-auto"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#029DDA] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={onOpenBooking}
            className="font-semibold rounded-full text-xs sm:text-sm px-5 sm:px-6 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
            style={{
              backgroundColor: "#029DDA",
              color: "#003775",
            }}
          >
            <span className="hidden sm:inline">Free Consultation</span>
            <span className="sm:hidden">Book Now</span>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
