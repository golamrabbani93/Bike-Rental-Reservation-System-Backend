import { Types } from 'mongoose'

export interface TRental {
  userId: Types.ObjectId
  bikeId: Types.ObjectId
  startTime: Date
  returnTime?: Date | null
  totalCost?: number
  paymentStatus?: string
  advance: number
  discount: number
  payment: number
  isReturned?: boolean
}
