"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { menuItems } from "@/lib/menu-data"
import MenuItem from "@/components/menu-item"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import CartDrawer from "@/components/cart-drawer"

export default function MenuPage() {
  const { cartItems, cartTotal } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const categories = ["Coffee", "Pastries", "Combos"]

  return (
    <div className="container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Menu</h1>
        <p className="mt-4 text-muted-foreground">
          Explore our selection of handcrafted coffee and freshly baked pastries
        </p>
      </div>

      {/* Floating cart button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="cafe-button rounded-full shadow-soft-lg" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            <span>
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
            <span className="ml-2 border-l border-primary-foreground/20 pl-2">₱{cartTotal.toFixed(2)}</span>
          </Button>
        </div>
      )}

      <Tabs defaultValue="Coffee" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3 bg-secondary/20">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
