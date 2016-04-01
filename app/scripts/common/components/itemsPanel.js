var React = require("react");
var connect = require("react-redux").connect;
var itemsActions = require("common/actions/itemsActions");
var bucketActions = require("common/actions/bucketActions");
var ItemComponent = require("./itemComponent");

var ItemsPanel = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        onItemClick: React.PropTypes.func.isRequired,
        loadItems: React.PropTypes.func.isRequired
    },

    componentDidMount: function () {
        this.props.loadItems();
    },

    createItemComponent: function (item) {
        if (item.quantity <= 0) {
            return;
        }

        return (
            <ItemComponent key={item.id} item={item} onItemClick={this.props.onItemClick.bind(null, item)} />
        );
    },

    getItems: function () {
        return this.props.items.map(this.createItemComponent);
    },

    render: function () {
        return (
            <div>
                {this.getItems()}
            </div>
        );
    }
});

var mapStateToProps = function (state) {
    return {
        items: state.items
    }
};

var onItemClick = function (dispatch, item) {
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

var loadItems = function (dispatch) {
    dispatch(itemsActions.loadItems());
};

var mapDispatchToProps = function (dispatch) {
    return {
        onItemClick: onItemClick.bind(this, dispatch),
        loadItems: loadItems.bind(this, dispatch)
    }
};

ItemsPanel = connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);

module.exports = ItemsPanel;