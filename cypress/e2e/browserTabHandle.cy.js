describe('Controling browser tab with Cypress',()=>{

    beforeEach('Visit URL',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page')
        cy.wait(1000)
    })

    //open link in same Tab-- Approach-01
    it('Open new link in same Tab-- Process-1',()=>{

        cy.contains('Learning Hub').invoke('removeAttr','target').click()
    })

    //open link in same Tab-- Approach-02
    it.skip('Open link same Tab-- Process-2',()=>{
        cy.contains('Learning Hub').invoke('attr','target', '_self').click()
    })
})