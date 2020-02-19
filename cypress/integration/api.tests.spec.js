/// <reference types="Cypress" />

describe('GET Service Example', ()=>{

    it("Status Code and Header Validation", ()=>{
        
        cy.request("https://jsonplaceholder.typicode.com/posts/").as('res')
        .its('status')
        .should('equal', 200);

        cy.get('@res')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');

    });

    it.only("Create an Employee",()=>{

        cy.request({
            method:"POST",
            url:"http://dummy.restapiexample.com/api/v1/create",
            body:{
                "name":"test",
                "salary":"123",
                "age":"23"
            }
        })
        .its('status')
        .should('equal', 200)
        .then((response) => {
            expect(response.body).has.property('data').has.property("name","test")
            console.log(response);
          })
    });

});