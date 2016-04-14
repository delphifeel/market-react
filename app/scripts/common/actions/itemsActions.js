import itemsActionsTypes from "common/constants/itemsActionsTypes"
import $ from "jquery"
import itemsService from "common/services/itemsService"

export default {
    addItem (item) {
        return {
            type: itemsActionsTypes.ADD_ITEM,
            item
        }
    },

    changeItemQuantity (itemId, newQuantity) {
        return {
            type: itemsActionsTypes.CHANGE_ITEM_QUANTITY,
            itemId,
            newQuantity
        }
    },

    afterLoadItems (items) {
        return {
            type: itemsActionsTypes.LOAD_ITEMS,
            items
        };
    },

    loadItems () {
        var me = this;
        return (dispatch) => {
            return itemsService.getItems()
                .then(function (items) {
                    return dispatch(me.afterLoadItems(items));
                });
        };
    }
};
