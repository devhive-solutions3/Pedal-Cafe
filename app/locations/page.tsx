import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

const locations = [
  {
    id: "brussels",
    city: "Venice Grand Canal Mall",
    address: "Campus Avenue, McKinley Hill, Taguig",
    phone: "+63 2 123 4567",
    email: "pedalcafeph@gmail.com",
    hours: [
      { days: "Monday - Friday", hours: " 11am-11pm" },
      { days: "Saturday - Sunday", hours: "10am-11pm" },
    ],
    description:
      "Pedal Cafe's flagship location in the heart of Venice Grand Canal Mall, McKinley Hill, Taguig. Featuring a full coffee bar, fresh pastries, and indoor seating.",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop",
    mapUrl: "https://maps.app.goo.gl/cbq5xA38MfUWnk7Z8",
  },
  {
    id: "anderlecht",
    city: "Eastwood Mall",
    address: "4th Floor, Eastwood Mall, Quezon City",
    phone: "+32 2 234 5678",
    email: "pedalcafeph@gmail.com",
    hours: [
      { days: "Monday - Sunday", hours: "10am - 10pm" },
    ],
    description:
      "Pedal Cafe's location in Eastwood Mall, Quezon City. Featuring a full coffee bar, fresh pastries, and indoor seating.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    mapUrl: "https://maps.app.goo.gl/GWqsjfXKA7Uequnq5",
  },
  {
    id: "machelen",
    city: "Malabon",
    address: "2nd Floor, Sky Plaza Victoneta, Malabon",
    phone: "+32 2 345 6789",
    email: "machelen@pedalcafe.com",
    hours: [
      { days: "Monday - Wednesday", hours: "11am-8pm" },
      { days: "Thursday - Sunday", hours: "10:30am-8pm" },
    ],
    description:
      "Pedal Cafe's location in Sky Plaza Victoneta, Malabon. Featuring a full coffee bar, fresh pastries, and indoor seating.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978&auto=format&fit=crop",
    mapUrl: "https://maps.app.goo.gl/ZKhxmQ9ZNLrCtm5D6",
  },
]

export default function LocationsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Locations</h1>
        <p className="mt-4 text-muted-foreground">Find a Pedal Cafe near you</p>
      </div>

      {/* Permanent Locations */}
      <section>
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl" data-aos="fade-up">Permanent Cafes</h2>
        <div className="grid gap-12">
          {locations.map((location, index) => (
            <div
              key={location.id}
              id={location.id}
              className="scroll-mt-16 rounded-xl border bg-white p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div className="cafe-image overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.city} location`}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay={index * 100 + 200}>
                  <h3 className="text-2xl font-bold text-primary">{location.city}</h3>
                  <p className="mt-2 text-muted-foreground">{location.description}</p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        {location.hours.map((schedule, index) => (
                          <div key={index}>
                            <span className="font-medium">{schedule.days}:</span> {schedule.hours}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="cafe-button gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                        View on Map <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
