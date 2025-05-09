"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const images = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee shop ambiance with warm lighting",
  },
  {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2057&auto=format&fit=crop",
    alt: "Artisan coffee preparation",
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    alt: "Fresh coffee beans and brewing equipment",
  },
  {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    alt: "Cozy cafe interior",
  },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isHovered])

  return (
    <div
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Image Slideshow */}
      {images.map((image, index) => (
        <motion.div
          key={image.url}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover object-center brightness-[0.7]"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-screen-lg mx-auto px-4 w-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Handcrafted Coffee
              <br />
              Delivered with Love
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-lg text-xl text-gray-200"
          >
            Experience our unique mobile coffee service bringing artisanal brews right to your doorstep
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#b78254] text-white text-opacity-100 transition-transform duration-200 hover:scale-105 hover:bg-[#b78254]/90"
            >
              <Link href="/menu">Order Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#b78254] text-white text-opacity-100 transition-transform duration-200 hover:scale-105 hover:bg-[#b78254]/90"
            >
              <Link href="/locations">Find Locations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 