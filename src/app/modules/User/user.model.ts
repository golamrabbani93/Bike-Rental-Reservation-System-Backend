import { TUser } from './user.interface'
import { Schema, model } from 'mongoose'

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // eslint-disable-next-line no-useless-escape
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [4, 'Password Must be 4 Charecter or more'],
  },
  phone: {
    type: String,
    required: [true, 'Phobe Number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    required: [true, 'User Role is required'],
  },
})

// * Create User Model
export const User = model<TUser>('User', UserSchema)
