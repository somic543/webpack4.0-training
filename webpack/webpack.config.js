const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.ESLintLoader,
            loaders.CSSLoader,
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js", // [name] : name define in entry. 
    },
    plugins: [
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin,
        plugins.HtmlWebpackPlugin,
        plugins.CleanWebpackPlugin,
        // plugins.MinifyPlugin
    ],
};