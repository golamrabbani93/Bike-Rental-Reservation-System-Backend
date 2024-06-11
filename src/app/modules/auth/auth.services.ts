import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
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
  // * Check User is Exists in Database
  const existsUser = await User.isUserExistsByEmail(payload?.email)
  if (!existsUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !')
  }

  //*checking if the password is correct
  if (
    !(await User.isPasswordMatched(payload?.password, existsUser?.password))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')
  }
}
export const authServices = {
  registerUserIntoDB,
  loginUser,
}
