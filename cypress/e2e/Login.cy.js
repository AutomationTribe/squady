import LoginPage from "../pageobjects/LoginPage"

describe("Login test cases",function(){

    const user =  require("../fixtures/user.json");
    let url,loginPage;

    before("all tests start",()=>{

        // url =  Cypress.config.baseUrl;
        cy.RegisterMerchant();

    })

    it.skip("should log user in successfully",function(){

        //let login = new LoginPage();
        loginPage.enterUsername(user.username);
        loginPage.enterPassword(user.password);
        loginPage.clickLoginBtn();

    })
})