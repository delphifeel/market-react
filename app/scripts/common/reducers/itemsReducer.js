var itemsActionsTypes = require("common/constants/itemsActionsTypes");
var _ = require("underscore");

var initialState = [];

function addToItems(items, item) {
    var newItems, newItem, id;

    newItems = items.slice();
    id = _.last(newItems).id + 1;
    newItems.push(_.extend(item, {
        id: id
    }));

    return newItems;
}

function changeItemQuantity(items, itemId, newQuantity) {
    var newItems, item, newItemIndex, newItem;

    newItems = items.slice();
    newItemIndex = _.findIndex(newItems, function (item) {return item.id === itemId;});
    newItem = _.extend({}, newItems[newItemIndex]);
    newItem.quantity = newQuantity;
    newItems[newItemIndex] = newItem;

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