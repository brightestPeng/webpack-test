const webpack = require("webpack");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../build"),
    hot: true,
    port: 3000,
  },
  plugins: [
    // 默认,可以不用添加
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    
  ],
});
