var React = require("react");

var ItemComponent = function (props) {
    return (
        <div onClick={props.onItemClick} className="item-component black-border">
            <div>{props.item.name}</div>
            <div>Count: {props.item.quantity}</div>
            <div>Price: {props.item.price}</div>
        </div>
    );
};

module.exports = ItemComponent;