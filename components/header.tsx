"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/radix/button"
import { useCart } from "./cart-provider"
import CartDrawer from "./cart-drawer"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const routes = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Locations", path: "/locations" },
]

export default function Header() {
  const pathname = usePathname()
  const { cartItems, cartTotal } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 font-['Zilla_Slab']",
        isScrolled 
          ? "bg-[#9C6B40] text-gray-900 md:bg-[#9C6B40]/90 md:backdrop-blur-md" 
          : "bg-[#9C6B40] text-white",
        isScrolled && "shadow-md"
      )}
    >
      <div className="w-full">
        <div className="container mx-auto px-6 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
            <Image
              src="/logo.png"
              alt="Pedal Cafe Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-lg font-semibold tracking-[0.3em] ml-1 uppercase">Pedal Cafe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block ml-auto">
            <ul className="flex items-center gap-6">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 hover:opacity-80 hover:scale-105 inline-block tracking-wide",
                      pathname === route.path 
                        ? isScrolled 
                          ? "text-gray-900 underline underline-offset-4 decoration-gray-900" 
                          : "text-white underline underline-offset-4 decoration-white"
                        : isScrolled 
                          ? "text-gray-900/80 hover:underline hover:underline-offset-4 hover:decoration-gray-900" 
                          : "text-white/80 hover:underline hover:underline-offset-4 hover:decoration-white"
                    )}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden hover:scale-110 transition-all duration-200",
                isScrolled 
                  ? "text-gray-900/80 hover:text-gray-900" 
                  : "text-white/80 hover:text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "absolute left-0 top-16 z-50 w-full backdrop-blur-md shadow-md md:hidden",
              "bg-[#9C6B40]"
            )}
          >
            <nav className="container py-4">
              <ul className="flex flex-col gap-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={cn(
                        "block py-2 text-sm font-medium transition-all duration-200 hover:translate-x-1 tracking-wide",
                        pathname === route.path 
                          ? isScrolled 
                            ? "text-gray-900 underline underline-offset-4 decoration-gray-900" 
                            : "text-white underline underline-offset-4 decoration-white"
                          : isScrolled 
                            ? "text-gray-900/80 hover:underline hover:underline-offset-4 hover:decoration-gray-900" 
                            : "text-white/80 hover:underline hover:underline-offset-4 hover:decoration-white"
                      )}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
