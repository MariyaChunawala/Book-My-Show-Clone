import { test, expect, Page } from '@playwright/test';

test.describe('HomePage Tests', () => {
    test('should display popular movies', async ({ page }) => {
        await page.goto('http://localhost:3000');

        await expect(page).toHaveTitle(/React App/);

        // Check Premiere section
        const premiereSection = page.locator('text=Premiere');
        await expect(premiereSection).toBeVisible();

        // Wait for images to load
        const premiereImages = page.locator('.bg-bms-1000 .poster-slider img');
        await premiereImages.first().waitFor({ state: 'visible', timeout: 10000 });
        const imageCount = await premiereImages.count();
        await expect(imageCount).toBeGreaterThan(0);

        // Check that the images have valid src attributes
        for (let i = 0; i < imageCount; i++) {
            const src = await premiereImages.nth(i).getAttribute('src');
            await expect(src).not.toBeNull();
        }

        // Click on the first poster
        const firstPoster = premiereImages.first();
        const movieId = await firstPoster.getAttribute('data-movie-id');
        console.log(`Movie ID: ${movieId}`); // Log the movie ID
        // Log the current URL before clicking
        console.log(`URL before click: ${page.url()}`);
        await firstPoster.click();

        // Log the current URL before clicking
        console.log(`URL After click: ${page.url()}`);

        const currentUrl = page.url();
        await expect(currentUrl).toContain(`/movie/${movieId}`);
    });

    test('should display top rated movies', async ({ page }) => {
        await page.goto('http://localhost:3000');

        // Check Top Rated Movies section
        const topRatedSection = page.locator('text=Online Streaming Events');
        await expect(topRatedSection).toBeVisible();

        // Wait for images to load
        const topRatedImages = page.locator('.container:has-text("Online Streaming Events") .poster-slider img');
        await topRatedImages.first().waitFor({ state: 'visible', timeout: 10000 });
        const imageCount = await topRatedImages.count();
        await expect(imageCount).toBeGreaterThan(0);

        // Check that the images have valid src attributes
        for (let i = 0; i < imageCount; i++) {
            const src = await topRatedImages.nth(i).getAttribute('src');
            await expect(src).not.toBeNull();
        }
    });

    test('should display upcoming movies', async ({ page }) => {
        await page.goto('http://localhost:3000');

        // Check Upcoming Movies section
        const upcomingSection = page.locator('text=Outdoor Events');
        await expect(upcomingSection).toBeVisible();

        // Wait for images to load
        const upcomingImages = page.locator('.container:has-text("Outdoor Events") .poster-slider img');
        await upcomingImages.first().waitFor({ state: 'visible', timeout: 10000 });
        const imageCount = await upcomingImages.count();
        await expect(imageCount).toBeGreaterThan(0);
        for (let i = 0; i < imageCount; i++) {
            const src = await upcomingImages.nth(i).getAttribute('src');
            await expect(src).not.toBeNull();
        }
    });

    test('should display now playing movies', async ({ page }) => {
        await page.goto('http://localhost:3000');

        // Check Now Playing Movies section
        const nowPlayingSection = page.locator('text=Laughter Therapy');
        await expect(nowPlayingSection).toBeVisible();

        // Wait for images to load
        const nowPlayingImages = page.locator('.container:has-text("Laughter Therapy") .poster-slider img');
        await nowPlayingImages.first().waitFor({ state: 'visible', timeout: 10000 });
        const imageCount = await nowPlayingImages.count();
        await expect(imageCount).toBeGreaterThan(0);
        for (let i = 0; i < imageCount; i++) {
            const src = await nowPlayingImages.nth(i).getAttribute('src');
            await expect(src).not.toBeNull();
        }
    });
});
