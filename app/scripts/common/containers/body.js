var React = require("react");
var ItemsPanel = require("./itemsPanel");
var CreateItemForm = require("./createItemForm");
var HideChildren = require("./hideChildren");
var activeFormActions = require("common/actions/activeFormActions");
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");
var itemsActions = require("common/actions/itemsActions");
var connect = require("react-redux").connect;

var Body = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.isFormOpened ?
                    <CreateItemForm onCreate={this.props.onCreate} onBack={this.props.onBack} /> :
                    null
                }

                <HideChildren condition={this.props.isFormOpened}>
                    <ItemsPanel />
                </HideChildren>
            </div>
        );
    }
});

var mapStateToProps = function (state) {
    return {
        isFormOpened: state.activeForm === activeFormActionsTypes.CREATE_ITEM_FORM_NAME
    }
};

var onItemCreate = function (dispatch, item) {
    dispatch(activeFormActions.closeActiveForm());
    dispatch(itemsActions.addItem(item));
};

var mapDispatchToProps = function (dispatch) {
    return {
        onCreate: onItemCreate.bind(null, dispatch),
        onBack: dispatch.bind(null, activeFormActions.closeActiveForm())
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Body);
