//Handele Alerts using Cypress.

describe('Handle Alerts on Cypress',()=>{

    it('Alert Message',()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('#Register').click()
        cy.on('window:alert',(a)=>{ //this for handeling js alert
            expect(a).to.contains('Your full name')
        })
    })
})

//Taking ScreenShoot using Cypress

describe('Taking ScreenShoot usimg cypress command',()=>{

    it('Taking ScreenShoot',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.screenshot('CompletePage')
        cy.get(":nth-child(2)>button").screenshot()
    })
})