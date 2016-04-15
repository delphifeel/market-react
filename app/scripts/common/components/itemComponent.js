import React from "react"

const ItemComponent = (props) => {
    return (
        <div className="item-component">
            <div className="name">{props.item.name}</div>
            <div>
                <p>Count: {props.item.quantity}</p>
                <p>Price: {props.item.price}</p>
            </div>
            {props.children}
        </div>
    );
};

export default ItemComponent;