import { Schema, model } from 'mongoose'
import { TBike } from './bike.interface'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'

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
  isAvailable: {
    type: Boolean,
    default: true,
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

//  * Check New Bike Data is Exists or Not in Databse
BikeSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const newBikeData = this

  const isExistsBike = await Bike.findOne({
    $and: [
      { name: newBikeData?.name },
      { year: newBikeData?.year },
      { model: newBikeData?.model },
      { brand: newBikeData?.brand },
    ],
  })
  if (isExistsBike) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'This Bike Data Already Exists In Database',
    )
  }

  next()
})
export const Bike = model<TBike>('Bike', BikeSchema)
