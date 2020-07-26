const
    path = require('path'),
    {merge} = require('webpack-merge'),
    common = require('./webpack.common.js'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')
;

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist')
    },
    watch: true,
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    }
});
