// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import cypress = require("cypress");

//Registration command
const { faker } = require ('@faker-js/faker');
const  Muser  = require("../fixtures/user.json");
import MenuPage from "../pageObjects/MenuPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import LoginPage from "../pageObjects/LoginPage";
let registerPage,menuPage,loginPage,username,password;


Cypress.Commands.add("RegisterMerchant",function(){

    const url =  "https://d26py1i7xs8g2k.cloudfront.net";
    cy.visit(url);
    menuPage =  new MenuPage();
    registerPage =  new RegistrationPage();
    registerPage.clickCreateAccount();

    cy.wait(500);
        registerPage.enterFullName(faker.name.fullName());
        registerPage.enterBusinessName(faker.company.name());
        registerPage.selectCountry("Ghana");
        registerPage.enterPhoneNumber(faker.phone.number('090########'));
       registerPage.enterBusinessEmail(faker.internet.email("john","doe","yopmail.com"));
       registerPage.enterPassword(faker.internet.password(9,true,/A-Z/,'@1X'));
        registerPage.clickRegisterBtn();

        cy.wait(10000);
       cy.url().should("eq","https://d26py1i7xs8g2k.cloudfront.net/get-started");
       menuPage.clickLogout();


})
//Login Command
Cypress.Commands.add("login",function(){

    
    cy.visit(Cypress.config().baseUrl)
    loginPage =  new LoginPage();
     username = Muser.username;
     password = Muser.password;
    // console.log(username);
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginBtn();


})