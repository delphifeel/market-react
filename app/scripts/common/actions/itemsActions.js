var itemsActionsTypes = require("scripts/common/constants/itemsActionsTypes");
var $ = require("jquery");
var itemsService = require("scripts/common/services/itemsService");

module.exports = {
    addItem: function (item) {
        return {
            type: itemsActionsTypes.ADD_ITEM,
            item: item
        }
    },

    changeItemQuantity: function (itemId, newQuantity) {
        return {
            type: itemsActionsTypes.CHANGE_ITEM_QUANTITY,
            itemId: itemId,
            newQuantity: newQuantity
        }
    },

    afterLoadItems: function (items) {
        return {
            type: itemsActionsTypes.LOAD_ITEMS,
            items: items
        };
    },

    loadItems: function () {
        var me = this;

        return function (dispatch) {
            return itemsService.getItems()
                .then(function (items) {
                    return dispatch(me.afterLoadItems(items));
                });
        };
    }
};
