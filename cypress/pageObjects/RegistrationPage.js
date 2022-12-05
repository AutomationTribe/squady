class RegistrationPage{

    enterFullName(fullName){

        //write code to make sure a firstname and lastname exists
        return cy.get("input[name='fullName']").type(fullName);
    }

    enterBusinessName(businessName){
        
        return cy.get("input[name='business_name']").type(businessName);
    }

    enterCountry(country){
        
        return cy.select("select[name='country']").select(country);
    }

    enterPhoneNumber(phoneNumber){
        
        return cy.get("input[name='tel']").type(phoneNumber);
    }

    enterBusinessName(businessName){
        
        return cy.get("input[name='email']").type(businessName);
    }

    enterPassword(password){
        
        return cy.get("input[name='phone_number']").type(password);
    }

    clickRegisterBtn(){
        
        return cy.get("button[type='submit']").click();
    }




}
export default RegistrationPage