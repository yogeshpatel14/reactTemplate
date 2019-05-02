const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'nosources-source-map',
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        runtimeChunk: 'single',
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
});