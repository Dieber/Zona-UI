const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: "development",
    devServer: {
      contentBase: './dist',
      port: 9347
    },
    entry: {
        example: './examples/index.tsx',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
})
