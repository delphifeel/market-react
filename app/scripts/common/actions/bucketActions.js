import bucketActionsTypes from "common/constants/bucketActionsTypes"

export default {
    addItem(item) {
        return {
            type: bucketActionsTypes.ADD_ITEM,
            item
        }
    }
};
