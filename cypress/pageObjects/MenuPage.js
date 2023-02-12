class MenuPage{

    clickLogout(){
         cy.get("button[id='menu-button-16']").click();
         cy.contains("Logout").click();
    }

}
export default MenuPage