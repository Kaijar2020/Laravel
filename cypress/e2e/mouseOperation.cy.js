describe('Mouse Operation', ()=>{

    //Mouse hover operation
    it('MouseHover performe', ()=>{
        cy.visit('https://demo.opencart.com/');

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible') 
    })

    //Performing right-click from mouse
    it('Mouse Right-click evenet',()=>{
        //Approch -01
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')//click right 
        cy.wait(1000)
        cy.get('.context-menu-icon-edit').should('be.exist').and('have.text', 'Edit')
        cy.get('.context-menu-icon-quit').click()

        //Approch 02
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-quit').should('be.visible').and('have.text','Quit').click()
    })

    //To performe Double click from mouse
    it.skip('Double-click',()=>{
        // cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_html')
        // cy.get('#demo').trigger('dblclick')
        // cy.wait(1000)
        // cy.get('#demo').should('have.text', 'I was double-clicked!')
    })
})