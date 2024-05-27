import { test, expect } from '@playwright/test';
import { CaseOne } from '../page/login.page';
// import { log } from 'console';

test('Standard User', async ({ page }) => {

   const case1 = new CaseOne(page);
   await page.goto('https://www.saucedemo.com/');

   //Assertion
   const currentURL = page.url();
   expect(currentURL.includes("saucedemo")).toBeTruthy();

   await case1.username.fill('standard_user');
   await case1.password.fill('secret_sauce');
   await case1.login.click();

})
test('locked User', async ({ page }) => {

   await page.goto('https://www.saucedemo.com/');

   const wrong = new CaseOne(page);
   //Assertion
   const currentURL = page.url();
   expect(currentURL.includes("saucedemo")).toBeTruthy();

   await wrong.username.fill('locked_out_user');
   await wrong.password.fill('secret_sauc');
   await wrong.login.click();
   expect(wrong.lockeduser).toBeVisible();

   // await page.close();

})
test('Logout', async ({ page }) => {

   await page.goto('https://www.saucedemo.com/');

   const logout = new CaseOne(page);
   //Assertion
   const currentURL = page.url();
   expect(currentURL.includes("saucedemo")).toBeTruthy();

   await logout.username.fill('standard_user');
   await logout.password.fill('secret_sauce');
   await logout.login.click();
   await logout.menu.click();
   await logout.logout.click();

})
// This will run after all tests
test.afterAll(async ({ page }) => {
   await page.close();
   // Cleanup code 
});

