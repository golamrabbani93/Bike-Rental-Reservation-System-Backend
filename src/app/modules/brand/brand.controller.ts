import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { bikeServices } from '../Bike/bike.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { brandService } from './brand.service'

// *create brand data
const createBrandData = catchAsync(async (req: Request, res: Response) => {
  const brandData = req.body

  const image = req.file
  const newBrandData = { ...brandData, image: image?.path }
  const result = await brandService.createBrandIntoDB(newBrandData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand added successfully',
    data: result,
  })
})

// *Get All brand data
const getAllBrandData = catchAsync(async (req: Request, res: Response) => {
  const result = await brandService.getBrandFromDB()
  if (result?.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Brands retrieved successfully',
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

// *get a  brand data
const getABrandData = catchAsync(async (req: Request, res: Response) => {
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
      message: 'Brand retrieved successfully',
      data: result,
    })
  }
})

//update a brand data
const updateBrandData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const bikeData = req.body
  const result = await brandService.updateBrandByIdIntoDB(id, bikeData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand updated successfully',
    data: result,
  })
})

//delete a brand data
const deleteBrandData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await brandService.deleteBrandByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Brand deleted successfully',
    data: result,
  })
})

export const brandController = {
  createBrandData,
  getAllBrandData,
  getABrandData,
  updateBrandData,
  deleteBrandData,
}
