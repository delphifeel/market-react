var React = require("react");
var bucketStore = require("common/stores/bucketStore");
var bucketActions = require("common/actions/bucketActions");
var itemsActions = require("common/actions/itemsActions");
var itemsStore = require("common/stores/itemsStore");

var ItemComponent = React.createClass({
    isHaveItems: function () {
        return this.props.item.quantity > 0;
    },

    addItemToBucket: function () {
        var me = this;

        bucketStore.dispatch(bucketActions.addItem(
            this.props.item
        ));
        itemsStore.dispatch(itemsActions.changeItemQuantity(
            this.props.item.id,
            this.props.item.quantity - 1
        ));
    },

    onClick: function () {
        if (this.isHaveItems()) {
            this.addItemToBucket();
        }
    },

    render: function () {
        return (
            <div onClick={this.onClick} className="item-component black-border">
                <div>{this.props.item.name}</div>
                <div>Count: {this.props.item.quantity}</div>
                <div>Price: {this.props.item.price}</div>
            </div>
        );
    }
});

module.exports = ItemComponent;