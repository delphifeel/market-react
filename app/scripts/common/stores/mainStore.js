/**
 * Created by Zeron on 01.04.2016.
 */
import bucketReducer from "common/reducers/bucketReducer"
import itemsReducer from "common/reducers/itemsReducer"
import activeFormReducer from "common/reducers/activeFormReducer"
import {combineReducers, applyMiddleware, createStore} from "redux"
import reduxThunk from "redux-thunk"

import {routerReducer} from "react-router-redux"

const initialState = {
    items: [],
    bucket: []
};

const mainReducer = combineReducers({
    bucket: bucketReducer,
    items: itemsReducer,
    activeForm: activeFormReducer,
    routing: routerReducer
});

export default createStore(
    mainReducer,
    initialState,
    applyMiddleware(
        reduxThunk
    )
);