const { LoginBox, ErrorMessageBox, CredentialsInfo } = require('./../components')
const BasePage = require('./base.page')

class LoginPage extends BasePage {
    constructor() {
        super('/')
        this.form = new LoginBox() // Login form component
        this.errorMessage = new ErrorMessageBox() // Error message box component
        this.credentialsInfo = new CredentialsInfo() // Credentials info component
    }

    /**
     * Logs in to the application using the provided username and password.
     * 
     * @param {string} username - The username to enter.
     * @param {string} password - The password to enter.
     * @returns {Promise<void>} - A promise that resolves when the login action is completed.
     */
    async login(username, password) {
        await this.form.login(username, password)
    }

    /**
     * Verifies the error message displayed on the login page after a failed login attempt.
     * 
     * @param {string} expectedMessage - The expected error message.
     * @returns {Promise<void>} - A promise that resolves when the error message check is completed.
     */
    async checkErrorMessage(expectedMessage) {
        await this.errorMessage.waitForErrorMessage() // Wait for error message to be displayed
        const message = await this.errorMessage.getErrorMessageText() // Get the error message text
        expect(message).toEqual(expectedMessage) // Assert that the error message matches
    }

    /**
     * Retrieves the list of accepted usernames from the credentials info section on the login page.
     * Optionally, you can provide a selector (index or username) to retrieve a specific username.
     * 
     * @param {number|string} [selector] - Optional. If a number, it selects the username by index (0-based). 
     *                                     If a string, it selects the username that matches the string.
     * 
     * @returns {Promise<string[]|string|null>} - A promise that resolves to an array of accepted usernames,
     * or a specific username if a selector is provided.
     */
    async getUsernamesArray(selector = null) {
        return this.credentialsInfo.getUsernamesArray(selector) // Fetch accepted usernames or a specific one
    }

    /**
     * Retrieves the password information for all users from the credentials info section.
     * 
     * @returns {Promise<string>} - A promise that resolves to the password information text.
     */
    async getPasswordArray(selector = null) {
        return this.credentialsInfo.getPasswordArray(selector) // Fetch password information
    }

    /**
     * Clears the password field on the login page simulating the backspaces.
     * 
     * @returns {Promise<void>} - A promise that resolves when the password field is cleared.
     */
    async clearPasswordField() {
        await this.clearFieldValue(this.form.passwordInput)
    }

    /**
     * Clears the password field on the login page simulating the backspaces.
     * 
     * @returns {Promise<void>} - A promise that resolves when the password field is cleared.
     */
    async clearUsernameField() {
        await this.clearFieldValue(this.form.passwordInput)
    }

}

module.exports = LoginPage
