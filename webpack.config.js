const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
    entry: { main: './src/js/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new InjectManifest({
      swSrc: './service-worker.js',
      include:[/\.html$/,/\.css$/,/\.js$/,/\.img$/ ,/\.svg$/   ]

    })
  ]
};