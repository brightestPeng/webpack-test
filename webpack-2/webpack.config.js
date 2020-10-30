const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require("path")

module.exports = {
  entry:path.resolve(__dirname,'src/index.js'),
  output:{
    path:path.resolve(__dirname,'build'),
    filename:"[name].[chunkhash:8].js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"public/index.html")
    }),
    new CleanWebpackPlugin(),
    new ManifestPlugin()
  ]
};
