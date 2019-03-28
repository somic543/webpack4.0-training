const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// true if develop mode
// const devMode = process.env.NODE_ENV !== 'production';

// Javascript loader
const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
};

// ESLint loader
const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: __dirname + '/.eslintrc'
        }
    }
};

//CSS Loader
const CSSLoader = {
    test: /\.(sa|sc|c)ss$/,
    // sideEffects: true,
    exclude: /node_modules/,
    use: [{
        loader: MiniCssExtractPlugin.loader   
    },
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            config: {
                path: __dirname + '/postcss.config.js'
            },
            plugins: [
                require('autoprefixer')({
                    'browsers': ['> 1%', 'last 2 versions']
                })
            ]
        }
    },
    {
        loader: 'sass-loader'
    }
    ]
};

// Image Loader
const ImageLoader = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [{
        loader: 'file-loader'
    }]
}

// module exports
module.exports = {
    JSLoader: JSLoader,
    ESLintLoader: ESLintLoader,
    CSSLoader: CSSLoader,
    ImageLoader: ImageLoader
};