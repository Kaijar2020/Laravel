 //Practice in ShadowDOM

 describe('Automated element inside ShadowDOM',()=>{

    beforeEach('Log into the website',()=>{

        cy.visit('https://selectorshub.com/xpath-practice-page')
        cy.wait(1000)
    })

    it.skip('Test inside Shadow DOM',()=>{

        //Finding Shadow element and type on there.
        
        cy.get('#userName')
        .shadow()
        .find("#app2")
        .shadow().find('#pizza')
        .type("Type inside the shadow element")
    })
    it('Use when shadow dom true on config file',()=>{

        /* This function only useable .if ["includeShadowDom":true] code is appear in the config.js file.
        To use it add those line in the config,js file*/

        //cy.get("#pizza").type('This is text')
        cy.get("#pizza").type('This is text',{delay:0}) //set time for typing
        //cy.reload()

        //To remove case sensetiveness use {matchCase:false}
    })
 })