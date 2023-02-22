import MenuPage from "../pageObjects/MenuPage";
import ProductPage from "../pageObjects/ProductPage";
const product = require("../fixtures/product.json");
const {faker} = require("@faker-js/faker");

describe("All product e2e test cases",function(){

    let productPage,menu;
    before("set up before tests",function(){
        cy.login();
        productPage = new ProductPage();
        menu = new MenuPage();
        menu.navigateToProductPage();
    })

    it("should create a product",function(){
        

        cy.wait(12000);
        productPage.clickAddProductBtn();
        cy.wait(5000);
        productPage.addProductName(faker.commerce.productName());
        productPage.addProductAmountInNaira(faker.commerce.price(100,3000));
        productPage.addProductQuantity(20);
        productPage.selectProductCategory("Food");
        cy.wait(10000);
        productPage.addProductDescription(faker.commerce.productDescription());
       // productPage.addProductImage();
        productPage.clickCreateProductBtn();
    })

})