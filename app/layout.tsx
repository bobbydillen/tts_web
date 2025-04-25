import type React from "react"
import type { Metadata } from "next"
import {
  Playfair_Display as PlayfairDisplay,
  Poppins,
  Cinzel,
  Cormorant_Garamond as CormorantGaramond,
} from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import RoyalDecorations from "@/components/royal-decorations"

const playfair = PlayfairDisplay({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
})

const cormorant = CormorantGaramond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TTS Residency | Luxury Royal Experience",
  description:
    "Discover royal comfort & elegance at TTS Residency. Luxury accommodations with premium amenities in Marthandam, Tamil Nadu.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${poppins.variable} ${cinzel.variable} ${cormorant.variable} font-sans royal-bg-pattern`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <RoyalDecorations />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
