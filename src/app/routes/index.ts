import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { userRoutes } from '../modules/User/user.route'
import { bikeRoutes } from '../modules/Bike/bike.route'

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
    path: '/bikes',
    route: bikeRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
