const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/index.js',
      //  vendor:["antd","bootstrap","react-bootstrap","react","react-dom"]
    },
    output: {
        filename: 'main.js',
        //filename:'[name].[hash].js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[id]-[hash].chunk.js'
        //chunkFilename: 'vendors.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CleanWebpackPlugin(['build/*']),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),      
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|PNG)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }
        ]
    }
};