import { TUser } from '../User/user.interface'
import { User } from '../User/user.model'

// *Register User Info In to Database
const registerUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}

export const authServices = {
  registerUserIntoDB,
}
