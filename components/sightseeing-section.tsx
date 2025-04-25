"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Info } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const attractions = [
  {
    name: "Kanyakumari Beach",
    description: "Famous for its stunning sunrise and sunset views where three oceans meet.",
    image: "/kk1.jpg?height=400&width=600",
    distance: "15 km",
  },
  {
    name: "Vivekananda Rock Memorial",
    description: "Historic monument on a small island where Swami Vivekananda meditated.",
    image: "/kk2.jpg?height=400&width=600",
    distance: "18 km",
  },
  {
    name: "Padmanabhapuram Palace",
    description: "Ancient wooden palace with traditional Kerala architecture.",
    image: "/kk3.jpg?height=400&width=600",
    distance: "10 km",
  },
  {
    name: "Thiruvalluvar Statue",
    description: "133-foot tall stone sculpture of the Tamil poet and philosopher.",
    image: "/kk4.jpg?height=400&width=600",
    distance: "17 km",
  },
]

export default function SightseeingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeAttraction, setActiveAttraction] = useState(0)

  return (
    <section id="sightseeing" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Excursions" subtitle="Explore the magnificent attractions near TTS Residency" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden image-hover-royal">
              <Image
                src={attractions[activeAttraction].image || "/placeholder.svg"}
                alt={attractions[activeAttraction].name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-cinzel font-bold text-white mb-2">{attractions[activeAttraction].name}</h3>
                <div className="flex items-center text-primary">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{attractions[activeAttraction].distance} from hotel</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-cinzel font-bold mb-6 text-royal-gold">Discover Local Wonders</h3>

            <p className="text-muted-foreground mb-6 font-cormorant text-lg">
              TTS Residency is ideally located to explore the breathtaking attractions of Kanyakumari district. Our
              concierge can arrange guided tours to these magnificent destinations.
            </p>

            <div className="grid gap-4 mb-8">
              {attractions.map((attraction, index) => (
                <Card
                  key={index}
                  className={`border-none cursor-pointer transition-all duration-300 ${
                    activeAttraction === index
                      ? "bg-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-card/50 hover:bg-primary/10"
                  }`}
                  onClick={() => setActiveAttraction(index)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center border border-primary">
                      <Navigation className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-cinzel font-semibold">{attraction.name}</h4>
                      <p className="text-sm text-muted-foreground font-cormorant">{attraction.distance} from hotel</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground btn-royal">
              <Info className="mr-2 h-4 w-4" /> Book a Tour
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
