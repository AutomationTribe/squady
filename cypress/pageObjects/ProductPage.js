import cypressConfig from "../../cypress.config"

class ProductPage
{

    clickAddProductBtn(){

        return cy.contains("Add Product").click({force : true});
    }

    addProductName(name){
        return cy.get("input[name='name']").type(name);
    }

    addProductAmountInNaira(amount){
        return cy.get("input[name='amount']").type(amount);
    }

    addProductQuantity(quantity){
        return cy.get("input[name='in_stock']").type(quantity);
    }

   selectProductCategory(productName){
       return cy.get("select[label='Product Category']").select(productName)
   }

   addProductDescription(productDescription){
        cy.get("div.jodit-workplace").click();
       return cy.get("div.jodit-workplace").type(productDescription);
   }

   addProductImage(){
    cy.wait(10000);
    //cy.get("#file-upload").debug().click();
    cy.get("div.css-1mehegy").click();
  //  cy.get("#file-upload").click({force :true })
  //  return cy.get("#file-upload").selectFile('../squad/cypress/fixtures/productImage.json');
   // cypress/fixtures/productImage.json
    ///Users/murrayataga/Documents/Projects/squad/cypress/fixtures/productImage.json
   }
   clickCreateProductBtn(){
       return cy.contains("Create product").click({force : true});
   }

}
export default ProductPage