"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Facilities", href: "#facilities" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Banquet", href: "#banquet" },
  { name: "Services", href: "#services" },
  { name: "Sightseeing", href: "#sightseeing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.3)]" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 z-10">
          {/* Logo */}
          <div className="w-16 h-16 relative flex items-center justify-center overflow-hidden">
            <Image src="/tts-logo.svg" alt="TTS Residency Logo" width={64} height={64} className="object-contain" />
          </div>

          {/* Name displayed more spaciously */}
          <div className="flex flex-col">
            <span className="text-3xl font-cinzel font-bold tracking-wider text-royal-enhanced">TTS</span>
            <span className="text-lg font-cormorant tracking-[0.5em] text-primary uppercase">RESIDENCY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                isScrolled ? "text-foreground" : "text-foreground",
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground btn-royal-enhanced">
            Contact Now for Booking
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary py-2 border-b border-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground w-full btn-royal-enhanced">
              Contact Now for Booking
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
