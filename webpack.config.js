const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = () => ({
    entry: { main: "./src/index.js" },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        port: 3000,
        host: "localhost",
        hot: true,
        open: true,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        }
    }
});

module.exports = config;
