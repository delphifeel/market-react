/**
 * Created by Zeron on 04.04.2016.
 */
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");

function activeFormReducer(state, action) {
    if (state === undefined) {
        state = null;
    }

    switch (action.type) {
        case activeFormActionsTypes.OPEN_FORM:
            return action.formName;
        default:
            return state;
    }
}

module.exports = activeFormReducer;