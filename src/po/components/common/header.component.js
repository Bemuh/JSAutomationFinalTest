const BaseComponent = require('./base.component')

class HeaderComponent extends BaseComponent {
    constructor() {
        super('//div[@data-test="primary-header"]')
    }

    // Menu button (Open Menu)
    get menuButton() {
        return this.rootEl.$('//button[@data-test="open-menu"]')
    }

    // Close Menu button
    get closeButton() {
        return this.rootEl.$('//button[@data-test="close-menu"]')
    }

    // Shopping cart link
    get shoppingCartLink() {
        return this.rootEl.$('//a[@data-test="shopping-cart-link"]')
    }

    // Swag Labs logo
    get swagLabsLogo() {
        return this.rootEl.$('//div[@class="app_logo"]')
    }

    /**
     * Verifies the presence of the "Swag Labs" logo and checks its text content.
     * 
     * @returns {Promise<void>} - A promise that resolves when the logo is verified.
     */
    async checkSwagLabsLogo() {
        try {
            // Locate the Swag Labs logo
            const swagLabsLogo = await $('//div[@class="app_logo"]')

            // Wait for the logo to be visible with a 5-second timeout
            await swagLabsLogo.waitForDisplayed({ timeout: 5000 })

            // Get the text content of the logo
            const actualText = await swagLabsLogo.getText()

            console.log(`Actual logo text: ${actualText}`)

            // Assert that the text is as expected
            expect(actualText).toEqual('Swag Labs', `Expected logo text to be "Swag Labs", but got "${actualText}"`)

        } catch (error) {
            // Log the error and throw a more detailed message
            console.error(`Error verifying Swag Labs logo: ${error.message}`)
            throw new Error(`Failed to verify Swag Labs logo. Expected "Swag Labs" but encountered an issue: ${error.message}`)
        }
    }
}

module.exports = HeaderComponent
