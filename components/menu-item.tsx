"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import type { MenuItem as MenuItemType } from "@/lib/types"
import { Plus } from "lucide-react"

interface MenuItemProps {
  item: MenuItemType
}

export default function MenuItem({ item }: MenuItemProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(item)
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <div className="cafe-card group overflow-hidden bg-white">
      <div className="cafe-image aspect-[4/3] overflow-hidden">
        <Image
          src={
            item.image ||
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
          }
          alt={item.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-primary">{item.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          </div>
          <div className="ml-2 text-right">
            <p className="font-medium">₱{item.price.toFixed(2)}</p>
          </div>
        </div>
        <Button onClick={handleAddToCart} className="cafe-button mt-4 w-full gap-2" size="sm">
          Add to Cart <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
