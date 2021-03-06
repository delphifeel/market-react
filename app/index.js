var Application = require("./scripts/common/containers/app");
var Body = require("./scripts/common/containers/body");
var ViewItem = require("./scripts/common/containers/viewItem");
var Provider = require("react-redux").Provider;
var ReactDom = require("react-dom");
var React = require("react");
var mainStore = require("common/stores/mainStore");
var syncHistoryWithStore = require("react-router-redux").syncHistoryWithStore;
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var browserHistory = require("react-router").browserHistory;

require("./styles/main.less");

const history = syncHistoryWithStore(browserHistory, mainStore);

ReactDom.render(
    <Provider store={mainStore}>
        <Router history={history}>
            <Route path="/" component={Application}>
                <IndexRoute component={Body}/>
                <Route path="/item/:itemId/view" component={ViewItem} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);