var React = require("react");

var ItemComponent = function (props) {
    return (
        <div className="item-component">
            <div className="name">{props.item.name}</div>
            <div>Count: {props.item.quantity}</div>
            <div>Price: {props.item.price}</div>
            {props.children}
        </div>
    );
};

module.exports = ItemComponent;