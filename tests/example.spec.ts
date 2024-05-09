import { test, expect } from '@playwright/test'

test('test Docs', async ({ page }) => {
  await page.goto('https://my-travels-iota.vercel.app/')
  const page1Promise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'Docs12 -> Find in-depth' }).click()
  const page1 = await page1Promise
  await expect(page1.getByText('Next.js is a React framework')).toBeVisible()
})

test('test  Templates', async ({ page }) => {
  await page.goto('https://my-travels-iota.vercel.app/')
  const page1Promise = page.waitForEvent('popup')
  await page.getByRole('link', { name: 'Templates -> Explore starter' }).click()
  const page1 = await page1Promise
  await page1.goto('https://vercel.com/templates?framework=next.js')
  await expect(page1.getByText('Find your Template')).toBeVisible()
})
