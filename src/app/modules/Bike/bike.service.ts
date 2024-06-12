import { TBike } from './bike.interface'
import { Bike } from './bike.model'

// *Create Bike Data In to Database
const createBikeDataIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload)
  return result
}

export const bikeServices = {
  createBikeDataIntoDB,
}
