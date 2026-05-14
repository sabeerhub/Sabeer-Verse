import { test, expect } from '@playwright/test';

test('Verify Hero section layout', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await page.waitForSelector('#home');

  // Take a screenshot of the hero section
  await page.screenshot({ path: 'hero_redesign_v2.png' });

  // Check if headline exists
  const headline = page.locator('#home h1');
  await expect(headline).toBeVisible();
});
