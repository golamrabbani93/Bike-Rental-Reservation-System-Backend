import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { userServices } from './user.service'
import sendResponse from '../../utils/sendResponse'

// *Get Single User Profile
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.user
  const result = await userServices.getSingleUserFromDB(userData)
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

export const userControllers = {
  getSingleUser,
}
