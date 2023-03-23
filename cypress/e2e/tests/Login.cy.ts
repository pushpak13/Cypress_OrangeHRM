import LoginPage from "../../pages/LoginPage";

const login = new LoginPage();

describe("Testing Login page", () => {

    beforeEach(() => {
        login.visit();
        
    })
    //Verify OrangeHRM and Login logos
    it("Verify OrangeHRM and Login logos", () => {
        login.verifyLoginPageLogos();
    })

    //Verify Username and Password Components in Login page
    it.only("Verify Username and Password Components in Login page", () => {
        login.verifyUsernameAndPasswordComponents();
    })

    //Verify Username and Password Inputs in Login page
    it("Verify Username and Password Inputs in Login page", () => {
        login.verifyUsrnameAndPasswordInputFields();
    })

    //Verify Login button and Forgot password option in Login page
    it("Verify Login button and Forgot password option in Login page", () => {
        login.verifyLoginBtnAndForgotPasswordOption();
    })

    //Verify Login with valid credentials
    it("Verify Login with Valid Credentials", () => {
        cy.fixture('testdata').then((data) => {
            login.loginFunctionality(data.username, data.password);

        })
        cy.url().should('include', '/dashboard/index')

    })

    //Verify click functionality for Forgot Password option
    it("Verify Forgot Password Option Click Functionality", () => {
        login.clickForgotPasswordOption();
        cy.url().should('include', '/requestPasswordResetCode')
    })

    //Verify visibility of Reset Password page and Username field
    it("Verify Reset Password Page and Username Field", () => {
        login.clickForgotPasswordOption();
        login.verifyResetPasswordPage();
        login.verifyUsernameFieldInResetPassword();
    })

    //Verify Cancel Button in Reset password page
    it("Verify Cancel Button in Reset password", () => {
        login.clickForgotPasswordOption();
        login.verifyResetPasswordPage();
        login.verifyCancelBtn();
    })

    //Verify Reset Password Button in Reset password page
    it("Verify Reset Password Button in Reset password", () => {
        login.clickForgotPasswordOption();
        login.verifyResetPasswordPage();
        login.verifyResetPasswordBtn();
    })

    //Verify Click for Cancel Button
    it("Verify Click for Cancel Button", () => {
        login.clickForgotPasswordOption();
        login.clickCancelBtn();
        cy.url().should('include', '/login');
    })

    //Verify Reset password functionality
    it("Verify Reset password functionality", () => {
        login.clickForgotPasswordOption();
        login.resetPassword();

    })



})
