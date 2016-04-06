/**
 * Created by Zeron on 06.04.2016.
 */
var React = require("react");

var HideChildren = React.createClass({
    propTypes: {
        condition: React.PropTypes.bool.isRequired
    },

    render: function () {
        var hideStyle = this.props.condition ? {display: "none"} : {};

        return (
            <div style={hideStyle}>
                {this.props.children}
            </div>
        )
    }
});

module.exports = HideChildren;