/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export type TRole = 'admin' | 'user'

export interface TUser {
  name: string
  email: string
  password: string
  phone: string
  address: string
  role: TRole
}

export interface UserModel extends Model<TUser> {
  //* instance methods for checking if the user exist

  isUserExistsByEmail(email: string): Promise<TUser>
  //* instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}
