describe('Login Website By basic Auththentication',()=>{

    it.skip('Login using basic Auth',()=>{

        cy.visit('https://authenticationtest.com/HTTPAuth/',{

        auth: {
            username: 'user424',
            password: 'pass2552'
        }
        })

        cy.contains('Login Success').should('be.visible')
        
    })
})  