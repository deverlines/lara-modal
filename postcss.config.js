module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('cssnano')(),
        require('postcss-flexbugs-fixes'),
        require('postcss-sort-media-queries')()
    ]
};
