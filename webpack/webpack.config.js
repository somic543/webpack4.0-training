const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app.js',
        // adminApp: './src/adminApp.js'
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.ESLintLoader,
            loaders.CSSLoader,
            loaders.ImageLoader,
            loaders.FontLoader
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/public'),
        filename: "js/[name].bundle.js", // [name] : name define in entry. 
        publicPath: 'public'

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        plugins.HtmlWebpackPlugin,
        plugins.StyleLintPlugin,
        plugins.MiniCssExtractPlugin, 
        plugins.CleanWebpackPlugin,
        plugins.LiveReloadPlugin
        // plugins.MinifyPlugin
    ]
};