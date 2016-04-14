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
        publicPath: "/static/",
        filename: "browser-bundle.js"
    },
    resolve: {
        modulesDirectories: [
            "app/scripts",
            "node_modules"
        ]
    },
    devtool: "#source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/static/",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["react-hot", "babel"],
                include: path.resolve(__dirname, "app")
            },
            {
                test: /\.(le|c)ss$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    }
};