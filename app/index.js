var Application = require("./scripts/common/components/app.js");
var ReactDom = require("react-dom");
var React = require("react");
require("./styles/main.css");

ReactDom.render(
    <Application />,
    document.getElementById("root")
);