var React = require("react");
var Header = require("./header");
var Body = require("./body");

var Application = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
});

module.exports = Application;