var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: ["react", 'react-dom', "./src/index"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devtool: "source-map",
    target: "web",
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.tsx?$/, include: path.resolve(__dirname, "src"), loader: "ts-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        port: 3000,
        contentBase: path.resolve(__dirname, "dist")
    }
}