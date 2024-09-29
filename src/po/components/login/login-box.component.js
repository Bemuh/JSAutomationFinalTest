const BaseComponent = require('../common/base.component')

class LoginBoxComponent extends BaseComponent {
    constructor() {
        super('#login_button_container')
    }

    /**
     * Returns the WebElement for the username input field.
     * 
     * @returns {WebdriverIO.Element} - The WebElement representing the username input field.
     */
    get usernameInput() {
        return this.rootEl.$('//input[@data-test="username"]')
    }

    /**
     * Returns the WebElement for the password input field.
     * 
     * @returns {WebdriverIO.Element} - The WebElement representing the password input field.
     */
    get passwordInput() {
        return this.rootEl.$('//input[@data-test="password"]')
    }

    /**
     * Returns the WebElement for the login button.
     * 
     * @returns {WebdriverIO.Element} - The WebElement representing the login button.
     */
    get loginButton() {
        return this.rootEl.$('//input[@data-test="login-button"]')
    }

    /**
     * Performs the login action by entering the provided username and password,
     * and clicking the login button.
     * 
     * @param {string} username - The username to enter into the username input field.
     * @param {string} password - The password to enter into the password input field.
     * @returns {Promise<void>} - A promise that resolves once the login action is completed.
     */
    async login(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
}

module.exports = LoginBoxComponent
