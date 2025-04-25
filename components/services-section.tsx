"use client"

import { useRef } from "react"
import { Wifi, Wind, Coffee, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const services = [
  {
    icon: <Wifi className="h-12 w-12 text-primary" />,
    title: "Free WiFi",
    description: "High-speed, unlimited internet access throughout the property for all guests.",
  },
  {
    icon: <Wind className="h-12 w-12 text-primary" />,
    title: "Air Conditioning",
    description: "Fully air-conditioned spaces ensuring comfort regardless of outside temperature.",
  },
  {
    icon: <Coffee className="h-12 w-12 text-primary" />,
    title: "Breakfast",
    description: "Complimentary and customized breakfast with local and international options.",
  },
  {
    icon: <MapPin className="h-12 w-12 text-primary" />,
    title: "Sightseeing Tours",
    description: "Guided tours around Kanyakumari district to explore local attractions.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 royal-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Services" subtitle="Premium services for an unforgettable stay" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 h-full">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-background flex items-center justify-center border border-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground font-cormorant text-lg">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
