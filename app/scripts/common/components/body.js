var React = require("react");
var ItemsPanel = require("./itemsPanel");

var Body = React.createClass({
    render: function () {
        return (
            <div className="body-panel black-border">
                <ItemsPanel />
            </div>
        );
    }
});

module.exports = Body;
