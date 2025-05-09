"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedToastProps {
  message: string
  show: boolean
  onDismiss: () => void
  duration?: number // ms
}

export default function AnimatedToast({ message, show, onDismiss, duration = 2500 }: AnimatedToastProps) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onDismiss, duration)
    return () => clearTimeout(timer)
  }, [show, duration, onDismiss])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.35, duration: 0.45 } }}
          exit={{ opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.2, ease: 'easeIn' } }}
          className="fixed z-[100] left-1/2 bottom-28 -translate-x-1/2 px-6 py-3 bg-[#b78254] text-white rounded-xl shadow-2xl font-semibold text-base flex items-center gap-2"
          style={{ pointerEvents: 'none' }}
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 