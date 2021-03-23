var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
    configureWebpack: () => {
        return {
            entry: './packages/index.js',
            output: {
                // path: path.resolve(__dirname, './lib'),
                // publicPath: '/lib/',
                filename: 'filename.js',
                library: 'bp',
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
        }
    }
}