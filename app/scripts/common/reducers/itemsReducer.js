import itemsActionsTypes from "common/constants/itemsActionsTypes"
import _ from "underscore"

const addToItems = (items, item) => {
    var newItems, newItem, id;

    newItems = items.slice();
    item.id = _.last(newItems).id + 1;
    item.price = Math.round(item.price * 100) / 100;
    item.quantity = Math.round(item.quantity);
    newItems.push(item);

    return newItems;
};

const changeItemQuantity = (items, itemId, newQuantity) => {
    var newItems, item, newItemIndex, newItem;

    newItems = items.slice();
    newItemIndex = _.findIndex(newItems, function (item) {return item.id === itemId;});
    newItem = _.extend({}, newItems[newItemIndex]);
    newItem.quantity = newQuantity;
    newItems[newItemIndex] = newItem;

    return newItems;
};

const itemsReducer = (items = [], action = null) => {
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
};

export default itemsReducer;