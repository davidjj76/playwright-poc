import { test, expect } from '@playwright/test';

test('has welcome message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Welcome to Vite from Playwright')).toBeVisible();
});
