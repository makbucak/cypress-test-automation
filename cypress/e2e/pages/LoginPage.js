class LoginPage {

    fillEmail(value) {
        cy.get("[name='Email'] input").type(value);
        return this;
    }

    fillPassword(value) {
        cy.get("[name='Password'] input").type(value); 
        return this;
    }
    
    clickLogin(){
        cy.get("[class='mt-10']").click()
        return this;
    }

    errorMessageControl(value){
        cy.get("[class='text-red text-sm mt-5']").should("have.text",value)
        return this;
    }
    

}

export default LoginPage;