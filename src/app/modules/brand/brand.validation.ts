import { z } from 'zod'

const createBrandValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    image: z.string().optional(),
  }),
})

export const brandValidation = {
  createBrandValidation,
}
