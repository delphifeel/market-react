var React = require("react");
var Bucket = require("./bucket");

var Header = React.createClass({
    render: function () {
        return (
            <div className="header-panel black-border">
                <Bucket />
            </div>
        );
    }
});

module.exports = Header;