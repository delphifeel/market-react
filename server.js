var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config");
var path = require("path");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: "./public",
    publicPath: config.output.publicPath,

    hot: true,
    historyApiFallback: {
        index: "index.html"
    },

    // webpack-dev-middleware options
    stats: { colors: true }
});

server.listen(8080, "localhost", function() {});