import { Schema, model } from 'mongoose'
import { TCoupon } from './coupon.interface'

const coupnSchema = new Schema<TCoupon>({
  code: {
    type: String,
    required: [true, 'Coupon Code is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
})
export const Coupon = model<TCoupon>('Coupon', coupnSchema)
