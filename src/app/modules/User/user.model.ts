import bcrypt from 'bcrypt'
import { TUser } from './user.interface'
import { Schema, model } from 'mongoose'
import config from '../../config'

const UserSchema = new Schema<TUser>(
  {
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
  },
  {
    timestamps: true,
  },
)

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )

  next()
})

// * Create User Model
export const User = model<TUser>('User', UserSchema)
