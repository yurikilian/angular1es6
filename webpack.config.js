var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app/app.js'),
        path.resolve(__dirname, 'src/vendor/app.vendor.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.IgnorePlugin(/vertx/),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.IgnorePlugin(/[A-Za-z]*\.(html)$/i)
    ],
    devtool: 'source-map'
};
