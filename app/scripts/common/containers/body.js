import React from "react"
import ItemsPanel from "./itemsPanel"
import CreateItemForm from "./createItemForm"
import HideChildren from "./hideChildren"
import activeFormActions from "common/actions/activeFormActions"
import activeFormActionsTypes from "common/constants/activeFormActionsTypes"
import itemsActions from "common/actions/itemsActions"
import {connect} from "react-redux"

const Body = (props) => {
    return (
        <div>
            {props.isFormOpened ?
                <CreateItemForm onCreate={props.onCreate} onBack={props.onBack}/> :
                null
            }

            <HideChildren condition={props.isFormOpened}>
                <ItemsPanel />
            </HideChildren>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isFormOpened: state.activeForm === activeFormActionsTypes.CREATE_ITEM_FORM_NAME
    }
};

const onItemCreate = (dispatch, item) => {
    dispatch(activeFormActions.closeActiveForm());
    dispatch(itemsActions.addItem(item));
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreate: onItemCreate.bind(null, dispatch),
        onBack: dispatch.bind(null, activeFormActions.closeActiveForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
