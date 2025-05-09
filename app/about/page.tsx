import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Pedal Cafe</h1>
        <p className="mt-4 text-muted-foreground">Our story, mission, and the people behind the coffee</p>
      </div>

      {/* Made in Brussels */}
      <section className="mb-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 md:items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Made in Philippines</h2>
            <p className="mt-4 text-muted-foreground">
              Pedal Cafe was founded in the Philippines in 2022 by two friends who shared a passion for great coffee and
              creative experiences. What began as a small mobile coffee setup has grown into a rising local brand, now
              known for its unique blend of quality brews, cozy ambiance, and community-driven vibe.
            </p>
          </div>
          <div className="cafe-image" data-aos="fade-left">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              alt="Warm café interior"
              width={800}
              height={600}
              className="h-full w-full object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Handmade Just for You */}
      <section className="mb-16">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 cafe-image" data-aos="fade-right">
            <Image
              src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop"
              alt="Handmade coffee preparation"
              width={800}
              height={600}
              className="h-full w-full object-cover rounded-lg shadow-soft"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Handmade Just for You</h2>
            <p className="mt-4 text-muted-foreground">
              Every cup of coffee we serve is prepared with care by our skilled baristas. We believe that great coffee
              is an art form that requires attention to detail, quality ingredients, and passion.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our pastries are baked fresh daily in our central kitchen, using traditional recipes and the finest local
              ingredients. From our signature croissants to seasonal specialties, everything is made by hand with love.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-16 rounded-xl bg-[#f4d398]/20 p-8 shadow-soft" data-aos="fade-up">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl text-[#b78254]">
          What Our Customers Are Saying
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              quote: "Every cup tastes amazing, and I love the friendly vibe every time I visit!",
              author: "Alyssa R.",
            },
            {
              quote: "I always order the Spanish Latte. It's the best I've had!",
              author: "Mark S.",
            },
            {
              quote: "Super convenient and consistent — my go-to coffee before work.",
              author: "Janelle P.",
            },
            {
              quote: "Affordable, delicious, and the baristas are great. 5 stars!",
              author: "Leo M.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-soft transition-all duration-200 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="font-poppins text-lg text-muted-foreground">"{testimonial.quote}"</p>
              <p className="mt-4 font-poppins font-medium text-[#b78254]">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Ready to Experience Pedal Cafe?</h2>
        <p className="mt-4 text-muted-foreground">Visit one of our locations or order online for pickup</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="cafe-button">
            <Link href="/menu">Order Online</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="cafe-button border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/locations">Find a Location</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
