const path = require('path');

module.exports = {
    entry: [`./src/index.js`],
    output: {
        path: __dirname + '/docs',
        filename: 'bundle.js',
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
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader"
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
    devServer: { 
        contentBase: './docs',
        historyApiFallback: {
            index: 'index.html'
          },
        port: 7700,
        open: true
    } ,
    // resolve: {
    //     extensions: [".js", ".json"]
    // },
    devtool: 'source-map',
};