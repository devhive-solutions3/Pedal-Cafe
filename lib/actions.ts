"use server"

import { revalidatePath } from "next/cache"
import type { Order, NewsletterSubscription } from "./types"

// This is a mock function that would normally connect to a database
export async function submitOrder(order: Order) {
  // In a real application, you would save the order to a database
  console.log("Order submitted:", order)

  // Simulate a delay to mimic a database operation
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Revalidate the menu page to reflect any changes
  revalidatePath("/menu")

  return { success: true }
}

// This is a mock function that would normally connect to a newsletter service
export async function subscribeToNewsletter(email: string) {
  // In a real application, you would save the email to a database or send it to a service like Mailchimp
  console.log("Newsletter subscription:", email)

  const subscription: NewsletterSubscription = {
    email,
    subscribedAt: new Date().toISOString(),
  }

  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
