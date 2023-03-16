import {Login} from "../pages/Login";

const login = new Login();

describe("Testing Login page", () => {
    it("Login test", () => {
        login.visit();
    })
})
