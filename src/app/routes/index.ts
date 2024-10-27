import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { userRoutes } from '../modules/User/user.route'
import { bikeRoutes } from '../modules/Bike/bike.route'
import { rentalRoutes } from '../modules/Rentals/rental.route'
import { couponRoutes } from '../modules/coupon/coupon.route'
import { brandRoutes } from '../modules/brand/brand.route'
import { deviceRoutes } from '../modules/device/device.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/brands',
    route: brandRoutes,
  },
  {
    path: '/bikes',
    route: bikeRoutes,
  },
  {
    path: '/rentals',
    route: rentalRoutes,
  },
  {
    path: '/coupons',
    route: couponRoutes,
  },
  {
    path: '/devices',
    route: deviceRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
