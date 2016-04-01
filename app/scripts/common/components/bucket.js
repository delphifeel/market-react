var React = require("react");
var _ = require("underscore");
var connect = require("react-redux").connect;

function getSummary(items) {
    var result = 0;
    _.each(items, function (item) {
        result += item.count * item.price;
    });
    return result;
}

var Bucket = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    createBucketItem: function (item) {
        return (
            <div key={item.id}>{item.count} {item.name}</div>
        );
    },

    getBucketItems: function () {
        if (this.props.items.length === 0) {
            return <div>No items in bucket :(</div>
        } else {
            return this.props.items.map(this.createBucketItem);
        }
    },

    getSummaryPrice: function () {
        if (this.props.items.length <= 0) {
            return;
        }
        return <div>Summary: {getSummary(this.props.items)}</div>
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

var mapStateToProps = function (state) {
    return {
        items: state.bucket
    };
};

Bucket = connect(mapStateToProps)(Bucket);

module.exports = Bucket;