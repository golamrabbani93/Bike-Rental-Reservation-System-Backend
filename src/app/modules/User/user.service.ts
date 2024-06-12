import { User } from './user.model'

const getSingleUserFromDB = async () => {
  const result = await User.find({})
  return result
}

export const userServices = {
  getSingleUserFromDB,
}
