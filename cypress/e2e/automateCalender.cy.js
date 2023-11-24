//Automate Calender Element through Cypress

describe('Auto Mate Calender and Verify date',()=>{

     //return false to avoid unexceptional error in cypress.
     Cypress.on('uncaught:exception',(err, runnable)=>{
        //returning false is to prevent uncaught exceptional error .
        return false
    })

    before('open website via url',()=>{
        cy.visit('www.airindia.in')
    })

    it('To verify caledar date-Depart',()=>{
        cy.get(".btn.bi.bi-calendar3").eq(0).click({force:true})
        cy.get(".ngb-dp-content.ngb-dp-months").eq(0)
        .find(".custom-day.ng-star-inserted")
        .each((el)=>{
            const d = el.text()
            //cy.log(d)
            if(d.includes('30')){
                cy.wrap(el).click()
            }
        })
    })
})