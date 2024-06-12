import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { rentalServices } from './rental.service'

// *create bike data
const createBikeRental = catchAsync(async (req: Request, res: Response) => {
  const userData = req.user
  const rentalData = req.body
  const result = await rentalServices.createBikeRentalIntoDB(
    userData,
    rentalData,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rental created successfully',
    data: result[0],
  })
})

export const rentalController = {
  createBikeRental,
}
