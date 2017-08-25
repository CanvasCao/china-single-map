const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./src/index.js',],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3003,
    },
    externals: {
        lodash: '_',
        jquery: '$'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // }


        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new UglifyJSPlugin(),
        new ExtractTextPlugin("./index.css"),//合并以后输出的css...
    ]
};