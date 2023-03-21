import LoginPage from "../../pages/LoginPage";

const login = new LoginPage();

describe("Testing Login page", () => {

    beforeEach(() => {
        login.visit();
        
    })

    it("Login with valid credentials", () => {
        cy.fixture('testdata').then((data) => {
            login.loginFunctionality(data.username, data.password);

        })
        cy.url().should('include', '/dashboard/index')

    })

})
