import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { deviceService } from './device.service'
import httpStatus from 'http-status'

// *create Device data
const createDevice = catchAsync(async (req: Request, res: Response) => {
  const { device } = req.body
  const result = await deviceService.createDeviceIntoDB(device)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Device Created successfully',
    data: result,
  })
})

// *Get ALl Device Profile
const getAllDevice = catchAsync(async (req: Request, res: Response) => {
  const result = await deviceService.getAllDviceFromDB()
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Device retrieved successfully',
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

export const deviceController = {
  createDevice,
  getAllDevice,
}
