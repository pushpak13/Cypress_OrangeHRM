import {Constants} from "../e2e/Constants";

class LoginPage {

    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]'),
        loginBtn: () => cy.get('button[type="submit"]')
    }
    username = 'input[name="username"]';
    password = 'input[name="password"]';
    loginBtn = 'button[type="submit"]';
    orangeHRMLogo = '.orangehrm-login-branding > img';
    loginLogo = '.oxd-text--h5';
    credentialsLabel = '.oxd-label';
    forgotPassword = '.orangehrm-login-forgot > .oxd-text';
    resetPasswordText = '.oxd-text--h6';
    ResetPasswordBtn = '.oxd-button--secondary';
    CancelBtn = '.oxd-button--ghost';
    resetPasswordLinkText = 'h6';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    verifyLoginPageLogos() {
        cy.get(this.orangeHRMLogo).should('be.visible');
        cy.get(this.loginLogo).should('be.visible');
    }

    verifyUsernameAndPasswordComponents() {
        cy.get(this.credentialsLabel).should('contain.text', Constants.userNameText);
        cy.get(this.credentialsLabel).should('contain.text', Constants.passwordText);
        
    }

    verifyUsrnameAndPasswordInputFields() {
        cy.get(this.username).should('be.visible');
        cy.get(this.password).should('be.visible');

    }

    verifyLoginBtnAndForgotPasswordOption() {
        cy.get(this.loginBtn).should('be.visible');
        cy.get(this.forgotPassword).should('be.visible');
    }

    loginFunctionality(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }

    clickForgotPasswordOption() {
        cy.get(this.forgotPassword).click();
    }

    verifyResetPasswordPage() {
        cy.get('.oxd-text--h6').should('contain.text', Constants.resetPassword);
    }

    verifyUsernameFieldInResetPassword() {
        cy.get(this.username).should('be.visible');
    }

    verifyCancelBtn() {
        cy.get(this.CancelBtn).should('be.visible');
    }

    verifyResetPasswordBtn() {
        cy.get(this.ResetPasswordBtn).should('be.visible');
    }

    clickCancelBtn() {
        cy.get(this.CancelBtn).click();
    }

    resetPassword() {
        cy.get(this.username).type(Constants.username)
        cy.get(this.ResetPasswordBtn).click();
        cy.get(this.resetPasswordLinkText).should('contain.text', Constants.resetPasswordLinkText);
    }

    enterUsername(username) {
        return cy.get(this.username).type(username);
    }

    enterPassword(password) {
        return cy.get(this.password).type(password);
    }

    clickLoginBtn() {
        return cy.get(this.loginBtn).click();
    }





}
export default LoginPage