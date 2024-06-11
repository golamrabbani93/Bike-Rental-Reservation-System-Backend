import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { authServices } from './auth.services'
import catchAsync from '../../utils/catchAsync'
import { Request, Response } from 'express'

const RegisterUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body
  const result = await authServices.registerUserIntoDB(userData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

export const authControllers = {
  RegisterUser,
}
