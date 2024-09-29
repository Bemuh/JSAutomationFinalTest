class BasePage {

    constructor(url) {
        this.url = url
    }
   
    open() {
        return browser.url(this.url)
    }

    /**
     * Clears the value of an input field by simulating backspace key presses for each character.
     * 
     * @param {WebdriverIO.Element} input - The input field element to be cleared.
     * @returns {Promise<void>} - A promise that resolves when the input field is cleared.
     */
    async clearFieldValue(input) {
        // Get the length of the current value in the input field
        const inputValue = await input.getValue()
        const backspaces = inputValue.length
    
        // Use browser.keys to send the backspace key for each character in the input field
        for (let i = 0; i < backspaces; i++) {
            await browser.keys(['Backspace'])
        }
    }
    
}

module.exports = BasePage