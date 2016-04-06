var React = require("react");
var ItemsPanel = require("./itemsPanel");
var CreateItemForm = require("./createItemForm");
var HideChildren = require("./hideChildren");
var activeFormActions = require("common/actions/activeFormActions");
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");
var connect = require("react-redux").connect;

var Body = React.createClass({
    render: function () {
        return (
            <div>
                <button onClick={this.props.openCreateItemForm}>Create new item</button>
                {this.props.isFormOpened ? <CreateItemForm /> : null}

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

var mapDispatchToProps = function (dispatch) {
    return {
        openCreateItemForm: dispatch.bind(null, activeFormActions.openForm(activeFormActionsTypes.CREATE_ITEM_FORM_NAME))
    }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Body);
