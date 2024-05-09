import { test, expect } from '@playwright/test'

test('MY-TEST', async ({ page }) => {
  await expect(1 + 1).toBe(2)
})
