import React from "react"

const ItemComponent = (props) => {
    return (
        <div className="item-component">
            <h1 className="name" onClick={props.onHeaderClick}>{props.item.name}</h1>
            <div>
                <p>Count: {props.item.quantity}</p>
                <p>Price: {props.item.price}$</p>
            </div>
            <div className="btn-container">
                {props.children}
            </div>
        </div>
    );
};

export default ItemComponent;