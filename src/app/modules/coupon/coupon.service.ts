import QueryBuilder from '../../builder/queryBuilder'
import { TCoupon } from './coupon.interface'
import { Coupon } from './coupon.model'

// *Create Bike Data In to Database
const createCouponIntoDB = async (payload: TCoupon) => {
  const result = await Coupon.create(payload)
  return result
}

// *Get ALl Coupon Profile From Database
const getAllCouponFromDB = async (query: Record<string, unknown>) => {
  const search = ['code', 'isActive']
  const couponQuery = new QueryBuilder(Coupon.find(), query)
    .search(search)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await couponQuery.modelQuery

  return result
}
export const couponServices = {
  createCouponIntoDB,
  getAllCouponFromDB,
}
