import { test, expect } from '@playwright/test';

test('should have the title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
});

test('should have the link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page.getByRole('link', { name: 'Learn React' })).toBeVisible;
});
