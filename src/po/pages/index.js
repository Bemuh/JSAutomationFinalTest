const DashboardPage = require("./dashboard.page");
const LoginPage = require("./login.page");


function pages(name) {
    const items = {
        login: new LoginPage(),
        dashboard: new DashboardPage()
    }
    return items[name.toLowerCase()]
}

module.exports = {
    LoginPage,
    DashboardPage,
    pages
}