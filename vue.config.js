var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
    configureWebpack: () => {
        return {
            //入口这里一个是测试组件时npm run dev的入口文件，一个是npm run build的入口文件
            entry: './packages/index.js',
            output: {
                // path: path.resolve(__dirname, './lib'),
                // publicPath: '/lib/', //输出的文件夹
                filename: 'filename.js',//输出的文件名
                library: 'bp', //引用js文件时创建的全局变量名
                libraryTarget: 'umd',
                umdNamedDefine: true
            },
        }
    }
}