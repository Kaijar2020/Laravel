describe('Session test in Cypress',()=>{

    // before({ testIsolation: false } ,() => {
    //     // ensure clean test slate for these tests
    //     cy.then(Cypress.session.clearCurrentSessionData)
    //   })

    beforeEach('login with Session',()=>{
        
        cy.loginWithSession("Admin", "admin123")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.clearCookies({log: true}) //to clear all the cookie
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