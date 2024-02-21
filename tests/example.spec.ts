import { test, expect } from '@playwright/test';

test('has welcome message', async ({ page }) => {
  await page.goto('/');

  console.log('CI is', process.env.CI);

  await expect(page.getByText('Welcome to Vite from Playwright')).toBeVisible();
});
