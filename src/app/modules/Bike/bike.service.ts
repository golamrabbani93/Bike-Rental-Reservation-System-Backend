import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBike } from './bike.interface'
import { Bike } from './bike.model'
import QueryBuilder from '../../builder/queryBuilder'
import { bikeSearchableFields } from './bike.constant'

// *Create Bike Data In to Database
const createBikeDataIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload)
  return result
}
// * Get all Bike Data From Database
const getAllBikeDataFormDB = async (query: Record<string, unknown>) => {
  const bikeQuery = new QueryBuilder(Bike.find(), query)
    .search(bikeSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await bikeQuery.modelQuery
  const meta = await bikeQuery.countTotal()

  return { data: result, meta: meta }
}

// *Get a Bike Data By bike Id

const getABikeDataFromDB = async (id: string) => {
  const result = await Bike.findById(id)
  return result
}

// *Update Bike Data By bike Id

const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
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
  getABikeDataFromDB,
  getAllBikeDataFormDB,
  updateBikeIntoDB,
  deleteBikeDataFromDB,
}
