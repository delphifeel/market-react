import Application from "./scripts/common/containers/app"
import Body from "./scripts/common/containers/body"
import ViewItem from "./scripts/common/containers/viewItem"
import {Provider} from "react-redux"
import ReactDom from "react-dom"
import React from "react"
import mainStore from "common/stores/mainStore"
import {syncHistoryWithStore} from "react-router-redux"
import {Router, Route, IndexRoute, browserHistory} from "react-router"

import * as styles from "./styles/main.less"

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