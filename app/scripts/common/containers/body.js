import React from "react"
import ItemsPanel from "./itemsPanel"
import CreateItemForm from "./createItemForm"
import HideChildren from "./hideChildren"
import activeFormActions from "common/actions/activeFormActions"
import activeFormActionsTypes from "common/constants/activeFormActionsTypes"
import itemsActions from "common/actions/itemsActions"
import {connect} from "react-redux"

class Body extends React.Component {
    render() {
        return (
            <div>
                {this.props.isFormOpened ?
                    <CreateItemForm onCreate={this.props.onCreate} onBack={this.props.onBack}/> :
                    null
                }

                <HideChildren condition={this.props.isFormOpened}>
                    <ItemsPanel />
                </HideChildren>
            </div>
        );
    }
}

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
