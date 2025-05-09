import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Coffee, MapPin, Bike, Heart } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        {/* Featured Section */}
        <section id="featured" className="py-16 scroll-mt-20" data-aos="fade-up">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Quality */}
            <div className="cafe-card group rounded-lg bg-white p-6 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Coffee className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source the finest coffee beans and use state-of-the-art equipment for the perfect brew.
              </p>
            </div>

            {/* Mobile */}
            <div className="cafe-card group rounded-lg bg-white p-6 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Bike className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Mobile Service</h3>
              <p className="text-muted-foreground">
                Our unique bicycle coffee cart brings the café experience right to your location.
              </p>
            </div>

            {/* Community */}
            <div className="cafe-card group rounded-lg bg-white p-6 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Community First</h3>
              <p className="text-muted-foreground">
                We're proud to be part of the local community, supporting events and initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-primary/5 py-16 scroll-mt-20" data-aos="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ready for Amazing Coffee?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Order now and experience our handcrafted coffee and pastries, or find a Pedal Cafe location near you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="cafe-button">
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="cafe-button border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/locations">Find Locations</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="specialties" className="py-16 scroll-mt-20">
          <div className="mb-10 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">Our Specialties</h2>
            <p className="mt-4 text-muted-foreground">Discover our most loved coffee blends and pastries</p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Belgian Espresso",
                description: "Our signature espresso blend with notes of chocolate and caramel",
                image: "/placeholder-latte-art.png",
              },
              {
                title: "Artisan Croissants",
                description: "Freshly baked croissants made with Belgian butter",
                image: "/fresh-croissants.png",
              },
              {
                title: "Cyclist's Combo",
                description: "Perfect for a quick energy boost - coffee and pastry combo",
                image: "/cafe-coffee-pastry.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg border bg-background shadow-warm transition-all hover:shadow-warm-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-dark">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <Button asChild variant="link" className="mt-4 px-0 text-coffee hover:text-coffee/70">
                    <Link href="/menu" className="flex items-center gap-1 hover:gap-2 transition-all">
                      Order now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview */}
        <section id="about-preview" className="bg-cream/10 py-16 scroll-mt-20">
          <div className="mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">Made in Philippines</h2>
              <p className="mt-4 text-muted-foreground">
                Pedal Cafe started with a simple idea: bring quality coffee to people wherever they are. Our mobile cafes
                combine our love for cycling and coffee culture.
              </p>
              <p className="mt-4 text-muted-foreground">
                Every cup we serve is made with locally roasted beans and served with love. Our pastries are baked fresh
                daily using traditional recipes.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 text-base font-medium border-coffee text-coffee hover:bg-coffee/10 hover:underline flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                <Link href="/about">
                  Learn more about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-warm" data-aos="fade-left">
              <Image
                src="/placeholder-cafe-interior.png"
                alt="Cozy cafe interior"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section id="gallery-preview" className="py-16 scroll-mt-20">
          <div className="mb-10 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">Gallery</h2>
            <p className="mt-4 text-muted-foreground">Glimpses of our cafes, products, and happy customers</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <div className="group col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg shadow-warm sm:col-span-2" data-aos="zoom-in">
              <Image
                src="/event-drinks-table.png"
                alt="Pedal Cafe at events"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group aspect-square overflow-hidden rounded-lg shadow-warm" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/pedal-cafe-barista.png"
                alt="Pedal Cafe barista"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="group aspect-square overflow-hidden rounded-lg shadow-warm" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/pedal-cafe-kiosk-front.png"
                alt="Pedal Cafe kiosk"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="mt-8 text-center" data-aos="fade-up">
            <Button asChild className="cafe-button">
              <Link href="/gallery">View full gallery</Link>
            </Button>
          </div>
        </section>

        {/* Locations Preview */}
        <section id="locations-preview" className="bg-cream/10 py-16 scroll-mt-20">
          <div className="mb-10 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">Our Locations</h2>
            <p className="mt-4 text-muted-foreground">
              Find us at one of our three permanent locations in the Philippines
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                city: "Venice Grand Canal Mall",
                address: "Campus Avenue, McKinley Hill, Taguig",
                hours: "Mon-Fri: 11am-11pm, Sat-Sun: 10am-11pm",
                image: "/placeholder-coffee-cart.png",
              },
              {
                city: "Eastwood Mall",
                address: "4th Floor, Eastwood Mall, Quezon City",
                hours: "Mon-Sun: 10am-10pm",
                image: "/anderlecht-cafe.png",
              },
              {
                city: "Malabon",
                address: "2nd Floor, Sky Plaza Victoneta, Malabon",
                hours: "Mon-Wed: 11am-8pm, Thu-Sun: 10:30am-8pm",
                image: "/machelen-cafe-storefront.png",
              },
            ].map((location, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg bg-background shadow-warm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.city} location`}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-dark">{location.city}</h3>
                  <p className="mt-2 text-muted-foreground">{location.address}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{location.hours}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-coffee text-coffee hover:bg-coffee/10 cafe-button"
                  >
                    <Link
                      href={`/locations#${location.city.toLowerCase()}`}
                      className="flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      View details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="rounded-xl bg-coffee/5 p-6 sm:p-8 md:p-12 bg-coffee-pattern">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-coffee-dark sm:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-muted-foreground">
                Subscribe to our newsletter for special offers, new menu items, and events
              </p>
              <div className="mt-8">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
