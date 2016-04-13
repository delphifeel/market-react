/**
 * Created by Zeron on 09.04.2016.
 */
var React = require("react");
var connect = require("react-redux").connect;
var _ = require("underscore");
var ItemComponent = require("common/components/itemComponent");
var browserHistory = require("react-router").browserHistory;

var ViewItem = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired,
        item: React.PropTypes.object.isRequired
    },

    goBack: function () {
        browserHistory.goBack();
    },

    render: function () {
        return (
            <ItemComponent item={this.props.item}>
                <button onClick={this.goBack}>Go Back</button>
            </ItemComponent>
        );
    }
});

var getItem = function (items, itemId) {
    return _.findWhere(items, {id: parseInt(itemId)}) || {};
};

var mapStateToProps = function (state, ownProps) {
    return {
        item: getItem(state.items, ownProps.params.itemId)
    }
};

module.exports = connect(mapStateToProps)(ViewItem);