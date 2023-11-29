//Upload File using Cypress 

describe('Upload File help of Cypress',()=>{

    it('File Upload on Cypress',()=>{
        cy.visit('https://www.filemail.com')
        cy.get("#addBtn").selectFile('cypress/downloads/hello (1).doc') //this is the location of file.
        cy.get('.name-holder').should('be.exist')
        cy.wait(1000)

    })
})