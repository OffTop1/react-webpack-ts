const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    resolve: { 
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}