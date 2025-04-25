// How to Add Your Logo to TTS Residency Website

// 1. Add your logo file to the public directory
// For example, if your logo is named "tts-logo.png", place it in the public folder

// 2. Update the navbar.tsx file to use your logo
// Find this section in components/navbar.tsx:
import Image from "next/image"

// Assuming 'Image' is imported from 'next/image'

const src = "/logo-placeholder.svg"
const alt = "TTS Residency Logo"
const width = 64
const height = 64
const className = "object-contain"
;<Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />

// 3. Replace it with your logo file:

const newSrc = "/tts-logo.png"
;<Image src={newSrc || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />

// 4. Adjust the width and height values if needed to match your logo's dimensions
// You may also need to adjust the container size (w-16 h-16) to fit your logo properly
