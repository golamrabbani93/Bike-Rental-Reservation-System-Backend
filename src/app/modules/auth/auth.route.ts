import express from 'express'
import { authControllers } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from '../User/user.validation'

const router = express.Router()

// *Register User Route

router.post(
  '/signup',
  validateRequest(userValidation.RegisterValidatioonSchema),
  authControllers.RegisterUser,
)

export const authRoutes = router
