import { TUser } from '../User/user.interface'
import { User } from '../User/user.model'
import { TLoginUser } from './auth.interface'

// *Register User Info In to Database
const registerUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}

// *Login User

const loginUser = async (payload: TLoginUser) => {
  console.log(payload)
}
export const authServices = {
  registerUserIntoDB,
  loginUser,
}
