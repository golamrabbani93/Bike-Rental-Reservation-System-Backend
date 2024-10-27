import { model, Schema } from 'mongoose'
import { IDevice } from './device.interface'

const deviceSchema = new Schema<IDevice>({
  desktop: {
    type: Number,
    default: 0,
  },
  tablet: {
    type: Number,
    default: 0,
  },
  mobile: {
    type: Number,
    default: 0,
  },
})

export const Device = model<IDevice>('Device', deviceSchema)
