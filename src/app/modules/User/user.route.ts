import express from 'express'
import { userControllers } from './user.controller'

const router = express.Router()

//* Get A single user Route

router.get('/me', userControllers.getSingleUser)

export const userRoute = router
