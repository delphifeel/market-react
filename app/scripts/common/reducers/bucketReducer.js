import bucketActionsTypes from "common/constants/bucketActionsTypes"
import _ from "underscore"

const addToBucket = (bucketItems, item) => {
    let bucketItem, alreadyItem, newBucketItems;

    newBucketItems = [...bucketItems];
    bucketItem = _.pick(item, "id", "name", "price");
    alreadyItem = _.findWhere(newBucketItems, {id: bucketItem.id});
    if (alreadyItem) {
        alreadyItem.count++;
    } else {
        bucketItem.count = 1;
        newBucketItems.push(bucketItem);
    }

    return newBucketItems;
};

const bucketReducer = (bucketItems = [], action = null) => {
    switch (action.type) {
        case bucketActionsTypes.ADD_ITEM:
            return addToBucket(bucketItems, action.item);
        default:
            return bucketItems;
    }
};

export default bucketReducer;