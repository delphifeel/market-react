var itemsActionsTypes = require("common/constants/itemsActionsTypes");
var _ = require("underscore");

var initialState = [];

function addToItems(items, item) {
    // TODO
}

function changeItemQuantity(items, itemId, newQuantity) {
    var newItems, item;

    newItems = items.slice();
    item = _.findWhere(newItems, {id: itemId});
    item.quantity = newQuantity;

    return newItems;
}

function itemsReducer(items, action) {
    if (items === undefined) {
        items = [];
    }

    switch (action.type) {
        case itemsActionsTypes.ADD_ITEM:
            return addToItems(items, action.item);

        case itemsActionsTypes.CHANGE_ITEM_QUANTITY:
            return changeItemQuantity(items, action.itemId, action.newQuantity);

        case itemsActionsTypes.LOAD_ITEMS:
            return action.items;

        default:
            return items;
    }
}

module.exports = itemsReducer;