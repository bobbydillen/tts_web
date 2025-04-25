"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 relative overflow-hidden">
      {/* 3D Royal Elements */}
      <div className="absolute top-10 left-10 royal-3d-element hidden lg:block">
        <div className="royal-3d-crown animate-3d-float" style={{ animationDelay: "0.3s" }}></div>
      </div>

      <div className="absolute bottom-20 right-10 royal-3d-element hidden lg:block">
        <div className="royal-3d-orb animate-3d-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center border-2 border-primary rounded-full overflow-hidden">
                <img src="/tts-logo.svg" alt="TTS Residency Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-cinzel font-bold text-royal-gold animate-glow">TTS</span>
                <span className="text-xs font-cormorant tracking-widest text-primary uppercase">Residency</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 font-cormorant text-lg">
              Experience royal luxury and comfort at TTS Residency, where every stay becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-cinzel font-semibold mb-4 text-royal-gold">Quick Links</h3>
            <ul className="space-y-2 font-cormorant text-lg">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#rooms" className="text-muted-foreground hover:text-primary transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="#banquet" className="text-muted-foreground hover:text-primary transition-colors">
                  Banquet Hall
                </Link>
              </li>
              <li>
                <Link href="#sightseeing" className="text-muted-foreground hover:text-primary transition-colors">
                  Sightseeing
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-cinzel font-semibold mb-4 text-royal-gold">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground font-cormorant text-lg">
              <li>TTS Nexus Building, Kaliyal Junction, Arumanai Road, Marthandam, Tamil Nadu 629101.</li>
              <li>Phone: +91 9361 496 966</li>
              <li>Email: ttsresidency@gmail.com</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center text-muted-foreground font-cormorant">
          <p>© {new Date().getFullYear()} TTS Residency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
