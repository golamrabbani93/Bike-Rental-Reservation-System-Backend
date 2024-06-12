import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { bikeServices } from './bike.service'
import httpStatus from 'http-status'

// *create bike data
const createBikeData = catchAsync(async (req: Request, res: Response) => {
  const bikeData = req.body
  const result = await bikeServices.createBikeDataIntoDB(bikeData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike added successfully',
    data: result,
  })
})

// *Get All bike data
const getAllBikeData = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeServices.getAllBikeDataFormDB()
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Bikes retrieved successfully',
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
const updateBikeData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const bikeData = req.body
  const result = await bikeServices.updateBikeIntoDB(id, bikeData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  })
})
export const bikeController = {
  createBikeData,
  getAllBikeData,
  updateBikeData,
}
