const
    path = require('path'),
    {merge} = require('webpack-merge'),
    common = require('./webpack.common.js'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')
;

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'build')
    },
    plugins: [],
    watch: false,
    devtool: 'none',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
});
