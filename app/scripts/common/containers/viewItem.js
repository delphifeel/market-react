/**
 * Created by Zeron on 09.04.2016.
 */
var React = require("react");

var ViewItem = React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <div>
                {this.props.params.itemId}
            </div>
        );
    }
});

module.exports = ViewItem;