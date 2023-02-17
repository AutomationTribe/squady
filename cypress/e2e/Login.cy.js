import LoginPage from "../pageobjects/LoginPage"

describe("Login test cases",function(){

    const user =  require("../fixtures/user.json");
    let url,loginPage;

    before("all tests start",()=>{

        url =  "https://d26py1i7xs8g2k.cloudfront.net";
        cy.visit(url);
        loginPage =  new LoginPage();

    })

    it.only("should log user in successfully",function(){

        //let login = new LoginPage();
        loginPage.enterUsername(user.username);
        loginPage.enterPassword(user.password);
        loginPage.clickLoginBtn();

    })
})