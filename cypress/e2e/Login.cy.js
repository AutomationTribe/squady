import LoginPage from "../pageobjects/LoginPage"

describe("Login test cases",function(){

    let url,loginPage;

    before("all tests start",()=>{

        // url =  Cypress.config.baseUrl;
        url =  "https://d26py1i7xs8g2k.cloudfront.net";
         cy.visit(url);
         loginPage =  new LoginPage();
    })

    it("should log user in successfully",function(){

        //let login = new LoginPage();
        loginPage.enterUsername("adamu@gt.com");
        loginPage.enterPassword("Password@1");
        loginPage.clickLoginBtn();

    })
})