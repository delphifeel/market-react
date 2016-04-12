var React = require("react");
var connect = require("react-redux").connect;
var itemsActions = require("common/actions/itemsActions");
var bucketActions = require("common/actions/bucketActions");
var ItemComponent = require("common/components/itemComponent");
var createSelector = require("reselect").createSelector;
var activeFormActions = require("common/actions/activeFormActions");
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");
var browserHistory = require("react-router").browserHistory;

var ItemsPanel = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        onAddToBucket: React.PropTypes.func.isRequired,
        onViewItem: React.PropTypes.func.isRequired,
        openCreateItemForm: React.PropTypes.func.isRequired
    },

    createItemComponent: function (item) {
        return (
            <ItemComponent key={item.id}
                           item={item}
                           onAddToBucket={this.props.onAddToBucket.bind(null, item)}
                           onView={this.props.onViewItem.bind(null, item.id)}/>
        );
    },

    getItems: function () {
        return this.props.items.map(this.createItemComponent);
    },

    render: function () {
        return (
            <div>
                <button onClick={this.props.openCreateItemForm}>Create new item</button>
                <div className="body-panel">
                    {this.getItems()}
                </div>
            </div>
        );
    }
});

var getItems = function (state) {
    return state.items;
};

var getExistingItems = createSelector(
    [getItems],
    function (items) {
        return items.filter(function (item) {
            return item.quantity > 0;
        });
    }
);

var mapStateToProps = function (state) {
    return {
        items: getExistingItems(state)
    }
};

var addToBucket = function (dispatch, item) {
    if (item.quantity > 0) {

        dispatch(bucketActions.addItem(
            item
        ));

        dispatch(itemsActions.changeItemQuantity(
            item.id,
            item.quantity - 1
        ));
    }
};

var viewItem = function (itemId) {
    browserHistory.push("/item/" + itemId + "/view");
};

var mapDispatchToProps = function (dispatch) {
    return {
        onAddToBucket: addToBucket.bind(null, dispatch),
        onViewItem: viewItem,
        openCreateItemForm: dispatch.bind(
            null,
            activeFormActions.openForm(activeFormActionsTypes.CREATE_ITEM_FORM_NAME)
        )
    }
};

ItemsPanel = connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);

module.exports = ItemsPanel;