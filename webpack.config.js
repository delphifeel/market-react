var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        './app/index'
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets/",
        filename: "browser-bundle.js"
    },
    resolve: {
        modulesDirectories: [
            "app/scripts",
            "node_modules"
        ]
    },
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: "/node_modules/",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(le|c)ss$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    }
};