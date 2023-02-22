class LoginPage{

    enterUsername(email){

        return cy.get("input[name='email']").type(email);
    }

    enterPassword(password){
        
        return cy.get("input[name='password']").type(password);
    }

    clickLoginBtn(){
        
        return cy.get("button[type='submit']").click();
    }



}
export default LoginPage