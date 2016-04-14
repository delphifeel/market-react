import activeFormActionsTypes from "common/constants/activeFormActionsTypes"

const activeFormReducer = (state = null, action = null) => {
    switch (action.type) {
        case activeFormActionsTypes.OPEN_FORM:
        case activeFormActionsTypes.CLOSE_ACTIVE_FORM:
            return action.formName;
        default:
            return state;
    }
};

export default activeFormReducer;