import React from "react"
import {connect} from "react-redux"
import itemsActions from "common/actions/itemsActions"
import bucketActions from "common/actions/bucketActions"
import ItemOnPanel from "common/containers/itemOnPanel"
import {createSelector} from "reselect"
import activeFormActions from "common/actions/activeFormActions"
import activeFormActionsTypes from "common/constants/activeFormActionsTypes"

const ItemsPanel = (props) => {
        return (
            <div>
                <button className="btn btn-primary create-btn" onClick={props.openCreateItemForm}>Create new item</button>
                <div className="body-panel">
                    <h1>Available products</h1>
                    {props.items.map((item) => <ItemOnPanel key={item.id} item ={item}/>)}
                </div>
            </div>
        );
};

const getItems = (state) => state.items;

const getExistingItems = createSelector(
    [getItems],
    (items) => items.filter((item) => item.quantity > 0)
);

const mapStateToProps = (state) => {
    return {
        items: getExistingItems(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openCreateItemForm: dispatch.bind(
            null,
            activeFormActions.openForm(activeFormActionsTypes.CREATE_ITEM_FORM_NAME)
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPanel);