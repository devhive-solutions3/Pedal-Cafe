"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

const eventTypes = [
  "Corporate Event",
  "Birthday Party",
  "Wedding",
  "Pop-up Event",
  "Festival",
  "Other",
]

export default function EventsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    toast.success("Thanks! Our team will get back to you within 24 hours.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#b78254] sm:text-4xl">
            Book Pedal Cafe for Your Event
          </h1>
          <p className="mt-4 text-muted-foreground">
            Let us bring our unique coffee experience to your special occasion
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#b78254]">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                required
                className="mt-1"
                placeholder="Enter your full name"
              />
            </div>

            {/* Contact Information */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#b78254]">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#b78254]">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-[#b78254]">
                  Event Date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-[#b78254]">
                  Preferred Time
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-[#b78254]">
                Event Type
              </label>
              <Select name="eventType" required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-[#b78254]">
                Estimated Number of Guests
              </label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                required
                className="mt-1"
                placeholder="Enter number of guests"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#b78254]">
                Event Location/Venue
              </label>
              <Input
                id="location"
                name="location"
                required
                className="mt-1"
                placeholder="Enter event location"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-[#b78254]">
                Additional Notes or Requests
              </label>
              <Textarea
                id="notes"
                name="notes"
                className="mt-1"
                rows={4}
                placeholder="Tell us more about your event or any special requests"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#b78254] text-white hover:bg-[#b78254]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 