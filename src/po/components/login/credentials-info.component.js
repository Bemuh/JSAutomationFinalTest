const BaseComponent = require('../common/base.component')

class CredentialsInfoComponent extends BaseComponent {

    constructor() {
        // Call the parent class constructor, passing the root selector for the credentials info section.
        super('.login_credentials_wrap')
    }

    get acceptedUsernames() {
        // Locate the element using XPath based on the data-test attribute.
        return this.rootEl.$('//div[@data-test="login-credentials"]')
    }

    get passwordInfo() {
        // Locate the element using XPath based on the data-test attribute.
        return this.rootEl.$('//div[@data-test="login-password"]')
    }

    removeInitialText(text) {
        // Split the text by line breaks to create an array, where each line represents an item.
        const lines = text.split('\n')
    
        // Remove the first line, which contains the header text.
        return lines.slice(1)
    }
    
    /**
     * A helper method that removes the initial text and returns either the full array 
     * or a specific item based on the selector.
     * 
     * @param {string} text - The full text content from the element.
     * @param {number|string|null} selector - Optional. A number (index) or a string (value) to select a specific item.
     * @returns {Array<string>|string|null} - The array of items, or a specific item if a selector is provided.
     */
    selectItemFromArray(text, selector = null) {
        const array = this.removeInitialText(text)
    
        if (typeof selector === 'number') {
            return array[selector] || null // Return item by index, or null if not found.
        } else if (typeof selector === 'string') {
            return array.find(item => item === selector) || null // Return item by string match, or null if not found.
        }
    
        // If no selector is provided, return the full array.
        return array
    }
    
    /**
     * This method retrieves the accepted usernames displayed in the credentials section
     * and returns them as an array of individual usernames. Optionally, you can select
     * a specific username by providing an index or a username string.
     * 
     * @param {number|string} [selector] - Optional. If a number, it selects the username by index (0-based). 
     *                                     If a string, it selects the username that matches the string.
     * 
     * @returns {Promise<Array<string>|string|null>} - An array of accepted usernames as strings,
     * or a specific username if an index or string is provided. Returns null if the selector doesn't match.
     */
    async getUsernamesArray(selector = null) {
        // Get the text content of the accepted usernames element.
        const text = await this.acceptedUsernames.getText()
        
        // Use the shared helper to handle the selection logic.
        return this.selectItemFromArray(text, selector)
    }
    
    /**
     * Async method to get the text of the password information section.
     * Optionally, you can select a specific password by providing an index or a string.
     * 
     * @param {number|string} [selector] - Optional. If a number, it selects the password by index (0-based). 
     *                                     If a string, it selects the password that matches the string.
     * 
     * @returns {Promise<Array<string>|string|null>} - An array of passwords as strings,
     * or a specific password if an index or string is provided. Returns null if the selector doesn't match.
     */
    async getPasswordArray(selector = null) {
        // Get the text content of the password information element.
        const text = await this.passwordInfo.getText()
    
        // Use the shared helper to handle the selection logic.
        return this.selectItemFromArray(text, selector)
    }
    
}

module.exports = CredentialsInfoComponent
