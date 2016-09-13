var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app/boot.js'),
        path.resolve(__dirname, 'src/vendor/es6-promise.min.js'),
        path.resolve(__dirname, 'src/vendor/fetch.js')
    ],
    output: {
        path: path.resolve(__dirname, 'target'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.IgnorePlugin(/vertx/)
    ],
    devtool: 'source-map'
};
