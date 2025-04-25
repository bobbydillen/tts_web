"use client"

import { useRef } from "react"
import { Wifi, Car, Utensils, Coffee, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const facilities = [
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: "Free WiFi",
    description: "High-speed internet access throughout the property",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Transportation",
    description: "Airport and local transportation services",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Banquet Hall",
    description: "300-seat capacity for events and celebrations",
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Breakfast",
    description: "Complimentary breakfast with local and international cuisine",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Site Seeing",
    description: "Guided tours to local attractions and landmarks",
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Restaurant",
    description: "Fine dining with local and international cuisine",
  },
]

export default function FacilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="facilities" className="py-20 royal-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Amenities" subtitle="Experience luxury with our premium facilities" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center border border-primary">
                      {facility.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-cinzel font-semibold mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground font-cormorant text-lg">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
