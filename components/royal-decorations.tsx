"use client"

import { useEffect, useState } from "react"

export default function RoyalDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Corner decorations for the entire page */}
      <div className="fixed top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/30 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/30 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/30 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/30 pointer-events-none"></div>

      {/* Corner ornaments */}
      <div className="fixed top-4 left-4 w-8 h-8 text-[#D4AF37]/40 pointer-events-none flex items-center justify-center">
        ⚜
      </div>
      <div className="fixed top-4 right-4 w-8 h-8 text-[#D4AF37]/40 pointer-events-none flex items-center justify-center">
        ⚜
      </div>
      <div className="fixed bottom-4 left-4 w-8 h-8 text-[#D4AF37]/40 pointer-events-none flex items-center justify-center">
        ⚜
      </div>
      <div className="fixed bottom-4 right-4 w-8 h-8 text-[#D4AF37]/40 pointer-events-none flex items-center justify-center">
        ⚜
      </div>

      {/* Center decoration */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#D4AF37]/5 rounded-full pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#D4AF37]/3 rounded-full pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#D4AF37]/2 rounded-full pointer-events-none"></div>
    </>
  )
}
