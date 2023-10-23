/* This test SHow the browser navigation in cypress.
-------------------------------------------------*/

describe('Performe browser navigation',()=>{

    beforeEach('Visit the website',()=>{

        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.wait(1000)
    })

    it('Performe Backward navigation',()=>{
        cy.contains('Software').click()
        cy.get('#content > p').should('be.exist')
        cy.wait(1000)
        //cy.go('back') //go to the backward
        cy.go(-1) //Also use to go to the backward
        cy.get('h3').should('be.visible')
        cy.wait(1000)
    })

    it('Performe Forward navigation',()=>{
        cy.contains('Software').click()
        cy.get('#content > p').should('be.exist')
        cy.wait(1000)
        //cy.go('back') //go to the backward
        cy.go(-1) //Also use to go to the backward
        cy.get('h3').should('be.visible')
        //cy.go(1) //use to go forward
        cy.go('forward') //Also in use to go to the forward
        cy.get('#content > p').should('be.exist')
        cy.wait(1000)
    })
    
})