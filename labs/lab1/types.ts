export enum OrderStatus {
  NEW = "NEW",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED"
}

export enum PaymentMethod {
  CARD = "CARD",
  PAYPAL = "PAYPAL",
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY"
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

export enum ShipmentMethod {
  COURIER = "COURIER",
  POST = "POST",
  PICKUP = "PICKUP"
}

export enum ShipmentStatus {
  PENDING = "PENDING",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  RETURNED = "RETURNED"
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  postalCode: string
  registeredAt: Date
}

export interface Category {
  id: number
  name: string
  parentCategoryId?: number
}

export interface Product {
  id: number
  name: string
  description?: string
  price: number
  stockQuantity: number
  categoryId: number
}

export interface Order {
  id: number
  userId: number
  totalAmount: number
  status: OrderStatus
  createdAt: Date
}

export interface OrderProduct {
  id: number
  orderId: number
  productId: number
  quantity: number
  priceAtPurchase: number
}

export interface Payment {
  id: number
  orderId: number
  amount: number
  method: PaymentMethod
  status: PaymentStatus
}

export interface Shipment {
  id: number
  orderId: number
  method: ShipmentMethod
  status: ShipmentStatus
  trackingNumber: number
}
