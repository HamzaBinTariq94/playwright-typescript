import { Page, Locator, errors } from "@playwright/test";
// import { lcov } from "node:test/reporters";


export class CaseOne {
    
   
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly lockeduser: Locator;
    readonly menu: Locator;
    readonly logout: Locator;
    
    constructor(page: Page) {

        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.login = page.locator('[data-test="login-button"]');
        this.lockeduser = page.locator('[data-test="error"]');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.logout= page.locator('[data-test="logout-sidebar-link"]');
        
    
    }


}