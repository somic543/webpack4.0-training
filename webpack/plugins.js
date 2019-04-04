const path = require('path');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');
const _MinifyPlugin = require("babel-minify-webpack-plugin");
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _CleanWebpackPlugin = require('clean-webpack-plugin');
const _LiveReloadPlugin = require('webpack-livereload-plugin');

// const devMode = process.env.NODE_ENV !== 'production'

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename:'css/[name].bundle.css',
    chunkFilename: '[id].css'
});

const StyleLintPlugin = new _StyleLintPlugin({
    configFile: path.resolve(__dirname, '/webpack/stylelint.config.js'),
    context: path.resolve(__dirname, '/src/css'),
    files: '**/*.css',
    failOnError: false,
    quiet: false
});

const MinifyPlugin = new _MinifyPlugin();

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({filename: '../index.ejs', template: 'src/assets/index.ejs'});

const CleanWebpackPlugin = new _CleanWebpackPlugin();

const LiveReloadPlugin = new _LiveReloadPlugin({appendScriptTag: true});

module.exports = {
    MiniCssExtractPlugin: MiniCssExtractPlugin,
    StyleLintPlugin: StyleLintPlugin,
    MinifyPlugin: MinifyPlugin,
    HtmlWebpackPlugin: HtmlWebpackPlugin,
    CleanWebpackPlugin: CleanWebpackPlugin,
    LiveReloadPlugin: LiveReloadPlugin
};