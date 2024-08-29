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

// *Return bike
const returnBikeRental = catchAsync(async (req: Request, res: Response) => {
  const bikeId = req.params.id
  const result = await rentalServices.returnBikeRentalFormDB(bikeId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike returned successfully',
    data: result,
  })
})

// * get my rental
const getMyRental = catchAsync(async (req: Request, res: Response) => {
  const userData = req.user
  const query = req.query
  const result = await rentalServices.getMyRentalFromDB(userData, query)
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rentals retrieved successfully',
      data: result,
    })
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
})

// *Update bike data
const updateRentalData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const bikeData = req.body
  const result = await rentalServices.updateRentalIntoDB(id, bikeData)
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Rental updated successfully',
      data: result,
    })
  }
})
export const rentalController = {
  createBikeRental,
  returnBikeRental,
  getMyRental,
  updateRentalData,
}
