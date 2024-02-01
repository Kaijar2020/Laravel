//Two Factor Verification Using 3rd Party API.

describe('Two factor Authentication [OTP Automation by SMS]',()=>{

    //Author Ayon.

    it('Login Github two factor Verification.',()=>{
        cy.clearAllCookies()
        cy.visit('https://github.com/login')
        cy.get('#login_field').type('QA-test1')
        cy.get('#password').type('akib123642')
        cy.get('.position-relative > .btn').click()

        //Then will go to the Verification Page.
        cy.get('.Button-content').click() //Click on the Send SMS button.

        //Interval time to got message
        cy.wait(7000)
        cy.log('You have to be patient for appearing the SMS properly. :)')
        cy.wait(1000)

        //retrive OTP
        cy.request('https://receive-smss.com/sms/351915246617/').then(html =>{
            const otp_line = html.body.match(/.*GitHub.*/)
            const bolt_text = otp_line[0].match(/<b>\d+/)
            return bolt_text[0].match(/\d+/)[0]
        })
        .then(otp=>{
            //type the OTP
            cy.log(otp) //Just view the OTP.It will change by every run.
            cy.get('#sms_totp').type(otp)

            //Click on the Verify button
            cy.get('.btn-primary').click()

            //Check the Github Dashboard is visible or not.
            cy.get('.AppHeader-context-item-label').should('be.visible')
        })
    })
})