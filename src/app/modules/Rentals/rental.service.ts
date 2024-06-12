import { JwtPayload } from 'jsonwebtoken'
import { TRental } from './rental.interface'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Rental } from './rental.model'
import mongoose from 'mongoose'
import { Bike } from '../Bike/bike.model'

const createBikeRentalIntoDB = async (
  userData: JwtPayload,
  payload: TRental,
) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    const userId = userData?.userId

    //  * update Bike isAvailable Property
    const updatedBike = await Bike.findByIdAndUpdate(
      payload?.bikeId,
      {
        isAvailable: false,
      },
      {
        new: true,
        session,
      },
    )
    if (!updatedBike) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Create Rental')
    }

    // * Save Rental Data In to Database

    const newRental = await Rental.create([{ ...payload, userId }], { session })
    if (!newRental.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'aild To Create Rental')
    }
    await session.commitTransaction()
    await session.endSession()
    return newRental
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student')
  }
}

export const rentalServices = {
  createBikeRentalIntoDB,
}
