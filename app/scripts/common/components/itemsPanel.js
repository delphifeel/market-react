var React = require("react");
var itemsStore = require("common/stores/itemsStore");
var itemsActions = require("common/actions/itemsActions");
var ItemComponent = require("./itemComponent");

var ItemsPanel = React.createClass({
    getInitialState: function () {
        return {
            items: itemsStore.getState()
        };
    },

    onChange: function () {
        var items = itemsStore.getState();
        this.setState({
            items: items
        });
    },

    componentDidMount: function () {
        this.unsubscribe = itemsStore.subscribe(this.onChange);
        itemsStore.dispatch(itemsActions.loadItems());
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    createItemComponent: function (item) {
        if (item.quantity <= 0) {
            return;
        }

        return (
            <ItemComponent key={item.id} item={item} />
        );
    },

    getItems: function () {
        return this.state.items.map(this.createItemComponent);
    },

    render: function () {
        return (
            <div>
                {this.getItems()}
            </div>
        );
    }
});

module.exports = ItemsPanel;