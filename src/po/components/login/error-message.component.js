const BaseComponent = require('../common/base.component')

class ErrorMessageBoxComponent extends BaseComponent {
    constructor() {
        super('.error-message-container')
    }

    /**
     * Returns the WebElement representing the error message text.
     * 
     * @returns {WebdriverIO.Element} - The WebElement containing the error message text.
     */
    get errorMessage() {
        return this.rootEl.$('//h3[@data-test="error"]')
    }

    /**
     * Returns the WebElement representing the close button for the error message box.
     * 
     * @returns {WebdriverIO.Element} - The WebElement for the close button of the error message.
     */
    get closeButton() {
        return this.rootEl.$('//button[@data-test="error-button"]')
    }

    /**
     * Waits until the error message is displayed on the page.
     * 
     * @returns {Promise<void>} - A promise that resolves once the error message is displayed.
     */
    async waitForErrorMessage() {
        await this.errorMessage.waitForDisplayed()
    }

    /**
     * Retrieves the text content of the displayed error message.
     * 
     * @returns {Promise<string>} - The text content of the error message.
     */
    async getErrorMessageText() {
        return this.errorMessage.getText()
    }
}

module.exports = ErrorMessageBoxComponent
