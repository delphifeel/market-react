/**
 * Created by Zeron on 12.04.2016.
 */
import React from "react"
import ItemComponent from "common/components/itemComponent"
import {connect} from "react-redux"
import itemsActions from "common/actions/itemsActions"
import bucketActions from "common/actions/bucketActions"
import {browserHistory} from "react-router"
import _ from "underscore"

const ItemOnPanel = (props) => {
    return (
        <ItemComponent item={props.item} onHeaderClick={props.onView}>
            <button className="btn btn-primary" onClick={props.onAddToBucket}>Add to bucket</button>
        </ItemComponent>
    );
};

const addToBucket = (dispatch, item) => {
    if (item.quantity > 0) {

        dispatch(bucketActions.addItem(
            item
        ));

        dispatch(itemsActions.changeItemQuantity(
            item.id,
            item.quantity - 1
        ));
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onView: () => browserHistory.push("/item/" + ownProps.item.id + "/view"),
        onAddToBucket: addToBucket.bind(null, dispatch, ownProps.item)
    }
};

export default connect(null, mapDispatchToProps)(ItemOnPanel);