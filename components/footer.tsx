import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8 items-start">
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-primary">Pedal Cafe</h3>
            <p className="text-sm text-muted-foreground">
              Handcrafted coffee and pastries on wheels. Bringing quality to you since 2022.
            </p>
          </div>

          <div className="text-center md:text-left pl-2 md:pl-6">
            <h3 className="mb-4 text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-primary">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">1234, Pedal Street, Manila City</li>
              <li>
                <a href="tel:+3221234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +63 901 234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pedalcafe.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  pedalcafeph@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-primary">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/pedalcafeph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/pedalcafeph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@pedalcafeph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-muted pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pedal Cafe. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm w-full md:w-auto md:ml-auto md:text-right justify-center md:justify-end">
              <Link href="" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
