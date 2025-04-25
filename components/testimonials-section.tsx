"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Chennai",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Our stay at TTS Residency was exceptional. The staff was attentive, the rooms were immaculate, and the location was perfect for exploring the area.",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "We hosted our daughter's wedding at the banquet hall and it was a dream come true. The venue was beautiful and the staff took care of every detail.",
  },
  {
    name: "Arun Nair",
    location: "Kochi",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The Presidential Suite exceeded our expectations. Luxurious, spacious, and with all the amenities we could ask for. Will definitely return.",
  },
  {
    name: "Meera Patel",
    location: "Mumbai",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Perfect location for our business retreat. The conference facilities were excellent and the staff was professional and accommodating.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prevIndex - 1,
    )
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Experiences" subtitle="Hear what our distinguished guests have to say" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <Card className="h-full border-none bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-cinzel font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground font-cormorant">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground font-cormorant text-lg italic">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-background border-primary text-primary hover:bg-primary/10 rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-background border-primary text-primary hover:bg-primary/10 rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
