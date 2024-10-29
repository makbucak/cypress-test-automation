class AccountInformationPage {
 
    accountMailControl(value){
        cy.get("[name='Email'] input").should('have.value', value)
        return this;
    }

}

export default AccountInformationPage;