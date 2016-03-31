var React = require("react");
var bucketStore = require("scripts/common/stores/bucketStore");
var _ = require("underscore");

function getSummary(items) {
    var result = 0;
    _.each(items, function (item) {
        result += item.count * item.price;
    });
    return result;
}

var Bucket = React.createClass({
    getInitialState: function () {
        return {
            items: bucketStore.getState()
        };
    },

    onChange: function () {
        var items = bucketStore.getState();
        this.setState({
            items: items
        });
    },

    createBucketItem: function (item) {
        return (
            <div key={item.id}>{item.count} {item.name}</div>
        );
    },

    getBucketItems: function () {
        if (this.state.items.length === 0) {
            return <div>No items in bucket :(</div>
        } else {
            return this.state.items.map(this.createBucketItem);
        }
    },

    componentDidMount: function () {
        this.unsubscribe = bucketStore.subscribe(this.onChange);
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    getSummaryPrice: function () {
        if (this.state.items.length <= 0) {
            return;
        }
        return <div>Summary: {getSummary(this.state.items)}</div>
    },

    render: function () {
        return (
            <div>
                {this.getBucketItems()}
                {this.getSummaryPrice()}
            </div>
        );
    }
});

module.exports = Bucket;