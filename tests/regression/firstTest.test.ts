import { test } from "@playwright/test"

test("TC-001: Navigate to login page", async ({ page }) => {
    const baseUrl = process.env.BASE_URL as string
    await page.goto(baseUrl)
})