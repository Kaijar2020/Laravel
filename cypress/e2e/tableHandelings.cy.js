describe('Handeling Table in Cypress',()=>{

    beforeEach('Login into website',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        //cy.get("button[type='submit']").click()
        cy.get('.btn').click({force:true})
        cy.wait(2000)

        cy.get(".btn-close").click()

        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    })

    //To check number of rows and columns
    it('Check number rows and columns',()=>{

        //Assert the total number of rows.
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10') 

        //Assert total number of columns
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')

    })

    //To check the cell data on table
    it('Check cell data from specific row and column',()=>{
        //check the 5th row 3rd column value.
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("hfgjhgjgjggj@gmail.com")
        cy.wait(1000)
    })

    //Read all the rows and columns data in the first page
    it('Read all the rows and columns data in the first page',()=>{
        
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{ //to read each and every row
           
            cy.wrap($row).within(()=>{  //this method to get all the td value.[wrap tr use for wraping element]

                
                cy.get("td").each(($col, index, $cols)=>{ //reading column by index.

                    cy.log($col.text()); //print each col data.
                    //cy.get($col).should('be.exist')
                })
            })
        })
    })


    //Handle table that have pagination
    it('Pagination with table',()=>{

        //find total number of pages
        let total_pages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let myText = e.text(); 

            //extracting the text
            total_pages = myText.substring( myText.indexOf("(")+1,myText.indexOf("Pages")-1);
            cy.log("Total number of Pages in Table ->>>> "+total_pages);
        })
        // find total number of pages funtion end here.


        //Read all the pages one after another.
        for (let p=1; p<=5; p++){

            if(5>1){ //check the page

                cy.log("Active page is --->>> "+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click({force:true}); //click on pagination number.
                cy.wait(2000);

                //get and test table in every pages.
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{ //to read each and every row
           
                    cy.wrap($row).within(()=>{  //this method to get all the td value.[wrap tr use for wraping element]
        
                        //check the 3rd column the table in each page{email address only}
                        cy.get("td:nth-child(3)").then((e)=>{
                            cy.log(e.text()); //Email Print.
                        })
        
                            
                        })
                    })

            }
        }

    })
})