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

export const bikeController = {
  createBikeData,
}
