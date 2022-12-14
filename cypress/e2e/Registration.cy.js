const { faker } = require ('@faker-js/faker');

import RegistrationPage from "../pageobjects/RegistrationPage";



describe("All registration test cases",function(){

    let url,registerPage;
    before("All tests are run",()=>{

        url =  "https://d26py1i7xs8g2k.cloudfront.net";
        cy.visit(url);
        registerPage =  new RegistrationPage();
        registerPage.clickCreateAccount();

    })

    it("should successfully register a user",function(){

        cy.wait(500);
        registerPage.enterFullName(faker.name.fullName());
        registerPage.enterBusinessName(faker.company.name());
        registerPage.selectCountry("Ghana");
       registerPage.enterPhoneNumber(faker.phone.number('090########'));
       registerPage.enterBusinessEmail(faker.internet.email());
       registerPage.enterPassword(faker.internet.password(9,true,/A-Z/,'@1X'));
        registerPage.clickRegisterBtn();

        cy.wait(1000);
        cy.url().should("eq","https://d26py1i7xs8g2k.cloudfront.net/get-started");
        

    })
})