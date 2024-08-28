//Finding the broken Link.

describe('Find broken Links on the page',()=>{

    it('Verify the every link on the page',()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')

        //Need to count down.
        let brokenLink = 0
        let activeLink = 0
        //Get everyy link.
        cy.get('a').each(($link,index) =>{

            const href = $link.attr('href') 
            if(href){
                //reciving request response object as an arguments.
                //failOnStatusCode is use if the test false the run/excution will continue.
                cy.request({ url:href,failOnStatusCode:false }).then((response)=>{

                    //Took the response.
                    if(response.status >= 400){
                        cy.log(`*** Link ${index+1} Broken Link *** ${href}`)
                        brokenLink ++
                    }
                    else{
                        cy.log(`*** Link ${index} Active LInk *** ${href}`)
                        activeLink++
                    }
                })
            }
        }).then(($links)=>{ //to print links.
            const totalLinks = $links.length
            //Bactric (``)is use print value inside the String.
            cy.log(`*** Total Links *** ${totalLinks}`)
            cy.log(`*** Active Links *** ${activeLink}`)
            cy.log(`*** Broken Links *** ${brokenLink}`)
        })
    })
})