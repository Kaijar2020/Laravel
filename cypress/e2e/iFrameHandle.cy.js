describe('Handeling iFrame',()=>{

    //Handle iFrame.
    it('Handle iFrame----Approch-01',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(1000)

        //0.contentDocument use for only one document inside the frame.0 is an index number here.
        //iFrame variable is used to go inside the iFrame on UI.
        const iFrame = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap);

        iFrame.clear().type('Hello Bangladesh,{ctrl+a}') //{ctrl+a} using to select all the text.
        cy.get("[aria-label='Bold']").click()
        iFrame.click()
        cy.wait(1000)
    })

    //Handle Iframe if has multiple iFrame.
    it('Handle iframe from multiple iFrame--Approch-02 by using custom command',()=>{

        /*
        At first need to create a custom command for iframe.
        */

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(1000)

        cy.getIframe('#mce_0_ifr').clear().type("Hello Cypress World,{ctrl+a}")
        cy.get("[aria-label='Bold']").click()
        cy.getIframe('#mce_0_ifr').click()
    })

    //Handle Iframe by using plugin

    it('Handle iFrame by using plugin --Approch-03',()=>{

        /*
        At first need to install plugin.Using this command
        ~~~~ npm install -D cypress-iframe
        --------------------------------------
        Add this to the command.js file
        import 'cypress-iframe';

        or

        require('cypress-iframe');
        */

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.wait(1000)

        cy.frameLoaded('#mce_0_ifr')     //This command will load the frame

        cy.iframe('#mce_0_ifr').clear().type('Help with Iframe,{ctrl+a}')
        cy.get("[aria-label='Bold']").click()
        cy.iframe('#mce_0_ifr').click()

    })
})