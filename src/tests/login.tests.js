const {pages} = require ('./../po')

describe("Saucedemo's login page test suite", () => {
    beforeEach(async () => {
        await pages('login').open()
    })

    it('UC-1: Test Login Form with Empty Credentials', async () => {
        await pages('login').form.passwordInput.setValue('test')
        await pages('login').form.usernameInput.setValue('test')
        await pages('login').clearPasswordField()
        await pages('login').clearUsernameField()
        await pages('login').form.loginButton.click()
        await pages('login').checkErrorMessage('Epic sadface: Username is required')
    })

    it('UC-2: Test Login Form with Credentials by Passing Username', async () => {
        await pages('login').form.usernameInput.setValue('test')
        await pages('login').form.passwordInput.setValue('test')
        await pages('login').clearPasswordField()
        await pages('login').form.loginButton.click()
        await pages('login').checkErrorMessage('Epic sadface: Password is required')
    })

    it('UC-3: Test Login Form with Valid Credentials', async () => {
        const username = await pages('login').getUsernamesArray(0)
        const password = await pages('login').getPasswordArray(0)
        console.log(`the username is: ${username}`) 
        console.log(`the password is: ${password}`)
    
        await pages('login').login(username, password)
 
        const swagLabsLogo = await $('//div[@class="app_logo" and text()="Swag Labs"]')
        await swagLabsLogo.waitForDisplayed()
        const text = await swagLabsLogo.getText()
        expect(text).toEqual('Swag Labs')
    })
})