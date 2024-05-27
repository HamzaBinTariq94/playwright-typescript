import { Page, Locator, errors } from "@playwright/test";
// import { lcov } from "node:test/reporters";


export class Product {
    
   
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly add1: Locator;
    readonly add2: Locator;
    readonly add3: Locator;
    readonly add4: Locator;
    readonly cart: Locator;
    readonly continue: Locator;
    readonly menu : Locator;
    readonly logout: Locator;
    
    constructor(page: Page) {

        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.login = page.locator('[data-test="login-button"]');
        this.add1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.add2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.add3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.add4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.cart = page.locator('[data-test="shopping-cart-link"]')
        this.continue = page.locator('[data-test="continue-shopping"]')
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.logout= page.locator('[data-test="logout-sidebar-link"]');
        
    }
}