// const path = request('path');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './app/index.js',
//     mode: development,
//     output: {
//         filename: '[name].js',
//         path: path.resolve(_dirname, 'dist'),
//     },

    const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
    const path = require( 'path' );
    module.exports = {
       context: __dirname,
       entry: './app/index.js',
       output: {
          path: path.resolve( __dirname, 'dist' ),
          filename: 'main.js',
       },
    
       plugins: [
          new HtmlWebPackPlugin()
       ]
    };

// plugins :[
//     new MiniCSSExtractPlugin({
//         filename: `[name].css`,
//         chunkFilename: '[id].css'
//     })
// ],



// module: {
//     rules: [
//         {
//             test: /\.scss$/i,
//             use:[
//                 MiniCSSExtractPlugin.loader,
//                 'css-loader',
//                 'sass-loader'        
//             ]
//         }
//     ]
// },


// 

