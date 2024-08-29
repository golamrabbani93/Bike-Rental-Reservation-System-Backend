import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import { couponController } from './coupon.controller'

const router = express.Router()

// *create Coupon Route

router.post('/', auth(USER_ROLE.admin), couponController.createCoupon)

//* Get ALl Coupon Route
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  couponController.getAllCoupon,
)
export const couponRoutes = router
