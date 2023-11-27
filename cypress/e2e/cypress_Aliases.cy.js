//Testing Cypress Aliase

/*  Aliase is use for giving the name of Locator and next time is use only the alies name insted of locator */ 

describe('Learning Alieses in cypress',()=>{

    it('Open Google with the Help of Alies',()=>{
        cy.visit("https://www.google.com")
        cy.get('#APjFqb').as('search_box') //with 'as' we change the locator name.
        cy.get('@search_box').type('Bangladesh{enter}') //With the help of alies use this locator.
        cy.get('.yKMVIe').then((el)=>{
            const a = el.text()
            expect(a).to.equal('বাংলাদেশ')
        })
    })
})