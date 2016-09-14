var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/app/boot.js'),
        path.resolve(__dirname, 'src/vendor/polyfills/polyfills.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.min.js',
        publicPath: path.join(__dirname, "dist/")
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
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new webpack.ContextReplacementPlugin("./src")
    ],
    devtool: 'source-map'
};
