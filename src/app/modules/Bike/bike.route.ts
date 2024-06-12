import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { BikeValidation } from './bike.validation'
import { bikeController } from './bike.controller'

const router = express.Router()

// !create bike Route

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(BikeValidation.createBikeValidationSchema),
  bikeController.createBikeData,
)

export const bikeRoutes = router
