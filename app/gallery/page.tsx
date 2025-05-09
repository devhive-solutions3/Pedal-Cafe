"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/radix/dialog"
import { Button } from "@/components/radix/button"
import { Badge } from "@/components/radix/badge"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { motion } from "framer-motion"

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

  const filteredImages = useMemo(() => 
    selectedTag ? galleryImages.filter((image) => image.tags.includes(selectedTag)) : galleryImages,
    [selectedTag]
  )

  return (
    <div className="container py-12">
      <div className="mb-8 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Gallery</h1>
        <p className="mt-4 text-muted-foreground">Take a visual tour of our cafes, products, and happy moments</p>
      </div>

      {/* Filter tags */}
      <motion.div
        className="mb-8 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        <Button
          variant={selectedTag === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedTag(null)}
          className={`min-w-[100px] rounded-lg transition-all duration-200 ${
            selectedTag === null 
              ? "bg-[#b17742] text-white hover:bg-[#b17742]/90" 
              : "bg-white text-gray-700 hover:bg-[#f3e6d8] border-[#b17742]"
          }`}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(tag)}
            className={`min-w-[100px] rounded-lg transition-all duration-200 ${
              selectedTag === tag 
                ? "bg-[#b17742] text-white hover:bg-[#b17742]/90" 
                : "bg-white text-gray-700 hover:bg-[#f3e6d8] border-[#b17742]"
            }`}
          >
            {tag}
          </Button>
        ))}
      </motion.div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
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
          </motion.div>
        ))}
      </div>

      {/* Image modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 flex items-center justify-center">
          <VisuallyHidden>
            <DialogTitle>Image Preview</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={selectedImage || "/placeholder.svg"} 
                alt="Gallery image" 
                fill 
                className="object-contain rounded-lg"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
