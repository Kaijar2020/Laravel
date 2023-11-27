describe('Controling browser tab with Cypress',()=>{

    beforeEach('Visit URL',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page')
        cy.wait(1000)
    })

    //open link in same Tab-- Approach-01
    it.skip('Open new link in same Tab-- Process-1',()=>{

        //cy.contains('Learning Hub').invoke('removeAttr','target').click()
        cy.get('.elementor-element-baea617 > .elementor-widget-container > .elementor-heading-title > a')
        .invoke('removeAttr','target').click()
    })

    //open link in same Tab-- Approach-02
    it('Open link same Tab-- Process-2',()=>{
        cy.get('#userName').scrollIntoView()
        cy.contains('Learning Hub').invoke('attr','target', '_self').click()
    })
})