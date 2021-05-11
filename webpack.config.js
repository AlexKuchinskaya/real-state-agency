const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
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
        }
        ],
    },
    // plugins: [  // Array of plugins to apply to build chunk
    //     new HtmlWebpackPlugin({
    //         template: __dirname + "./public/index.html",
    //         inject: 'body'
    //     })
    // ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: './public',  //source of static assets
        port: 7700, // port to run dev-server
        open: true
    } ,
    // resolve: {
    //     extensions: [".js", ".json"]
    // },
    // devtool: 'source-map',
};