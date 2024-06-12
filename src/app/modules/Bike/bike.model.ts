import { Schema, model } from 'mongoose'
import { TBike } from './bike.interface'

const BikeSchema = new Schema<TBike>({
  name: {
    type: String,
    required: [true, 'Bike Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  pricePerHour: {
    type: Number,
    required: [true, 'Price Per Hour is required'],
  },
  cc: {
    type: Number,
    required: [true, 'Bike CC is required'],
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
  },
  model: {
    type: String,
    required: [true, 'Bike Model is required'],
  },
  brand: {
    type: String,
    required: [true, 'Bike Brand is required'],
  },
})

export const Bike = model<TBike>('Bike', BikeSchema)
