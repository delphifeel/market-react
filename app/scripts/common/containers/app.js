var React = require("react");
var Header = require("./header");
var Body = require("./body");
var connect = require("react-redux").connect;
var itemsActions = require("common/actions/itemsActions");

var Application = React.createClass({
    componentDidMount: function () {
        this.props.loadItems();
    },

    render: function () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
});

var loadItems = function (dispatch) {
    dispatch(itemsActions.loadItems());
};

var mapDispatchToProps = function (dispatch) {
    return {
        loadItems: loadItems.bind(null, dispatch)
    };
};

module.exports = connect(null, mapDispatchToProps)(Application);