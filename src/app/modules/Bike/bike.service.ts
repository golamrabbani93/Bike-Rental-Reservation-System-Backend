import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBike } from './bike.interface'
import { Bike } from './bike.model'

// *Create Bike Data In to Database
const createBikeDataIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload)
  return result
}
// * Get all Bike Data From Database
const getAllBikeDataFormDB = async () => {
  const result = await Bike.find()
  return result
}

// *Update Bike Data By bike Id

const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
  // const existsBike = await Bike.findById(id)
  // // if (!existsBike) {
  // //   throw new AppError(
  // //     httpStatus.NOT_FOUND,
  // //     'This Bike is not Exists in Database',
  // //   )
  // // }

  const result = await Bike.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

// * Delete Bike Data By Bike Id

const deleteBikeDataFromDB = async (id: string) => {
  const existsBike = await Bike.findById(id)
  if (!existsBike) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Bike is not Exists in Database',
    )
  }
  const result = await Bike.findByIdAndDelete(id, { new: true })
  return result
}
export const bikeServices = {
  createBikeDataIntoDB,
  getAllBikeDataFormDB,
  updateBikeIntoDB,
  deleteBikeDataFromDB,
}
