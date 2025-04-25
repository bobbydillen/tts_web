"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const galleryImages = [
  {
    src: "/door1.jpg?height=400&width=600",
    alt: "Hotel Exterior",
    category: "hotel",
    
  },
  {
    src: "/mahal5.jpg?height=400&width=600",
    alt: "Banquet Hall",
    category: "banquet",
  },
  {
    src: "/bedroom1.jpg?height=400&width=600",
    alt: "Presidential Suite",
    category: "rooms",
  },
  {
    src: "/bedroom2.jpg?height=400&width=600",
    alt: "Presidential Suite",
    category: "rooms",
  },
  {
    src: "/mahal2.jpg?height=400&width=600",
    alt: "Banquet Hall",
    category: "banquet",
  },
  {
    src: "/mahal3.jpg?height=400&width=600",
    alt: "Banquet Hall",
    category: "banquet",
  },
  {
    src: "/mahal4.jpg?height=400&width=600",
    alt: "Banquet Hall",
    category: "banquet",
  },
  {
    src: "/mahal1.jpg?height=400&width=600",
    alt: "Restaurant",
    category: "dining",
  },
  {
    src: "/bedroom3.jpg?height=400&width=600",
    alt: "Royal Suite",
    category: "rooms",
  },
  {
    src: "/door1.jpg?height=400&width=600",
    alt: "Lobby",
    category: "hotel",
  },
  {
    src: "/mahal1.jpg?height=400&width=600",
    alt: "Wedding Setup",
    category: "banquet",
  },
  {
    src: "/kk1.jpg?height=400&width=600",
    alt: "Local Attraction",
    category: "sightseeing",
  },
]

export default function GallerySection() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="py-20 royal-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Gallery" subtitle="Explore the elegance of TTS Residency through our gallery" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center flex-wrap gap-2 mb-8"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={
              filter === "all" ? "bg-primary hover:bg-primary/80" : "border-primary text-primary hover:bg-primary/10"
            }
          >
            All
          </Button>
          <Button
            variant={filter === "hotel" ? "default" : "outline"}
            onClick={() => setFilter("hotel")}
            className={
              filter === "hotel" ? "bg-primary hover:bg-primary/80" : "border-primary text-primary hover:bg-primary/10"
            }
          >
            Hotel
          </Button>
          <Button
            variant={filter === "rooms" ? "default" : "outline"}
            onClick={() => setFilter("rooms")}
            className={
              filter === "rooms" ? "bg-primary hover:bg-primary/80" : "border-primary text-primary hover:bg-primary/10"
            }
          >
            Rooms
          </Button>
          <Button
            variant={filter === "banquet" ? "default" : "outline"}
            onClick={() => setFilter("banquet")}
            className={
              filter === "banquet"
                ? "bg-primary hover:bg-primary/80"
                : "border-primary text-primary hover:bg-primary/10"
            }
          >
            Banquet
          </Button>
          <Button
            variant={filter === "dining" ? "default" : "outline"}
            onClick={() => setFilter("dining")}
            className={
              filter === "dining" ? "bg-primary hover:bg-primary/80" : "border-primary text-primary hover:bg-primary/10"
            }
          >
            Dining
          </Button>
          <Button
            variant={filter === "sightseeing" ? "default" : "outline"}
            onClick={() => setFilter("sightseeing")}
            className={
              filter === "sightseeing"
                ? "bg-primary hover:bg-primary/80"
                : "border-primary text-primary hover:bg-primary/10"
            }
          >
            Sightseeing
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative rounded-lg overflow-hidden cursor-pointer image-hover-royal h-64"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-cinzel font-medium">{image.alt}</span>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
