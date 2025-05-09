"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/radix/tabs"
import { menuItems } from "@/lib/menu-data"
import MenuItem from "@/components/menu-item"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/radix/button"
import { ShoppingCart } from "lucide-react"
import CartDrawer from "@/components/cart-drawer"

export default function MenuPage() {
  const { cartItems, cartTotal } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const categories = ["Coffee", "Pastries", "Combos"]

  return (
    <div className="container py-12">
      <div className="mb-8 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Menu</h1>
        <p className="mt-4 text-muted-foreground">
          Explore our selection of handcrafted coffee and freshly baked pastries
        </p>
      </div>

      <Tabs defaultValue="Coffee" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3 gap-2 p-1" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="menu-tab"
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
                .map((item, index) => (
                  <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                    <MenuItem item={item} />
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
