import { test, expect } from '@playwright/test';

test.describe('End to end tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
    });

    test('Page opens with empty values', async ({ page }) => {    
        await expect(page.getByRole('textbox', { name: 'Temperature: °C' })).toHaveValue('0');
        await expect(page.getByRole('textbox', { name: 'Duration: minutes' })).toHaveValue('0');
        await expect(page.locator('#root')).toContainText('Temperature:');
        await expect(page.locator('#root')).toContainText('Duration:');
    });

    test('Entering oven temperature updates air fryer calculated values', async({ page }) => {
        await page.getByRole('textbox', { name: 'Temperature: °C' }).click();
        await page.getByRole('textbox', { name: 'Temperature: °C' }).fill('200');
        await expect(page.locator('#root')).toContainText('Temperature: 180°C');
        await page.getByRole('textbox', { name: 'Duration: minutes' }).click();
        await page.getByRole('textbox', { name: 'Duration: minutes' }).fill('25');
        await expect(page.locator('#root')).toContainText('Duration: 20 minutes');
    });

    test('Updating units changes the unit displayed and recalculates values', async({ page }) => {
        await page.getByRole('textbox', { name: 'Temperature: °C' }).click();
        await page.getByRole('textbox', { name: 'Temperature: °C' }).fill('200');
        await page.getByRole('textbox', { name: 'Duration: minutes' }).click();
        await page.getByRole('textbox', { name: 'Duration: minutes' }).fill('25');
        await expect(page.locator('#root')).toContainText('Temperature: 180°C');
        await expect(page.locator('#root')).toContainText('Duration: 20 minutes');
        await page.getByTestId('units-button').click();
        await expect(page.locator('#root')).toContainText('Temperature: 175°F');
        await expect(page.locator('#root')).toContainText('Duration: 20 minutes');
    });

    test('Toggling oven type updates heading and calculation', async ({ page }) => {
        await expect(page.getByTestId('oven-settings-header')).toContainText('Conventional oven settings');
        await page.getByTestId('fan-button').click();
        await expect(page.getByTestId('oven-settings-header')).toContainText('Fan assisted oven settings');
        await page.getByRole('textbox', { name: 'Temperature: °C' }).click();
        await page.getByRole('textbox', { name: 'Temperature: °C' }).fill('200');
        await expect(page.locator('#root')).toContainText('Temperature: 160°C');
        await page.getByTestId('fan-button').click();
        await expect(page.locator('#root')).toContainText('Temperature: 180°C');
    });
})

