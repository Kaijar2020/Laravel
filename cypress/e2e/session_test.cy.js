describe('Session test in Cypress', { testIsolation: false } ,()=>{

    //{ testIsolation: false} needs to keep session alive.

    before(()=>{
        Cypress.session.clearAllSavedSessions() //before begain the test clear all save seeion .Run test as new.
       
        cy.loginWithSession('Admin', 'admin123') //call the custom commands from command.js  file.
    })

    it('test case one',()=>{
        cy.log("Test Case -1")
    })
    it('test case two',()=>{
        cy.wait(1000) 
        cy.log("Test Case -2")
        //cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').should('be.visible')
    })
    it('test case three',()=>{ 
        cy.log("Test Case -3")
        //cy.get(':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('be.visible')
    })
    
})