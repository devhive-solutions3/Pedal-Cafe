import type React from "react"
import type { Metadata } from "next"
import { Poppins, Zilla_Slab } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/radix/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import EventBookingWidget from "@/components/event-booking-widget"
import { ScrollAnimator } from "@/components/ScrollAnimator"
import FloatingActions from "@/components/FloatingActions"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const zillaSlab = Zilla_Slab({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zilla-slab",
})

export const metadata: Metadata = {
  title: "Pedal Cafe",
  description: "Handcrafted coffee and pastries on wheels",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className={`${poppins.className} ${zillaSlab.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <ScrollAnimator />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <EventBookingWidget />
            <FloatingActions />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
