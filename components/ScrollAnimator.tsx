"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function ScrollAnimator() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 50, // Start animation when element is 50px from bottom of viewport
      delay: 0, // No delay by default
    })
  }, [])

  return null
} 