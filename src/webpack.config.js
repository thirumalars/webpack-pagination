const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
  const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  mode:"development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\.css$/, use: "css-loader" }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
  new ExtractCssChunks( 
    {
    rules: [
      {
        test: /\.css$/i,
        use: [ExtractCssChunks.loader, 'css-loader'],
      },
    ],
  },
    )
  ]
};
