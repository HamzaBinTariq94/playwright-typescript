import { test, expect } from '@playwright/test';
import { Product } from '../page/product.page';
// import { log } from 'console';

test('All Product', async ({ page }) => {

    const case2 = new Product(page);
    await page.goto('https://www.saucedemo.com/');

    //Assertion
    const currentURL = page.url();
    expect(currentURL.includes("saucedemo")).toBeTruthy();

    await case2.username.fill('standard_user');
    await case2.password.fill('secret_sauce');
    await case2.login.click();
    await case2.add1.click();
    await case2.add2.click();
    await case2.add3.click();
    await case2.add4.click();
    await case2.cart.click();
    await case2.continue.click();
    await case2.menu.click();
    await case2.logout.click();

})
test('Limited Product', async ({ page }) => {

    const case2 = new Product(page);
    await page.goto('https://www.saucedemo.com/');

    //Assertion
    const currentURL = page.url();
    expect(currentURL.includes("saucedemo")).toBeTruthy();

    await case2.username.fill('problem_user');
    await case2.password.fill('secret_sauce');
    await case2.login.click();
    await case2.add1.click();
    await case2.add2.click();
    await case2.add3.click();
    await case2.add4.click();
    await case2.cart.click();
    await case2.continue.click();
    await case2.menu.click();
    await case2.logout.click();

})
// This will run after all tests
// test.afterAll(async ({ page }) => {
//     await page.close();
//     // Cleanup code 
// });