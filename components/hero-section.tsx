"use client"

import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-al-asif-sarkar-sikhon-806967250",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DkvzYxBus/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alasif_blu",
    icon: Instagram,
  },
]

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Mobile Hero - Portrait image (9:16 aspect ratio) */}
      <div className="relative w-full h-[100svh] md:hidden">
        <Image
          src="/images/hero-mobile.jpg"
          alt="Sikhon - Digital Marketer & AI Generalist"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Desktop Hero - Full width landscape */}
      <div className="relative w-full h-screen hidden md:block">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Sikhon - Digital Marketer & AI Generalist"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Social Links - Floating (hidden on mobile to not overlap image) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-green-500 hover:text-black transition-all duration-300 text-white border border-white/20"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#work"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium tracking-wider uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
