require("styles/main.css");
var React = require("react");
var Header = require("./header");
var Body = require("./body");

var Application = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
});

module.exports = Application;