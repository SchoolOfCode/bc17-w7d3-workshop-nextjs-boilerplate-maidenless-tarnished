const { test, expect} = require('@playwright/test');

test('User can go to founders page', async ({page}) => {
    // Tests it goes to the home page

    await page.goto('http://localhost:3000');
    // tests the Book consultation was clicked

    await page.click('text=Book Consultation');

    // Tests if form filled out
    // await page.fill
})

