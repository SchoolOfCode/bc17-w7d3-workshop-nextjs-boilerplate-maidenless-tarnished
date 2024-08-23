const { test, expect} = require('@playwright/test');

test('User can fill out forms', async ({page}) => {
    // Tests it goes to the home page

    await page.goto('http://localhost:3000');
    // Tests the Book consultation was clicked

    await page.click('text=Book Consultation');
    // Test the form has been filled out
    await page.fill('input[name = "fullName"]', 'Steve Jobs');
    await page.fill('input[name = "email"]', 'jobs@email.com');
    await page.fill('input[name = "phoneNumber"]', '0800001066');
    await page.fill('input[name = "houseDetails"]', 'House name');
    await page.fill('input[name = "city"]', "London")
    await page.fill('input[name = "postcode"]', 'AB1 2CD');

    //Test submit is working
    await page.click('button[type="submit"]');

    //Test if success messege shown

    await expect(page.locator('text =Form Submitted')). toBeVisible();
})

