const {test, expect} = require('@playwright/test')

test('User can travel to founders page', async ({page}) =>{
    
    //Tests if home page used
    await page.goto('http://localhost:3000');
    
    // Tests the reviews are being pulled
    await page.click('text = England');
    await page.waitForResponse( response => response.url(). includes ('https://seal-app-336e8.ondigitalocean.app/reviews?country=england'));

    // Tests if the founders page has been reached.
    await page.click('img[src = "/menu-open-button.png"]');
    await page.click('text = Meet the Founders');
    await page.goto('http://localhost:3000/founders');
})