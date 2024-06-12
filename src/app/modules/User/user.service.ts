import { JwtPayload } from 'jsonwebtoken'
import { User } from './user.model'

// *Get User Profile From Database
const getSingleUserFromDB = async (payload: JwtPayload) => {
  const result = await User.findOne({
    email: payload?.userEmail,
    role: payload?.role,
  })
  return result
}

export const userServices = {
  getSingleUserFromDB,
}
