"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Gallery images with tags
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=2070&auto=format&fit=crop",
    alt: "Barista pouring coffee",
    tags: ["Coffee", "Barista"],
  },
  {
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?q=80&w=1974&auto=format&fit=crop",
    alt: "Latte art",
    tags: ["Coffee", "Art"],
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee and pastries",
    tags: ["Coffee", "Pastries"],
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    alt: "Warm café interior",
    tags: ["Café", "Interior"],
  },
  {
    src: "https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1974&auto=format&fit=crop",
    alt: "Café ambiance",
    tags: ["Café", "Customers"],
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    alt: "Coffee cup on table",
    tags: ["Coffee", "Ambiance"],
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee and pastry",
    tags: ["Coffee", "Pastries"],
  },
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    alt: "Small café kiosk",
    tags: ["Café", "Kiosk"],
  },
  {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop",
    alt: "Coffee cart",
    tags: ["Mobile", "Cart"],
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
    alt: "Espresso shot",
    tags: ["Coffee", "Espresso"],
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop",
    alt: "Fresh croissants",
    tags: ["Pastries", "Food"],
  },
  {
    src: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=1974&auto=format&fit=crop",
    alt: "Coffee beans",
    tags: ["Coffee", "Ingredients"],
  },
]

// Get all unique tags
const allTags = Array.from(new Set(galleryImages.flatMap((image) => image.tags))).sort()

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredImages = selectedTag ? galleryImages.filter((image) => image.tags.includes(selectedTag)) : galleryImages

  return (
    <div className="container py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Gallery</h1>
        <p className="mt-4 text-muted-foreground">Take a visual tour of our cafes, products, and happy moments</p>
      </div>

      {/* Filter tags */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedTag(null)}
          className="cafe-button"
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            className="cafe-button"
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-soft-lg transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative aspect-square">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                {image.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/80 text-white hover:bg-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-[4/3] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
