var Application = require("./scripts/common/components/app.js");
var Provider = require("react-redux").Provider;
var ReactDom = require("react-dom");
var React = require("react");
var mainStore = require("common/stores/mainStore");

require("./styles/main.less");

ReactDom.render(
    <Provider store={mainStore}>
        <Application />
    </Provider>,
    document.getElementById("root")
);