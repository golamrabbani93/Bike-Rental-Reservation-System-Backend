import express from 'express'
import { userControllers } from './user.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = express.Router()

//* Get A single user Route

router.get(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin),
  userControllers.getSingleUser,
)

export const userRoutes = router
