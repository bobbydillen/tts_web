"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Music, UtensilsCrossed, Check, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const banquetPackages = [
  {
    name: "Royal Wedding",
    description: "A luxurious wedding package with all the royal trimmings",
    capacity: "Up to 300 guests",
    features: [
      "Elegant hall decoration with floral arrangements",
      "Red carpet welcome",
      "Customized menu with multi-cuisine options",
      "Wedding cake (3-tier)",
      "Champagne toast for the bride and groom",
      "Professional sound system and lighting",
      "Dedicated event coordinator",
      "Complimentary suite for the newlyweds",
      "Special room rates for guests",
      "Valet parking service",
    ],
  },
  {
    name: "Corporate Excellence",
    description: "Perfect for business meetings, conferences, and corporate events",
    capacity: "Up to 200 guests",
    features: [
      "Professional setup with theater/classroom/boardroom style seating",
      "High-speed Wi-Fi internet",
      "State-of-the-art audiovisual equipment",
      "LCD projector and screen",
      "Flip charts and markers",
      "Notepads and pens for attendees",
      "Mineral water and mints",
      "Coffee/tea breaks with snacks",
      "Business lunch options",
      "Technical support staff",
    ],
  },
  {
    name: "Birthday Extravaganza",
    description: "Celebrate your special day in style with our birthday package",
    capacity: "Up to 150 guests",
    features: [
      "Themed decoration as per request",
      "Customized birthday cake",
      "Balloon arrangements",
      "DJ with dance floor",
      "Photo booth with props",
      "Buffet or plated menu options",
      "Welcome drinks",
      "Special effects (smoke, confetti)",
      "Dedicated party coordinator",
      "Complimentary birthday gift from the hotel",
    ],
  },
]

export default function BanquetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)

  const togglePackage = (packageName: string) => {
    if (expandedPackage === packageName) {
      setExpandedPackage(null)
    } else {
      setExpandedPackage(packageName)
    }
  }

  return (
    <section id="banquet" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      {/* 3D Royal Elements */}
      <div className="absolute top-1/4 right-1/4 royal-3d-element">
        <div className="royal-3d-crown animate-3d-float"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 royal-3d-element">
        <div className="royal-3d-orb animate-3d-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Banquet Hall" subtitle="The perfect venue for your special occasions" />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="overview" className="font-cinzel">
              Overview
            </TabsTrigger>
            <TabsTrigger value="packages" className="font-cinzel">
              Packages
            </TabsTrigger>
            <TabsTrigger value="gallery" className="font-cinzel">
              Gallery
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl md:text-3xl font-cinzel font-bold mb-6 text-royal-gold">
                  Elegant Celebrations
                </h3>

                <p className="text-muted-foreground mb-6 font-cormorant text-lg">
                  Our elegant banquet hall is the perfect venue for your special occasions, from weddings and birthdays
                  to corporate events and conferences, all delivered with royal treatment. With state-of-the-art
                  facilities, customizable spaces, and impeccable service, we ensure that your event is nothing short of
                  extraordinary.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 transform-3d-hover">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-cinzel font-semibold text-lg">Capacity</h3>
                    <p className="text-center font-cormorant">300 guests</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 transform-3d-hover">
                    <Calendar className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-cinzel font-semibold text-lg">Events</h3>
                    <p className="text-center font-cormorant">Weddings, Birthdays, Corporate</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 transform-3d-hover">
                    <UtensilsCrossed className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-cinzel font-semibold text-lg">Catering</h3>
                    <p className="text-center font-cormorant">Full kitchen service</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 transform-3d-hover">
                    <Music className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-cinzel font-semibold text-lg">Entertainment</h3>
                    <p className="text-center font-cormorant">Sound system & stage</p>
                  </div>
                </div>

                <div className="royal-border p-4 mb-6">
                  <h4 className="font-cinzel text-xl mb-2">Venue Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> State-of-the-art sound system
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Professional lighting
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Climate-controlled environment
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Customizable stage setup
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Dedicated event coordinator
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Ample parking space
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Bridal/VIP room
                    </li>
                    <li className="flex items-center gap-2 font-cormorant">
                      <Check className="h-4 w-4 text-primary" /> Customizable floor plans
                    </li>
                  </ul>
                </div>

                <Button className="bg-primary hover:bg-primary/80 text-primary-foreground btn-royal-enhanced">
                  Contact Now for Booking
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative rounded-lg overflow-hidden image-hover-royal transform-3d-hover">
                  <Image
                    src="/mahal1.jpg?height=300&width=400"
                    alt="Banquet Hall Setup"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden image-hover-royal transform-3d-hover">
                  <Image
                    src="/mahal4.jpg?height=300&width=400"
                    alt="Wedding Setup"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden image-hover-royal transform-3d-hover">
                  <Image
                    src="/mahal3.jpg?height=300&width=400"
                    alt="Conference Setup"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden image-hover-royal transform-3d-hover">
                  <Image
                    src="/mahal2.jpg?height=300&width=400"
                    alt="Birthday Party"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="space-y-6">
              {banquetPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 overflow-hidden"
                >
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => togglePackage(pkg.name)}
                  >
                    <div>
                      <h3 className="font-cinzel text-xl text-royal-gold">{pkg.name}</h3>
                      <p className="font-cormorant text-muted-foreground">{pkg.description}</p>
                      <p className="font-cormorant text-sm text-primary mt-1">{pkg.capacity}</p>
                    </div>
                    {expandedPackage === pkg.name ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </div>

                  {expandedPackage === pkg.name && (
                    <div className="px-6 pb-6 border-t border-primary/20 pt-4">
                      <h4 className="font-cinzel text-lg mb-2">Package Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 font-cormorant">
                            <Check className="h-4 w-4 text-primary" /> {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-4 bg-primary hover:bg-primary/80 text-primary-foreground btn-royal-enhanced">
                        Contact Now for Booking
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative rounded-lg overflow-hidden image-hover-royal h-48 transform-3d-hover"
                >
                  <Image
                    src={`/mahal${index + 1}.jpg?height=300&width=400&text=Banquet`}
                    alt={`Banquet Hall Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
