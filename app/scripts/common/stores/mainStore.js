/**
 * Created by Zeron on 01.04.2016.
 */
var bucketReducer = require("common/reducers/bucketReducer");
var itemsReducer = require("common/reducers/itemsReducer");
var activeFormReducer = require("common/reducers/activeFormReducer");
var combineReducers = require("redux").combineReducers;
var applyMiddleware = require("redux").applyMiddleware;
var reduxThunk = require("redux-thunk");
var createStore = require("redux").createStore;
var routerReducer = require("react-router-redux").routerReducer;

var initialState = {
    items: [],
    bucket: []
};

var mainReducer = combineReducers({
    bucket: bucketReducer,
    items: itemsReducer,
    activeForm: activeFormReducer,
    routing: routerReducer
});

var mainStore = createStore(
    mainReducer,
    initialState,
    applyMiddleware(
        reduxThunk.default
    )
);

module.exports = mainStore;