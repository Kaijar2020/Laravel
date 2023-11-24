//Testing Static dropdown

describe('Verify Static dropDown',()=>{

    //return false to avoid unexceptional error in cypress.
    Cypress.on('uncaught:exception',(err, runnable)=>{
        //returning false is to prevent uncaught exceptional error .
        return false
    })
    before('open website via url',()=>{
        cy.visit('www.airindia.in')
    })

    it('To verify static dropdown button',()=>{
        //cy.get('.mat-select-arrow-wrapper.ng-tns-c42-5').click()
        cy.get('#concession-type > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get("div[role='listbox']").find("mat-option[role='option']")
        .each((el, index, list)=>{
            const t = el.text()
            cy.log(t)
            if(t.includes('Student')){
                cy.wrap(el).click({force:true}) 
            }
            
        })
    })
})