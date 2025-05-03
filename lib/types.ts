export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
}

export interface Order {
  customer: {
    name: string
    email: string
    phone: string
    pickupTime: string
    pickupLocation: string
  }
  items: {
    id: string
    name: string
    price: number
    quantity: number
  }[]
  total: number
  orderDate: string
}

export interface NewsletterSubscription {
  email: string
  subscribedAt: string
}
