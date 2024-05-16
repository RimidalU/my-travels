import { z } from 'zod'
require('dotenv').config()

const privateConfigSchema = z.object({
  TEST_ENV_BASE_URL: z.string(),
  DATABASE_URL: z.string(),
})

export const privateConfig = privateConfigSchema.parse(process.env)
