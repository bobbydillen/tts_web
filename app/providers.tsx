"use client"

import type React from "react"

import { useEffect } from "react"
import AOSProvider from "@/components/aos-provider"

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Add any client-side scripts here
    const script = document.createElement("script")
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <AOSProvider>{children}</AOSProvider>
}
