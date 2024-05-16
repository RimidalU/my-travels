import { z } from 'zod'
require('dotenv').config()

const privateConfigSchema = z.object({
  TEST_ENV_BASE_URL: z.string().optional(),
  DATABASE_URL: z.string().optional(),
})

export const privateConfig = privateConfigSchema.parse(process.env)
