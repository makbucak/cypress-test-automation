class LoginPage {

    fillEmail(value) {
        cy.get("[name='Email'] input").type(value);
        return this;
    }

    fillPassword(value) {
        cy.get("[name='Password'] input").type(value);
        return this;
    }

    clickLogin() {
        cy.get("[class='mt-10']").click()
        return this;
    }

    errorMessageControl(value) {
        cy.get("[class='text-red text-sm mt-5']").should("have.text", value)
        return this;
    }

    requiredMessageControl(value) {
        cy.get("ac-validation[email] span[class='validation-error-msg']").should("have.text", value)
        cy.get("span[class='validation-error-msg']").eq(1).should('have.text',value)
     return this;
    }

    clearEmail() {
        cy.get("[name='Email'] input").clear()
        return this;
    }

    clearPassword() {
        cy.get("[name='Password'] input").clear()
        return this;
    }

}

export default LoginPage;