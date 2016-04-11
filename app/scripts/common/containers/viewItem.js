/**
 * Created by Zeron on 09.04.2016.
 */
var React = require("react");
var connect = require("react-redux").connect;
var _ = require("underscore");
var browserHistory = require("react-router").browserHistory;

var ViewItem = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },

    goBack: function () {
        browserHistory.push("/");
    },

    render: function () {
        return (
            <div>
                <div>Id: {this.props.item.id}</div>
                <div>Name: {this.props.item.name}</div>
                <div>Price: {this.props.item.price}</div>

                <button onClick={this.goBack}>Go Back</button>
            </div>
        );
    }
});

var getItem = function (items, itemId) {
    return _.findWhere(items, {id: parseInt(itemId)});
};

var mapStateToProps = function (state, ownProps) {
    return {
        item: getItem(state.items, ownProps.params.itemId)
    }
};

module.exports = connect(mapStateToProps)(ViewItem);