var bucketActionsTypes = require("common/constants/bucketActionsTypes");

module.exports = {
    addItem: function (item) {
        return {
            type: bucketActionsTypes.ADD_ITEM,
            item: item
        }
    }
};
