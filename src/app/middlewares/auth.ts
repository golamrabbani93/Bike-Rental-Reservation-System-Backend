import { NextFunction, Request, Response } from 'express'

import catchAsync from '../utils/catchAsync'
import AppError from '../errors/AppError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // *get Token From Headers And Split
    const token = req.headers.authorization?.split(' ')?.[1]

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload
    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
