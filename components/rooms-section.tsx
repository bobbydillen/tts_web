"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize, Coffee, Wifi } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

const rooms = [
  {
    id: "presidential",
    title: "Presidential Suite",
    description: "Ultra-luxury stay for VIPs with panoramic views and exclusive amenities",
    images: [
      "/bedroom1.jpg?height=400&width=600&text=Presidential1",
      "/bedroom2.jpg?height=400&width=600&text=Presidential2",
      "/bedroom3.jpg?height=400&width=600&text=Presidential3",
    ],
    features: ["King Size Bed", "60 sq.m", "4 Guests", "Breakfast Included", "Free WiFi"],
    details:
      "The Presidential Suite offers an unparalleled luxury experience with a spacious living area, private dining room, and a master bedroom with a king-size bed. The suite features panoramic views of the surrounding landscape, a marble bathroom with a jacuzzi, and exclusive access to our VIP lounge. Guests enjoy personalized butler service, complimentary airport transfers, and a welcome champagne upon arrival.",
    amenities: [
      "Private Butler",
      "Jacuzzi",
      "Private Dining Area",
      "VIP Lounge Access",
      "Complimentary Airport Transfer",
      "Welcome Champagne",
      "Premium Toiletries",
      "Nespresso Machine",
      "Smart Home Controls",
      "Walk-in Closet",
    ],
  },
  {
    id: "royal",
    title: "Royal Suite",
    description: "Regal experience with spacious living area and premium furnishings",
    images: [
      "/bedroom1.jpg?height=400&width=600&text=Royal1",
      "/bedroom2.jpg?height=400&width=600&text=Royal2",
      "/bedroom3.jpg?height=400&width=600&text=Royal3",
    ],
    features: ["King Size Bed", "45 sq.m", "3 Guests", "Breakfast Included", "Free WiFi"],
    details:
      "The Royal Suite embodies elegance and sophistication with its premium furnishings and spacious layout. The suite includes a comfortable living area, a bedroom with a king-size bed, and a luxurious bathroom. Guests can enjoy stunning views from the private balcony, access to the executive lounge, and a range of exclusive amenities designed to ensure a memorable stay.",
    amenities: [
      "Private Balcony",
      "Executive Lounge Access",
      "Separate Living Area",
      "Premium Bedding",
      "Luxury Bathroom Amenities",
      "LED TV with International Channels",
      "Digital Safe",
      "Mini Bar",
      "Tea/Coffee Making Facilities",
      "Evening Turndown Service",
    ],
  },
  {
    id: "imperial",
    title: "Imperial Suite",
    description: "Lavish interiors with separate living room and luxurious bathroom",
    images: [
      "/bedroom1.jpg?height=400&width=600&text=Imperial1",
      "/bedroom2.jpg?height=400&width=600&text=Imperial2",
      "/bedroom3.jpg?height=400&width=600&text=Imperial3",
    ],
    features: ["Queen Size Bed", "40 sq.m", "2 Guests", "Breakfast Included", "Free WiFi"],
    details:
      "The Imperial Suite offers a perfect blend of comfort and luxury with its lavish interiors and thoughtful amenities. The suite features a separate living room, a bedroom with a queen-size bed, and a luxurious bathroom with premium toiletries. Guests can enjoy the serene ambiance, elegant décor, and personalized service that defines the Imperial experience.",
    amenities: [
      "Separate Living Room",
      "Luxury Bathroom",
      "Premium Toiletries",
      "Plush Bathrobes",
      "Slippers",
      "Work Desk",
      "High-Speed Internet",
      "Flat-Screen TV",
      "Mini Refrigerator",
      "In-Room Safe",
    ],
  },
  {
    id: "executive",
    title: "Executive Suite",
    description: "Perfect for business travelers with work desk and high-speed internet",
    images: [
      "/bedroom1.jpg?height=400&width=600&text=Executive1",
      "/bedroom2.jpg?height=400&width=600&text=Executive2",
      "/bedroom3.jpg?height=400&width=600&text=Executive3",
    ],
    features: ["Queen Size Bed", "35 sq.m", "2 Guests", "Breakfast Included", "Free WiFi"],
    details:
      "The Executive Suite is designed with the business traveler in mind, offering a functional yet elegant space for both work and relaxation. The suite includes a comfortable bedroom with a queen-size bed, a dedicated work area with a desk, and high-speed internet. Additional amenities include a coffee maker, a mini-bar, and a modern bathroom with premium toiletries.",
    amenities: [
      "Dedicated Work Area",
      "Ergonomic Chair",
      "High-Speed Internet",
      "Multiple Power Outlets",
      "Coffee Maker",
      "Mini Bar",
      "Modern Bathroom",
      "Premium Toiletries",
      "Daily Newspaper",
      "Shoe Shine Service",
    ],
  },
  {
    id: "dormitory",
    title: "Dormitory",
    description: "Budget-friendly group stay with comfortable beds and shared facilities",
    images: [
      "/bedroom1.jpg?height=400&width=600&text=Dormitory1",
      "/bedroom2.jpg?height=400&width=600&text=Dormitory2",
      "/bedroom3.jpg?height=400&width=600&text=Dormitory3",
    ],
    features: ["Single Beds", "50 sq.m", "8 Guests", "Breakfast Optional", "Free WiFi"],
    details:
      "Our Dormitory offers a comfortable and affordable accommodation option for groups or budget-conscious travelers. The spacious room features 8 single beds, shared bathroom facilities, and a common area for socializing. Guests can enjoy free WiFi, secure lockers for personal belongings, and access to the hotel's public areas and amenities.",
    amenities: [
      "8 Single Beds",
      "Shared Bathroom Facilities",
      "Common Area",
      "Free WiFi",
      "Secure Lockers",
      "Reading Lights",
      "Power Outlets for Each Bed",
      "Air Conditioning",
      "Daily Housekeeping",
      "Luggage Storage",
    ],
  },
]

