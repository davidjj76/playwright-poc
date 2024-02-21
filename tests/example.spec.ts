import { test, expect } from '@playwright/test';

test('should have welcome message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Welcome to Vite from Playwright')).toBeVisible();
});

test('should have snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
    maxDiffPixelRatio: 0.01,
  });
});
