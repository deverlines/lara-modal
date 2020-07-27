const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        filename  : "[name].js",
        chunkFilename: '[name].[chunkhash].js',
    },
    entry: {
        index: './index.js',
        style: './style.js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].[chunkhash].css'
        }),
    ]
};
