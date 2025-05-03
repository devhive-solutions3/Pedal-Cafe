"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import CartDrawer from "./cart-drawer"
import { motion, AnimatePresence } from "framer-motion"

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
          <Image
            src="/logo.png"
            alt="Pedal Cafe Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <span className="hidden text-xl font-bold tracking-tight text-primary sm:block">Pedal Cafe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-coffee hover:scale-105 inline-block ${
                    pathname === route.path ? "text-coffee" : "text-muted-foreground"
                  }`}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {cartItems.length > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-coffee transition-all duration-200 hover:scale-110"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-coffee text-xs text-white">
                {cartItems.length}
              </span>
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-16 z-50 w-full bg-white shadow-md md:hidden"
        >
          <nav className="container py-4">
            <ul className="flex flex-col gap-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`block py-2 text-sm font-medium transition-all duration-200 hover:text-coffee hover:translate-x-1 ${
                      pathname === route.path ? "text-coffee" : "text-muted-foreground"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
