import express from 'express'
import { userControllers } from './user.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

//* Get A single user Route

router.get('/me', auth(), userControllers.getSingleUser)

export const userRoutes = router
