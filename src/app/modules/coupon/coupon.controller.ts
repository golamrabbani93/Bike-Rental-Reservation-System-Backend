import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { couponServices } from './coupon.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// *create bike data
const createCoupon = catchAsync(async (req: Request, res: Response) => {
  const couponData = req.body
  const result = await couponServices.createCouponIntoDB(couponData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Coupon Created successfully',
    data: result,
  })
})

// *Get ALl Coupon Profile
const getAllCoupon = catchAsync(async (req: Request, res: Response) => {
  const query = req.query
  const result = await couponServices.getAllCouponFromDB(query)
  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Coupon retrieved successfully',
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

export const couponController = {
  createCoupon,
  getAllCoupon,
}
