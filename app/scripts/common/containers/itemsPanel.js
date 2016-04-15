import React from "react"
import {connect} from "react-redux"
import itemsActions from "common/actions/itemsActions"
import bucketActions from "common/actions/bucketActions"
import ItemOnPanel from "common/containers/itemOnPanel"
import {createSelector} from "reselect"
import activeFormActions from "common/actions/activeFormActions"
import activeFormActionsTypes from "common/constants/activeFormActionsTypes"

class ItemsPanel extends React.Component {
    createItemComponent(item) {
        return (
            <ItemOnPanel key={item.id} item={item}/>
        );
    }

    getItems() {
        return this.props.items.map(this.createItemComponent);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary create-btn" onClick={this.props.openCreateItemForm}>Create new item</button>
                <div className="body-panel">
                    <h1>Available products</h1>
                    {this.getItems()}
                </div>
            </div>
        );
    }
}

ItemsPanel.propTypes = {
    items: React.PropTypes.array.isRequired,
    openCreateItemForm: React.PropTypes.func.isRequired
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