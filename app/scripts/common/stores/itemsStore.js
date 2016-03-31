var createStore = require("redux").createStore;
var itemsActionsTypes = require("scripts/common/constants/itemsActionsTypes");
var _ = require("underscore");
var applyMiddleware = require("redux").applyMiddleware;
var reduxThunk = require("redux-thunk");

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

var itemsStore = createStore(itemsReducer, initialState, applyMiddleware(reduxThunk.default));

module.exports = itemsStore;