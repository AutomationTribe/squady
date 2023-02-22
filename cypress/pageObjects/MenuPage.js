class MenuPage{

    clickLogout(){
         cy.get("button[id='menu-button-16']").click();
         cy.contains("Logout").click();
    }

    navigateToProductPage(){

      //  cy.contains("e-Commerce").click();
        cy.wait(5000);
        cy.contains("Products").click();
    }

}
export default MenuPage