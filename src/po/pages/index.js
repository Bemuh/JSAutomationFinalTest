const LoginPage = require("./login.page");


function pages(name) {
    const items = {
        login: new LoginPage(),
    }
    return items[name.toLowerCase()]
}

module.exports = {
    LoginPage,
    pages
}