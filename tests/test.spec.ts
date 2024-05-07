import { test, expect } from '@playwright/test'

test('MY-TEST', async ({ page }) => {
  await page.goto('/')
  const page1Promise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'Docs12 -> Find in-depth' }).click()
  const page1 = await page1Promise
  await expect(page1.getByText('Next.js is a React framework')).toBeVisible()
})