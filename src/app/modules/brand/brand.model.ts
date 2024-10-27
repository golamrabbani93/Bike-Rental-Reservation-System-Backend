import { model, Schema } from 'mongoose'
import { IBrand } from './brand.interface'

const categorySchema = new Schema<IBrand>({
  name: { type: String, required: true, unique: true },
  image: { type: String },
})

export const Brand = model<IBrand>('Brand', categorySchema)
