/**
 * Created by Zeron on 12.04.2016.
 */
var React = require("react");
var ItemComponent = require("common/components/itemComponent");
var connect = require("react-redux").connect;
var itemsActions = require("common/actions/itemsActions");
var bucketActions = require("common/actions/bucketActions");
var browserHistory = require("react-router").browserHistory;
var _ = require("underscore");

var ItemOnPanel = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
        onAddToBucket: React.PropTypes.func.isRequired,
        onView: React.PropTypes.func.isRequired
    },

    render: function () {
        return (
            <ItemComponent item={this.props.item}>
                <button onClick={this.props.onAddToBucket}>Add to bucket</button>
                <button onClick={this.props.onView}>View</button>
            </ItemComponent>
        );
    }
});

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

var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onView: viewItem.bind(null, ownProps.item.id),
        onAddToBucket: addToBucket.bind(null, dispatch, ownProps.item)
    }
};

module.exports = connect(null, mapDispatchToProps)(ItemOnPanel);