const featureIcons = {
  "King Size Bed": <Bed className="h-4 w-4" />,
  "Queen Size Bed": <Bed className="h-4 w-4" />,
  "Single Beds": <Bed className="h-4 w-4" />,
  "60 sq.m": <Maximize className="h-4 w-4" />,
  "45 sq.m": <Maximize className="h-4 w-4" />,
  "40 sq.m": <Maximize className="h-4 w-4" />,
  "35 sq.m": <Maximize className="h-4 w-4" />,
  "50 sq.m": <Maximize className="h-4 w-4" />,
  "4 Guests": <Users className="h-4 w-4" />,
  "3 Guests": <Users className="h-4 w-4" />,
  "2 Guests": <Users className="h-4 w-4" />,
  "8 Guests": <Users className="h-4 w-4" />,
  "Breakfast Included": <Coffee className="h-4 w-4" />,
  "Breakfast Optional": <Coffee className="h-4 w-4" />,
  "Free WiFi": <Wifi className="h-4 w-4" />,
}

// Image slideshow component for each room
function ImageSlideshow({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: currentImage === index ? 1 : 0 }}
        >
          <Image src={image || "/placeholder.svg"} alt="Room Image" fill className="object-cover" />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-[#D4AF37]" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function RoomsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="rooms" className="py-20 royal-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Chambers" subtitle="Experience luxury in our elegantly designed suites" />

        <div className="space-y-24">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 pb-16 border-b border-[#D4AF37]/20"
            >
              {/* Room Images Slideshow */}
              <ImageSlideshow images={room.images} />

              {/* Room Details */}
              <div className="flex flex-col">
                <h3 className="font-cinzel text-3xl text-[#D4AF37] mb-4">{room.title}</h3>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {featureIcons[feature as keyof typeof featureIcons]}
                      <span className="font-cormorant text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 font-cormorant text-lg">{room.description}</p>

                <div className="border-2 border-[#D4AF37]/30 rounded-lg p-4 mb-6">
                  <h4 className="font-cinzel text-xl mb-2">Suite Details</h4>
                  <p className="text-gray-300 font-cormorant text-lg">{room.details}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-cinzel text-xl mb-2">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                        <span className="font-cormorant text-base">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="mt-auto bg-[#D4AF37] hover:bg-[#B38728] text-black">Contact Now for Booking</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
