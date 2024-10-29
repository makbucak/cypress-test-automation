class MainPage {
 
    clickAccount(){
        cy.get('[name="account"]').click()
        return this;
    }

    clickAccountInformation(){
        cy.get("[href='/hesabim/kullanici-bilgileri'] span").click()
        return this;
    }

}

export default MainPage;