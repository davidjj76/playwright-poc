import { test, expect } from '@playwright/test';

test('has welcome message', async ({ page }) => {
  console.log('CI is', process.env.CI);
  await page.goto('/');
  await expect(page.getByText('Welcome to Vite from Playwright')).toBeVisible();
});
