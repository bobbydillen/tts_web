"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919486659117"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  )
}
