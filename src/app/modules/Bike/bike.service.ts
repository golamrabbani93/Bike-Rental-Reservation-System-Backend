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
export const bikeServices = {
  createBikeDataIntoDB,
  getAllBikeDataFormDB,
}
