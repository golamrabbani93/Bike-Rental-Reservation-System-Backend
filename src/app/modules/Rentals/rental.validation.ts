import { z } from 'zod'

export const createBikeRentalValidationSchema = z.object({
  body: z.object({
    bikeId: z.string({
      invalid_type_error: 'Bike Id must be String',
      required_error: 'Bike Id is required',
    }),
    startTime: z.string({
      invalid_type_error: 'Start Time must be String',
      required_error: 'Start Time is required',
    }),
    payment: z.number({
      invalid_type_error: 'Payment must be Number',
      required_error: 'Payment is required',
    }),
    advance: z.number({
      invalid_type_error: 'Advance must be Number',
      required_error: 'Advance is required',
    }),
    discount: z.number({
      invalid_type_error: 'Discount must be Number',
      required_error: 'Discount is required',
    }),
  }),
})
export const updateBikeRentalValidationSchema = z.object({
  body: z.object({
    bikeId: z
      .string({
        invalid_type_error: 'Bike Id must be String',
        required_error: 'Bike Id is required',
      })
      .optional(),
    startTime: z
      .string({
        invalid_type_error: 'Start Time must be String',
        required_error: 'Start Time is required',
      })
      .optional(),
    payment: z
      .number({
        invalid_type_error: 'Payment must be String',
        required_error: 'Payment is required',
      })
      .optional(),
    advance: z
      .number({
        invalid_type_error: 'Advance must be Number',
        required_error: 'Advance is required',
      })
      .optional(),
    discount: z
      .number({
        invalid_type_error: 'Discount must be Number',
        required_error: 'Discount is required',
      })
      .optional(),
  }),
})
