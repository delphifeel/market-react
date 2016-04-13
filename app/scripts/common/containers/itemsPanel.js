var React = require("react");
var connect = require("react-redux").connect;
var itemsActions = require("common/actions/itemsActions");
var bucketActions = require("common/actions/bucketActions");
var ItemOnPanel = require("common/containers/itemOnPanel");
var createSelector = require("reselect").createSelector;
var activeFormActions = require("common/actions/activeFormActions");
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");

var ItemsPanel = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        openCreateItemForm: React.PropTypes.func.isRequired
    },

    createItemComponent: function (item) {
        return (
            <ItemOnPanel key={item.id} item={item}/>
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

var mapDispatchToProps = function (dispatch) {
    return {
        openCreateItemForm: dispatch.bind(
            null,
            activeFormActions.openForm(activeFormActionsTypes.CREATE_ITEM_FORM_NAME)
        )
    }
};

ItemsPanel = connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);

module.exports = ItemsPanel;