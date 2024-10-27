import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import { multerUpload } from '../../config/multer.config'
import { parseBody } from '../../middlewares/bodyParser'
import validateRequest from '../../middlewares/validateRequest'
import { brandValidation } from './brand.validation'
import { brandController } from './brand.controller'

const router = express.Router()

//brand data add route
router.post(
  '/create-brand',
  auth(USER_ROLE.admin),
  multerUpload.single('image'),
  parseBody,
  validateRequest(brandValidation.createBrandValidation),
  brandController.createBrandData,
)

//brand data fetch route
router.get('/', brandController.getAllBrandData)

//update brand data route

router.put('/:id', auth(USER_ROLE.admin), brandController.updateBrandData)

// Delete brand data route
router.delete('/:id', auth(USER_ROLE.admin), brandController.deleteBrandData)
export const brandRoutes = router
