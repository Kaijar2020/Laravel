import {faker} from '@faker-js/faker'

describe('Took data from Faker Libary and Automate the software',()=>{

    beforeEach('Enter the Website',()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
        cy.wait(1000)
    })

    /* Register a user by genarating fake data with the hekp of faker libary..

    To install faker libary run the below command.....

    -----npm install @faker-js/faker --save-dev

    */

     let password = faker.internet.password() 
    it('Register User with faker Data',()=>{

        cy.get('#input-firstname').type(faker.person.firstName())
        //cy.get('#input-firstnamee',{timeout:0}).type(faker.person.firstName()) //this part only wait untill timeout
        cy.get('#input-lastname').type(faker.person.lastName())
        cy.get('#input-email').type(faker.internet.email())
        cy.get('#input-telephone').type(faker.phone.number())
        cy.get('#input-password').type(password)
        cy.get('#input-confirm').type(password)
        //cy.get('#input-agree').click()
        cy.get('.float-right > .custom-control').click()
        //cy.get('#').type()
        cy.get('.float-right > .btn').click()
        cy.wait(1000)
        cy.contains('Your Account Has Been Created!').should('exist')
        cy.wait(1000)
    })
})