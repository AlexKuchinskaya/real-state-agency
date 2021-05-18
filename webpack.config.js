const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const path = require('path');

module.exports = {
    entry: [`./src/index.js`], // webpack entry point. Module to start building dependency graph
    output: {
        // path: path.resolve(__dirname, '/public'),
        path: __dirname + '/public', // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build
        // publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                },
            },

            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ],
    },
    // plugins: [  // Array of plugins to apply to build chunk
    //     new HtmlWebpackPlugin({
    //         template: __dirname + "./public/index.html",
    //         inject: 'body'
    //     })
    // ],
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       filename: 'index.pug',
    //       minify: false
    //     }),
    //     new HtmlWebpackPugPlugin()
    //   ],  
    devServer: { 
        contentBase: './public',  //source of static assets
        historyApiFallback: {
            index: 'index.html'
          },
        port: 7700, // port to run dev-server
        open: true
    } ,
    // resolve: {
    //     extensions: [".js", ".json"]
    // },
    // devtool: 'source-map',
};