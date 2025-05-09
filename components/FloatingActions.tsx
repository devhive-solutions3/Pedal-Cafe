"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/radix/button"
import Link from "next/link"
import { useCart } from "./cart-provider"
import CartDrawer from "./cart-drawer"
import { usePathname } from "next/navigation"

export default function FloatingActions() {
  const { cartItems } = useCart()
  const [showCalendar, setShowCalendar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  // Calendar button show/hide logic (copied from EventBookingWidget)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowCalendar(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Only show cart if there are items
  const showCart = cartItems.length > 0
  const bothVisible = showCart && showCalendar
  const isEventsPage = pathname === '/events'

  return (
    <>
      <div className={`fixed bottom-6 z-50 flex gap-4 ${bothVisible ? 'right-6' : showCart ? 'right-6' : showCalendar ? 'right-6' : ''}`}>
        <AnimatePresence>
          {showCart && (
            <motion.div
              key="cart"
              layout
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.35, duration: 0.45 } }}
              exit={{ opacity: 0, scale: 0.7, y: 40, transition: { duration: 0.25, ease: 'easeIn' } }}
              transition={{ layout: { duration: 0.4, type: 'spring', bounce: 0.25 } }}
            >
              <Button
                size="icon"
                className="relative rounded-full shadow-lg bg-[#b78254] hover:bg-[#b78254]/90 text-white h-14 w-14 flex items-center justify-center"
                onClick={() => setIsCartOpen(true)}
                aria-label="View Cart"
              >
                <ShoppingCart className="h-7 w-7" />
                {/* Badge */}
                <AnimatePresence>
                  {cartItems.length > 0 && (
                    <motion.span
                      key="cart-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, transition: { type: 'spring', bounce: 0.5, duration: 0.3 } }}
                      exit={{ scale: 0, opacity: 0, transition: { duration: 0.15 } }}
                      className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#b78254] text-sm font-bold border border-[#b78254] shadow-sm"
                    >
                      {cartItems.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showCalendar && !isEventsPage && (
            <motion.div
              key="calendar"
              layout
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  duration: 0.3
                }
              }}
              exit={{ 
                y: 20, 
                opacity: 0,
                transition: { 
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              transition={{ 
                layout: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
            >
              <Button
                asChild
                size="icon"
                className="h-14 w-14 rounded-full bg-[#b78254] shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-[#b78254]/90 text-white"
                aria-label="Book Us for Events"
              >
                <Link href="/events">
                  <Calendar className="h-6 w-6 text-white" />
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
} 