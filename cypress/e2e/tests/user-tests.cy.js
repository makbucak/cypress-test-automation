/// <reference types="cypress" />

describe('Login Tests', () => {


    it('POST User Create', () => {

        const payload = {
            "id": 687985,
            "username": "postmankullanici",
            "firstName": "post",
            "lastName": "man",
            "email": "postmankullanici@gmail.com",
            "password": "123456789",
            "phone": "5362264319",
            "userStatus": 0
        }

        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('PUT User Update', () => {

        const payload = {
            "id": 24985,
            "username": "guncelkullanici",
            "firstName": "guncel",
            "lastName": "kullanici",
            "email": "guncelkullanici@gmail.com",
            "password": "123456",
            "phone": "5452126585",
            "userStatus": 0
          }

        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/denemekullanici",
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })


    it('GET User Info', () => {

        cy.request("GET", "https://petstore.swagger.io/v2/user/postmankullanici")

    })

    it('DEL User Delete', () => {

        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/denemekullanici"
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })

})