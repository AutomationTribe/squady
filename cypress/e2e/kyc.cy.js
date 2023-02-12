///< reference types="cypress" />

import GetStartedPage from "../pageObjects/GetStartedPage";

describe("All Kyc Test Cases", function(){

    before("Initialization before tests ",()=>{
        const getStartedPage =  new GetStartedPage();
        cy.RegisterMerchant().then(()=>{
            getStartedPage.clickCompleteKYC();
        })

    })

    it("should complete a users KYC",function(){
        cy.log("it ran");
        
    })

})