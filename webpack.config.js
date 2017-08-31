var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './app/main.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '',
        filename: 'dist/js/[name].[hash].js',
        chunkFilename: 'dist/js/[id].chunk.[chunkhash:8].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            include: [path.resolve(__dirname, 'app')]
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    }),
                    sass: ExtractTextPlugin.extract({
                        use: ["css-loader", "sass-loader"]
                    })
                }
            }
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'vue-style-loader',
                use: ["css-loader", "postcss-loader", "sass-loader"]
            })
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['public/dist']),
        new ExtractTextPlugin({
            filename: 'dist/css/index.[contenthash:8].css'
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            mangle: { // 排除不想要压缩的对象名称
                except: ['$', 'exports', 'require', 'module']
            },
            compress: {
                // http://lisperator.net/uglifyjs/compress
                warnings: false,    // warn about potentially dangerous optimizations/code
                conditionals: true, // optimize if-s and conditional expressions
                unused: true,       // drop unused variables/functions
                comparisons: true,  // optimize comparisons
                sequences: true,    // join consecutive statements with the "comma operato"
                dead_code: true,    // discard unreachable code 丢弃未使用的代码
                evaluate: true,     // evaluate constant expressions
                join_vars: true,    // join var declarations
                if_return: true     // optimize if-s followed by return/continue
            },
            output: {
                // https://github.com/mishoo/UglifyJS2/blob/master/lib/output.js
                comments: false
            },
            sourceMap: false         //将错误信息的位置映射到模块。这会减慢编译的速度。仅在开发环境下使用。
        }),*/
        new HtmlWebpackPlugin({
            chunks: ['app'],
            filename: 'index.html',
            template: './views/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.scss', '.css', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('./app')
        },
        modules: ['node_modules']
    }
}