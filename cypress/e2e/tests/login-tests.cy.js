/// <reference types="cypress" />

import BaseLibrary from "../base/BaseLibrary";
import AccountInformationPage from "../pages/AccountInformationPage";
import LoginPage from "../pages/LoginPage"
import MainPage from "../pages/MainPage";



describe('Login Tests', () => {

    const loginPage = new LoginPage();
    const baseLibrary = new BaseLibrary();
    const mainPage = new MainPage();
    const accountInformationPage = new AccountInformationPage();

    beforeEach(() => {
        cy.viewport(900, 600)
        cy.visit('https://www.altinyildizclassics.com/login')
    })

    it('Başarılı kullanıcı girişi kontrolü', () => {

        var mail = "canercakman16@gmail.com"

        loginPage.fillEmail(mail)
            .fillPassword("Mardin4747.")
            .clickLogin()
        baseLibrary.wait(5000)

        mainPage.clickAccount()
            .clickAccountInformation()

        accountInformationPage.accountMailControl(mail)

    })

    it('Başarısız kullanıcı girişi kontrolü', () => {

        var mail = "canercakman16@gmail.com"

        loginPage.fillEmail(mail)
            .fillPassword("testMArdin46")
            .clickLogin()
            .errorMessageControl("Kullanıcı bilgileri hatalıdır")


    })

    it('Boş karakter kontrolü', () => {

        var mail = "canercakman16@gmail.com"

        loginPage.clearEmail()
            .clearPassword()
            .clickLogin()
        baseLibrary.wait(5000)

    loginPage.requiredMessageControl("Bu alan zorunludur.")

    })
})