module.exports = {
    entry: './app/index',
    output: {
        filename: './public/browser-bundle.js'
    },
    resolve: {
        modulesDirectories: [
            "app/scripts",
            "node_modules"
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        //inline: true
    },
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};