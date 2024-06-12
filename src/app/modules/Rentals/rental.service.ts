import { JwtPayload } from 'jsonwebtoken'
import { TRental } from './rental.interface'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Rental } from './rental.model'
import mongoose from 'mongoose'
import { Bike } from '../Bike/bike.model'
import { getTotalCost } from './rental.utils'

// ! create Bike
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
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Create Rental')
    }
    await session.commitTransaction()
    await session.endSession()
    return newRental
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Create Rental')
  }
}
// ! Return Bike
const returnBikeRentalFormDB = async (rentalId: string) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    //  * Find Rental By Rental ID
    const existsRental = await Rental.findById(rentalId)
    if (!existsRental) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Get Rental Data')
    }

    //  * update Bike isAvailable Property
    const updatedBike = await Bike.findByIdAndUpdate(
      existsRental?.bikeId,
      {
        isAvailable: true,
      },
      {
        new: true,
        session,
      },
    )
    if (!updatedBike) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Make Bike Return')
    }

    // !get startTime And Current Time
    const startTime = new Date(existsRental?.startTime).toISOString()
    const currentTime = new Date().toISOString()
    // !Get Total Cost Of Bike Rental
    const totalCost = getTotalCost(
      startTime,
      currentTime,
      updatedBike?.pricePerHour as number,
    )
    const newRentalData = {
      returnTime: currentTime, //! Current time when returning the bike
      totalCost: totalCost, //! Calculated based on rental duration
      isReturned: true,
    }
    // * update rental returnTime,totalCost and isReturned field
    const newRental = await Rental.findByIdAndUpdate(rentalId, newRentalData, {
      new: true,
      session,
    })
    if (!newRental) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Make Bike Return')
    }
    await session.commitTransaction()
    await session.endSession()
    return newRental
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Faild To Make Bike Return')
  }
}

// !Get all Rental (my rental)

const getMyRentalFromDB = async (userData: JwtPayload) => {
  const result = await Rental.find({ userId: userData?.userId })
  return result
}
export const rentalServices = {
  createBikeRentalIntoDB,
  returnBikeRentalFormDB,
  getMyRentalFromDB,
}
