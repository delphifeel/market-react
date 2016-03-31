var $ = require("jquery");

function ItemsService() {
    var me = this;
}

ItemsService.prototype.getItems = function () {
    var me = this;
    return $.when([
        {
            "id": 1,
            "name": "Apples",
            "quantity": 2,
            "price": 5.00
        },
        {
            "id": 2,
            "name": "Bananas",
            "quantity": 1,
            "price": 10.00
        }
    ]);
};

module.exports = new ItemsService();
