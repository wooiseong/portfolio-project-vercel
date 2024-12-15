const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = {   
    entry: path.resolve(__dirname, 'src/index.js'),    
    output: {        
        path: path.resolve(__dirname, 'dist'),        
        filename: '/index.js',        
        clean: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'assets/[hash][ext][query]'
          }
        }
      ],
    },
    optimization: {
      nodeEnv: false,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
}