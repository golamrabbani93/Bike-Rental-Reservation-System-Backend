import express from 'express'
import { deviceController } from './device.controller'

const router = express.Router()

// *create Coupon Route

router.post('/', deviceController.createDevice)

//* Get ALl Coupon Route
router.get('/', deviceController.getAllDevice)
export const deviceRoutes = router
