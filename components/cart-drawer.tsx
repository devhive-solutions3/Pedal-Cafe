"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/radix/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/radix/input"
import { Label } from "@/components/radix/label"
import { Separator } from "@/components/radix/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/radix/select"
import { useToast } from "@/components/radix/use-toast"
import { useCart } from "@/components/cart-provider"
import { Minus, Plus, Trash2 } from "lucide-react"
import { submitOrder } from "@/lib/actions"
import { motion, AnimatePresence } from "framer-motion"

const locations = [
  {
    id: "venice",
    name: "Venice Grand Canal Mall",
    address: "Campus Avenue, McKinley Hill, Taguig",
  },
  {
    id: "eastwood",
    name: "Eastwood Mall",
    address: "4th Floor, Eastwood Mall, Quezon City",
  },
  {
    id: "malabon",
    name: "Malabon",
    address: "2nd Floor, Sky Plaza Victoneta, Malabon",
  },
]

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupTime: "",
    pickupLocation: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, pickupLocation: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (cartItems.length === 0) return

    if (!formData.pickupLocation) {
      toast({
        title: "Please select a pickup location",
        description: "You must choose where you'll pick up your order.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await submitOrder({
        customer: formData,
        items: cartItems,
        total: cartTotal,
        orderDate: new Date().toISOString(),
      })

      toast({
        title: "Order placed successfully!",
        description: "We'll have your order ready for pickup at the selected time and location.",
      })

      clearCart()
      onClose()

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickupTime: "",
        pickupLocation: "",
      })
    } catch (error) {
      toast({
        title: "Failed to place order",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col sm:max-w-md p-0 bg-transparent overflow-visible">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
              exit={{ x: 100, opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
              className="bg-white rounded-l-xl shadow-2xl flex flex-col w-full h-full p-6"
              style={{ minHeight: '100vh' }}
            >
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
              </SheetHeader>

              {cartItems.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center">
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <Button variant="outline" className="mt-4" onClick={onClose}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-1 flex-col min-h-0">
                  <div className="flex-1 overflow-auto py-4 min-h-0">
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          {item.image && (
                            <div className="h-16 w-16 overflow-hidden rounded-md">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">₱{item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₱{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>₱{cartTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupTime">Pickup Time</Label>
                        <Input
                          id="pickupTime"
                          name="pickupTime"
                          type="datetime-local"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation" className="text-sm font-medium">
                          Pickup Location
                        </Label>
                        <Select
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onValueChange={handleLocationChange}
                          required
                        >
                          <SelectTrigger
                            id="pickupLocation"
                            className="w-full border-input focus:ring-[#b78254] focus-visible:ring-[#b78254]"
                          >
                            <SelectValue placeholder="Choose pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem
                                key={location.id}
                                value={location.id}
                                className="font-poppins focus:bg-[#b78254] focus:text-white"
                              >
                                <div>
                                  <div className="font-medium">{location.name}</div>
                                  <div className="text-xs text-muted-foreground">{location.address}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">Choose the branch where you'll pick up your drink.</p>
                      </div>
                    </div>
                  </div>

                  <SheetFooter className="pt-2 sticky bottom-0 bg-white z-10 border-t border-muted">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </SheetFooter>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}
