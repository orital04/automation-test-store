import selectors from '../support/selectors';

/// <reference types = "cypress" />
describe("Buy a product", () => {
    let randomString = Math.random().toString(36).substring(2)
    const firstName = "Amir"
    const lastName = "Benayoun"
    const email = randomString + "@mail.com"
    const phone = "0349834893"
    const fax = "0349834896"
    const company = "time machine"
    const address_1 = "Nahalal 28"
    const city = "Tel Aviv"
    const region = "Bedfordshire"
    const zip = "35434"
    const country = "United Kingdom"
    const loginName = randomString + "Amos09"
    const password = "asds232"

    it("Buy a specific product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(selectors.productsInHomePage).contains("Skinsheen Bronzer Stick").click().then((product) => {
            let name = product.text()
            cy.get(selectors.addToCart).click()
            cy.get(selectors.inShoppingCart).contains(name)
            cy.get(selectors.checkout).click()
            cy.get(selectors.continueBtn).click() 
            cy.get(selectors.firstName).type(firstName)
            cy.get(selectors.lastName).type(lastName)
            cy.get(selectors.email).type(email)
            cy.get(selectors.phone).type(phone)
            cy.get(selectors.fax).type(fax)
            cy.get(selectors.company).type(company)
            cy.get(selectors.address_1).type(address_1)
            cy.get(selectors.city).type(city)
            cy.get(selectors.regionList).select(region)
            cy.get(selectors.postcode).type(zip)
            cy.get(selectors.countryList).select(country)
            cy.get(selectors.loginName).type(loginName)
            cy.get(selectors.password).type(password)
            cy.get(selectors.passwordConfirm).type(password)
            cy.get(selectors.noNewsletter).click()
            cy.get(selectors.agreePrivacyPolicy).click()
            cy.get(selectors.continueBtnCreateAccoun).click()
            cy.get(selectors.checkoutBtn).click()
            cy.get(selectors.continueProcessBtn).click()

        })
    })
})