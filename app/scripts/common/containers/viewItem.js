import React from "react"
import {connect} from "react-redux"
import _ from "underscore"
import {browserHistory} from "react-router"
import ItemComponent from "common/components/itemComponent"

const ViewItem = (props) => {
    return (
        <ItemComponent item={props.item}>
            <button onClick={() => browserHistory.goBack()}>Go Back</button>
        </ItemComponent>
    );
};

const getItem = (items, itemId) => {
    return _.findWhere(items, {id: parseInt(itemId)}) || {};
};

const mapStateToProps = (state, ownProps) => {
    return {
        item: getItem(state.items, ownProps.params.itemId)
    }
};

export default connect(mapStateToProps)(ViewItem);