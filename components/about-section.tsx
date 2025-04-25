"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="About TTS Residency" subtitle="Where luxury meets comfort in a royal setting" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden image-hover-royal">
              <Image
                src="/about.jpg?height=600&width=800"
                alt="TTS Residency"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-cinzel font-bold mb-6 text-royal-gold">A Royal Experience</h3>

            <p className="text-muted-foreground mb-6 font-cormorant text-lg">
              Welcome to TTS Residency, where luxury meets comfort in the heart of Marthandam, Tamil Nadu. Our hotel
              combines elegant design with modern amenities to provide an exceptional stay experience.
            </p>

            <p className="text-muted-foreground mb-6 font-cormorant text-lg">
              Discover the best of the city with ease! TTS Residency offers a prime location, placing you just minutes
              away from breathtaking landmarks, cultural attractions, and scenic views.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="font-cormorant text-lg">Prime Location</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="font-cormorant text-lg">Luxury Accommodations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="font-cormorant text-lg">Exceptional Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary h-5 w-5" />
                <span className="font-cormorant text-lg">Fine Dining</span>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground btn-royal">Discover More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
