import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn: RequestHandler) => {
  const a = 0
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      console.log(error)

      next(error)
    })
  }
}

export default catchAsync
