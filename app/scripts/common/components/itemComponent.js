var React = require("react");

var ItemComponent = function (props) {
    return (
        <div className="item-component">
            <div>{props.item.name}</div>
            <div>Count: {props.item.quantity}</div>
            <div>Price: {props.item.price}</div>
            <button onClick={props.onAddToBucket}>Add to bucket</button>
            <button onClick={props.onView}>View</button>
        </div>
    );
};

module.exports = ItemComponent;