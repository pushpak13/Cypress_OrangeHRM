class LoginPage {

    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('button[type="submit"]')
    }

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    loginFunctionality(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }

    enterUsername(username) {
        return cy.get('input[name="username"]').type(username);
    }

    enterPassword(password) {
        return cy.get('input[name="password"]').type(password);
    }

    clickLoginBtn() {
        return cy.get('button[type="submit"]').click();
    }




}
export default LoginPage