import React from "react"

const HideChildren = (props) => {
    const hideStyle = props.condition ? {display: "none"} : {};

    return (
        <div style={hideStyle}>
            {props.children}
        </div>
    )
};

export default HideChildren;