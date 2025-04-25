"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function DayNightToggle() {
  const [isDay, setIsDay] = useState(true)

  const toggleDayNight = () => {
    setIsDay(!isDay)
    document.documentElement.classList.toggle("day-night-scene")
    document.documentElement.classList.toggle(isDay ? "night" : "day")
  }

  return (
    <motion.button
      onClick={toggleDayNight}
      className="fixed top-24 right-6 z-40 bg-background/80 backdrop-blur-sm border border-primary/30 text-primary p-3 rounded-full shadow-lg hover:bg-primary/10 transition-all duration-300"
      aria-label={isDay ? "Switch to night mode" : "Switch to day mode"}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDay ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </motion.button>
  )
}
