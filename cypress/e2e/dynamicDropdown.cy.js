//Handeling Dynamic Dropdown

describe('Verify the dynamic dropDown button',()=>{

    //return false to avoid unexceptional error in cypress.
    Cypress.on('uncaught:exception',(err, runnable)=>{
        //returning false is to prevent uncaught exceptional error .
        return false
    })

    it('To open airindia website and verify from dropdown',()=>{
        cy.visit("https://www.airindia.com")
        cy.get("input[id='From']").type('a')
        //Binding the dropdown suggestion as a list.
        cy.get("#ngb-typeahead-0").find('.row.airport-country-detail').each((el, index, list)=>{
            const x = el.text()
            //cy.log(x)
            if(x === ' Agartala, India, IN '){
                cy.wrap(el).click({force:true}) //wrapping the element and click on it
                
            }
        })
    }) 

    it.only('Verify the TO form of dropdown',()=>{
    cy.visit("https://www.airindia.com")
     cy.get("#To").type('dh')
     //cy.get('#ui-id-3').find('.ui-menu-item').each((el, index, list)=>{
        cy.get('#ngb-typeahead-1').find('.row.airport-country-detail').each((el, index, list)=>{
        const y = el.text()
        //cy.log(y)
        if(y === ' Dhaka, Bangladesh, BD '){
            cy.wrap(el).click({force:true})
        }
     })
    })
})