"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionTitle from "./section-title"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-20 royal-gradient">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle title="Royal Reservations" subtitle="Reach out to us for inquiries or to plan your royal stay" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="border-none bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              <CardContent className="p-6">
                <form className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 font-cormorant">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background/50 border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 font-cormorant">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-background/50 border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 font-cormorant">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 font-cormorant">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Reservation / Inquiry / Event"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 font-cormorant">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/80 text-primary-foreground btn-royal-enhanced">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-muted-foreground font-cormorant text-lg">
                  TTS Nexus Building, Kaliyal Junction, Arumanai Road, Marthandam, Tamil Nadu 629101.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground font-cormorant text-lg">+91 9361 496 966</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground font-cormorant text-lg">ttsresidency@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-cinzel font-semibold text-lg mb-2">Reservations</h3>
                <p className="text-muted-foreground font-cormorant text-lg">
                  Contact us directly for special offers and best rates.
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/80 text-primary-foreground btn-royal-enhanced">
                  Contact Now for Booking
                </Button>
              </div>
            </div>

            <div className="mt-6 h-64 rounded-lg overflow-hidden border-2 border-primary/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4376189954477!2d77.2976!3d8.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOCKCsDIwJzQ0LjIiTiA3N8KwMTcnNTEuNCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
