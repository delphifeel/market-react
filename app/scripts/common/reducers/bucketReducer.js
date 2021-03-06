var bucketActionsTypes = require("common/constants/bucketActionsTypes");
var _ = require("underscore");

function addToBucket (bucketItems, item) {
    var bucketItem, alreadyItem, newBucketItems,
        me = this;

    newBucketItems = bucketItems.slice();
    bucketItem = _.pick(item, "id", "name", "price");
    alreadyItem = _.findWhere(newBucketItems, {id: bucketItem.id});
    if (alreadyItem) {
        alreadyItem.count++;
    } else {
        bucketItem.count = 1;
        newBucketItems.push(bucketItem);
    }

    return newBucketItems;
}

function bucketReducer(bucketItems, action) {
    if (bucketItems === undefined) {
        bucketItems = [];
    }

    switch (action.type) {
        case bucketActionsTypes.ADD_ITEM:
            return addToBucket(bucketItems, action.item);

        default:
            return bucketItems;
    }
}

module.exports = bucketReducer;