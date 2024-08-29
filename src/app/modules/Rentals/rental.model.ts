import mongoose, { Schema, model } from 'mongoose'
import { TRental } from './rental.interface'

const RentalSchema = new Schema<TRental>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  bikeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Bike id is required'],
    ref: 'Bike',
  },
  startTime: {
    type: Date,
    required: true,
  },
  returnTime: {
    type: Date,
    default: null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  paymentStatus: {
    type: String,
    default: 'unpaid',
  },
  advance: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  payment: {
    type: Number,
    default: 0,
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
})

export const Rental = model<TRental>('Rental', RentalSchema)
