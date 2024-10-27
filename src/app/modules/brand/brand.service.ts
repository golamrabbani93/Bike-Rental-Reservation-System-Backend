import { IBrand } from './brand.interface'
import { Brand } from './brand.model'

//createBrandIntoDB
const createBrandIntoDB = async (brand: IBrand) => {
  const result = await Brand.create(brand)
  return result
}

//getBrandFromDB
const getBrandFromDB = async () => {
  const result = await Brand.find()
  return result
}

//getBrandByIdFromDB
const getBrandByIdFromDB = async (id: string) => {
  const result = await Brand.findById(id)
  return result
}

//updateBrandByIdIntoDB

const updateBrandByIdIntoDB = async (id: string, brand: IBrand) => {
  const result = await Brand.findByIdAndUpdate(id, brand, { new: true })
  return result
}

//deleteBrandByIdFromDB
const deleteBrandByIdFromDB = async (id: string) => {
  const result = await Brand.findByIdAndDelete(id)
  return result
}

export const brandService = {
  createBrandIntoDB,
  getBrandFromDB,
  getBrandByIdFromDB,
  updateBrandByIdIntoDB,
  deleteBrandByIdFromDB,
}
