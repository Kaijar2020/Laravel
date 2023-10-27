describe('Verify Tool Tip text in using Cypress',()=>{

    it('Tool Tip Text',()=>{
        cy.visit('https://practice.expandtesting.com/tooltips')
        cy.get('#btn1').trigger('mouseover')
        cy.get('.tooltip-inner').should('be.visible').and('have.text', 'Tooltip on top') //took location from cypress runner.
    })
})