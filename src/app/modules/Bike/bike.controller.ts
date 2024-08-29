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
  const query = req.query
  const result = await bikeServices.getAllBikeDataFormDB(query)
  if (result?.data?.length > 0) {
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

// *get a  bike data
const getABikeData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await bikeServices.getABikeDataFromDB(id)
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
      message: 'Bike retrieved successfully',
      data: result,
    })
  }
})

// *Update bike data
const updateBikeData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const bikeData = req.body
  const result = await bikeServices.updateBikeIntoDB(id, bikeData)
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
      message: 'Bike updated successfully',
      data: result,
    })
  }
})

// *UpdDeleteate bike data
const deleteBikeData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await bikeServices.deleteBikeDataFromDB(id)
  if (!result) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: [],
    })
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  })
})
export const bikeController = {
  createBikeData,
  getAllBikeData,
  getABikeData,
  updateBikeData,
  deleteBikeData,
}
