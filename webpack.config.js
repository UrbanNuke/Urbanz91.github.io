const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: './src',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: "ts-loader"},
            {test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]},
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: './images/[name].[ext]',
                    },
                }],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}
