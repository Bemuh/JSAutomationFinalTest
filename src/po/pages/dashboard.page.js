// const sideMenuComponent = require('../components/common/sidemenu.component');
const BasePage = require('./base.page');

class DashboardPage extends BasePage {

    constructor() {
        super('/inventory.html')
    }

}

module.exports = DashboardPage;
