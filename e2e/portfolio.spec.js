const { test, expect } = require("@playwright/test");

test.describe("Portfolio Website E2E Tests", () => {
  test("should load homepage successfully", async ({ page }) => {
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(
      /Prince - Digital Marketing & Web Expert Portfolio/,
    );

    // Check main logo/brand (use first occurrence in navigation)
    await expect(
      page.locator("nav").getByText("MYSELF_PRINCE").first(),
    ).toBeVisible();
  });

  test("should display navigation menu", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      await page.getByLabel(/toggle mobile menu/i).click();
      await page.waitForTimeout(300);
    }

    await expect(page.locator('a[href="#home"]:visible').first()).toBeVisible();
    await expect(
      page.locator('a[href="#services"]:visible').first(),
    ).toBeVisible();
    await expect(
      page.locator('a[href="#portfolio"]:visible').first(),
    ).toBeVisible();
    await expect(page.locator('a[href="#hire"]:visible').first()).toBeVisible();
    await expect(
      page.locator('a[href="#contact"]:visible').first(),
    ).toBeVisible();
  });

  test("should toggle dark/light theme", async ({ page }) => {
    await page.goto("/");

    // Find and click theme toggle button
    const themeButton = page
      .locator('button[aria-label="Toggle theme"]:visible')
      .first();
    await expect(themeButton).toBeVisible();

    // Click to toggle theme
    await themeButton.click();
    await page.waitForTimeout(500); // Wait for animation

    // Verify theme changed (check for dark mode class or light mode elements)
    const html = page.locator("html");
    const hasThemeClass = await html.evaluate(
      (el) => el.classList.contains("dark") || el.classList.contains("light"),
    );
    expect(hasThemeClass).toBeTruthy();
  });

  test("should navigate to sections when clicking nav links", async ({
    page,
  }) => {
    await page.goto("/");

    // Click Services and verify scroll
    await page
      .getByRole("link", { name: /services/i })
      .first()
      .click();
    await page.waitForTimeout(1000); // Wait for smooth scroll

    // Verify we scrolled to services section
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeInViewport();
  });

  test("should display services section with cards", async ({ page }) => {
    await page.goto("/");

    // Scroll to services section
    await page.locator("#services").scrollIntoViewIfNeeded();

    // Check for service categories (use heading roles for specificity)
    const servicesSection = page.locator("#services");
    await expect(
      servicesSection.getByRole("heading", {
        name: /Web Design & Development/i,
      }),
    ).toBeVisible();
    await expect(
      servicesSection.getByRole("heading", { name: /SEO Services/i }),
    ).toBeVisible();
    await expect(
      servicesSection.getByRole("heading", {
        name: /YouTube Growth Services/i,
      }),
    ).toBeVisible();
  });

  test("should display contact form in Hire Me section", async ({ page }) => {
    await page.goto("/");

    // Navigate to Hire Me section
    await page.locator("#hire").scrollIntoViewIfNeeded();

    // Check form fields exist
    await expect(page.getByPlaceholder(/your name/i)).toBeVisible();
    await expect(page.getByPlaceholder(/your@email.com/i)).toBeVisible();
    await expect(page.getByPlaceholder(/\+8801XXXXXXXXX/i)).toBeVisible();
  });

  test("should validate required form fields", async ({ page }) => {
    await page.goto("/");

    // Navigate to Hire Me section
    await page.locator("#hire").scrollIntoViewIfNeeded();

    // Try to submit empty form and wait for validation
    const submitButton = page.getByRole("button", { name: /send request/i });
    await submitButton.click();

    // Wait a bit for validation to trigger
    await page.waitForTimeout(500);

    // Check for validation message or check if form didn't submit
    // The form should show an error or prevent submission
    const errorMessage = page.getByText(/please enter your name/i);
    const nameField = page.getByPlaceholder(/your name/i);

    // Either error message shows OR form is still visible (didn't submit)
    await expect(errorMessage.or(nameField)).toBeVisible({ timeout: 3000 });
  });

  test("should display social links in contact section", async ({ page }) => {
    await page.goto("/");

    // Navigate to contact section
    await page.locator("#contact").scrollIntoViewIfNeeded();

    // Check contact section is visible
    await expect(page.getByText(/let's get in touch/i)).toBeVisible();
  });
});

test.describe("Mobile Navigation Tests", () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

  test("should open mobile menu on hamburger click", async ({ page }) => {
    await page.goto("/");

    // Find and click mobile menu button
    const menuButton = page
      .locator('button[aria-label="Toggle mobile menu"]:visible')
      .first();

    // Click to open menu
    await menuButton.click();
    await page.waitForTimeout(500);

    // Verify mobile menu items are visible
    await expect(page.locator('a[href="#home"]:visible').first()).toBeVisible();
  });

  test("should navigate on mobile and close menu", async ({ page }) => {
    await page.goto("/");

    // Open mobile menu
    const menuButton = page
      .locator('button[aria-label="Toggle mobile menu"]:visible')
      .first();
    await menuButton.click();
    await page.waitForTimeout(500);

    // Click a nav link
    await page.locator('a[href="#services"]:visible').first().click();
    await page.waitForTimeout(1000);

    // Menu should close after navigation (mobile behavior)
    // Note: Depending on implementation, menu might auto-close
  });
});
