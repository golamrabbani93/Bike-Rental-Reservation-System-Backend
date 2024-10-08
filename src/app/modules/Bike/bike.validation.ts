import { z } from 'zod'

export const createBikeValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Bike Name must be string',
        required_error: 'Bike Name is required',
      })
      .min(1),
    description: z.string({
      invalid_type_error: 'description must be string',
      required_error: 'description is required',
    }),
    pricePerHour: z.number({
      invalid_type_error: 'Price Per Hour must be Number',
      required_error: 'Price Per Hour is required',
    }),
    cc: z.number({
      invalid_type_error: 'Bike CC must be Number',
      required_error: 'Bike CC is required',
    }),
    year: z.number({
      invalid_type_error: 'Year must be Number',
      required_error: 'Year is required',
    }),

    model: z.string({
      invalid_type_error: 'Bike Model must be String',
      required_error: 'Bike Model is required',
    }),
    brand: z.string({
      invalid_type_error: 'Bike Brand must be String',
      required_error: 'Bike Brand is required',
    }),
  }),
})

export const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Bike Name must be string',
        required_error: 'Bike Name is required',
      })
      .min(1)
      .optional(),
    image: z
      .string({
        invalid_type_error: 'Image URL must be string',
        required_error: 'Image URL is required',
      })
      .min(1)
      .optional(),
    description: z
      .string({
        invalid_type_error: 'description must be string',
        required_error: 'description is required',
      })
      .optional(),
    pricePerHour: z
      .number({
        invalid_type_error: 'Price Per Hour must be Number',
        required_error: 'Price Per Hour is required',
      })
      .optional(),
    cc: z
      .number({
        invalid_type_error: 'Bike CC must be Number',
        required_error: 'Bike CC is required',
      })
      .optional(),
    year: z
      .number({
        invalid_type_error: 'Year must be Number',
        required_error: 'Year is required',
      })
      .optional(),

    model: z
      .string({
        invalid_type_error: 'Bike Model must be String',
        required_error: 'Bike Model is required',
      })
      .optional(),
    brand: z
      .string({
        invalid_type_error: 'Bike Brand must be String',
        required_error: 'Bike Brand is required',
      })
      .optional(),
  }),
})
export const BikeValidation = {
  createBikeValidationSchema,
  updateBikeValidationSchema,
}
