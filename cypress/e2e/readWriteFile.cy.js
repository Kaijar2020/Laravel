//Read and write the file in using cypress

describe('Write in the File',()=>{

    //Write to the Text File
    it.skip('Write to the text file',()=>{
        cy.writeFile("writeTest.txt", "Hello Cypress \n")
        cy.writeFile("writeTest.txt", "Testing World", { flag:"a+" })
    })

    //Write to the Json File
    it.skip('Write to the Json file',()=>{
        cy.writeFile("cypress/fixture/TestFile.json", {
            "name": "Ayon",
            "Designation": "SQA"
        })
    })
})

//Read from the file
describe('Read the File',()=>{

    it.skip('Read to the file',()=>{
        cy.readFile('writeTest.txt').then((data)=>{
            cy.log("File Text", data)
        })
    })

})