import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import {
  createBikeRentalValidationSchema,
  updateBikeRentalValidationSchema,
} from './rental.validation'
import { rentalController } from './rental.controller'

const router = express.Router()

// ! Create Rental Route

router.post(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(createBikeRentalValidationSchema),
  rentalController.createBikeRental,
)
// !Bike Return Route
router.put(
  '/:id/return',
  auth(USER_ROLE.admin),
  rentalController.returnBikeRental,
)

// ! Get My rental route
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  rentalController.getMyRental,
)
router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin),
  rentalController.getMyRental,
)
// ! Get My rental route
router.put(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(updateBikeRentalValidationSchema),
  rentalController.updateRentalData,
)

export const rentalRoutes = router
