"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-cinzel font-bold mb-4 relative"
      >
        <span className="text-[#D4AF37]">{title}</span>
      </motion.h2>

      <div className="relative flex items-center justify-center my-6">
        <div className="absolute w-full h-[1px] bg-[#D4AF37]/30"></div>
        <div className="absolute w-24 h-[2px] bg-[#D4AF37]"></div>
        <div className="absolute w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse"></div>
        <div className="absolute w-1 h-1 rounded-full bg-[#D4AF37] -translate-x-12 animate-pulse"></div>
        <div className="absolute w-1 h-1 rounded-full bg-[#D4AF37] translate-x-12 animate-pulse"></div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`text-lg md:text-xl max-w-2xl mx-auto font-cormorant ${light ? "text-white" : "text-gray-300"}`}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
