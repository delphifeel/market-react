/**
 * Created by Zeron on 04.04.2016.
 */
var activeFormActionsTypes = require("common/constants/activeFormActionsTypes");

module.exports = {
    openForm: function (formName) {
        return {
            type: activeFormActionsTypes.OPEN_FORM,
            formName: formName
        };
    }
};