/**
 * Created by Zeron on 04.04.2016.
 */
import activeFormActionsTypes from "common/constants/activeFormActionsTypes"

export default {
    openForm (formName) {
        return {
            type: activeFormActionsTypes.OPEN_FORM,
            formName
        };
    },

    closeActiveForm() {
        return {
            type: activeFormActionsTypes.CLOSE_ACTIVE_FORM,
            formName: null
        }
    }
};